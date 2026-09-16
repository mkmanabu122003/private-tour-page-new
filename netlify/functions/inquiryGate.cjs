// Server-side gate for contact form submissions.
//
// The inquiry form enforces its own rules in the browser (required fields,
// email type, adults 1-20), but Netlify Forms accepts any POST to "/" that
// carries a known form-name. On 2026-09-16 an automated SQL-injection scanner
// sent ~45 submissions in 40 seconds with payloads such as
//   ' ORDER BY 1000-- -
//   ) AND (1361740536=1361740536'
// in the name field and every other field empty. The honeypot cannot catch a
// client that leaves the honeypot empty, and Akismet let them through, so each
// one reached Slack and Resend.
//
// This module decides whether a submission looks like it came from the real
// form. It only guards the fan-out (auto-reply, admin copy, Slack, staging
// lead). Netlify still stores the submission and still sends its own built-in
// notification, so a rejected one is never lost: it can be read in the Netlify
// Forms dashboard.
//
// Bias toward accepting. A lost customer inquiry costs far more than one spam
// notification, so a submission is rejected only when it plainly cannot have
// come from the form.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Fragments an SQL-injection probe uses and a person's name never contains.
// Each alternative needs SQL structure, not just a keyword, so "Andrea" or
// "Union City" are untouched.
const SQL_PROBE_RE = new RegExp(
  [
    "\\bORDER\\s+BY\\s+\\d+",
    "\\bUNION\\b[\\s\\S]*\\bSELECT\\b",
    "\\bSELECT\\b[\\s\\S]*\\bFROM\\b",
    "\\b(AND|OR)\\b\\s*\\(?\\s*['\"]?\\d+['\"]?\\s*=\\s*['\"]?\\d+",
    ";\\s*(DROP|DELETE|INSERT|UPDATE|ALTER|TRUNCATE)\\b",
    "\\b(SLEEP|BENCHMARK|PG_SLEEP)\\s*\\(",
    "\\bWAITFOR\\s+DELAY\\b",
    "--\\s*-?\\s*$",
    "/\\*[\\s\\S]*\\*/",
  ].join("|"),
  "i",
);

const NAME_MAX = 120;

function str(value) {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * @param {Record<string, unknown>} data Netlify payload.data
 * @returns {{ ok: true } | { ok: false, reason: string }}
 */
function assessSubmission(data) {
  const d = data && typeof data === "object" ? data : {};
  const name = str(d.name);
  const email = str(d.email);
  const date = str(d.date);
  const adults = str(d.adults);

  if (!email) return reject("missing_email");
  if (!EMAIL_RE.test(email)) return reject("invalid_email");

  if (!name) return reject("missing_name");
  if (name.length > NAME_MAX) return reject("name_too_long");
  if (SQL_PROBE_RE.test(name)) return reject("sql_probe_in_name");

  if (!date) return reject("missing_date");

  if (!adults) return reject("missing_adults");
  if (!/^\d{1,2}$/.test(adults) || Number(adults) < 1 || Number(adults) > 20) {
    return reject("invalid_adults");
  }

  // The message is optional on the form, but a probe in it is still a probe.
  if (SQL_PROBE_RE.test(str(d.message))) return reject("sql_probe_in_message");

  return { ok: true };
}

function reject(reason) {
  return { ok: false, reason: reason };
}

module.exports = { assessSubmission, SQL_PROBE_RE, EMAIL_RE };
