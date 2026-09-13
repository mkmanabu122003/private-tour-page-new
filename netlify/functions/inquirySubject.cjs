// Single source of truth for the inquiry notification subject line.
//
// Every internal notification about one submission must carry a subject unique
// to that submission. Gmail threads by subject, so the old constant subject
// ("Contact from website") collapsed unrelated customers into one conversation
// — which the downstream AI Reply Copilot then read as a single customer's
// history.
//
// The Netlify built-in email notification is configured in the site's
// submission_created hook with the template
//   [Tanuki Inquiry] %{submissionId} | %{formName}
// and this helper resolves to the same string, so the Netlify notification and
// the Resend admin copy for one submission share a thread and never join
// another submission's.
//
// Only the submission id and the form name reach the subject. Nothing the
// visitor typed is interpolated here.

const SUBJECT_PREFIX = "[Tanuki Inquiry]";

/**
 * @param {string} submissionId Netlify submission id (payload.id)
 * @param {string} formName     Netlify form name ("contact" / "contact-es")
 * @returns {string}
 */
function buildNotificationSubject(submissionId, formName) {
  const id = sanitizeToken(submissionId) || fallbackId();
  const form = sanitizeToken(formName) || "unknown-form";
  return `${SUBJECT_PREFIX} ${id} | ${form}`;
}

// Subjects stay single-line and free of anything a submission could inject, so
// keep only the characters an id or a form name can legitimately contain.
function sanitizeToken(value) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/[^A-Za-z0-9._-]/g, "").slice(0, 64);
}

// Netlify always sends payload.id, but a notification with a colliding subject
// is worse than one with a synthetic id, so never fall back to a constant.
function fallbackId() {
  return `no-id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

module.exports = { buildNotificationSubject, SUBJECT_PREFIX };
