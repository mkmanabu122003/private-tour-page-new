// Netlify Function: Auto-reply on form submission
// Triggered automatically when a Netlify Form receives a submission
// https://docs.netlify.com/functions/trigger-on-events/

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = "Manabu | Tanuki Tabi Travel <info@tanuki-tabi-travel.com>";
const MANABU_EMAIL = "info@tanuki-tabi-travel.com";

const tourInfo = {
  asakusa: { name: "Asakusa Walking Tour", price: "¥30,000", duration: "3 hours", perPerson6: "¥5,000" },
  yanaka: { name: "Ueno & Yanaka Discovery", price: "¥40,000", duration: "4 hours", perPerson6: "¥6,700" },
  "shibuya-harajuku": { name: "Shibuya & Harajuku Tour", price: "¥35,000", duration: "3.5 hours", perPerson6: "¥5,800" },
  "tsukiji-ginza": { name: "Tsukiji & Ginza Tour", price: "¥30,000", duration: "3 hours", perPerson6: "¥5,000" },
  "imperial-palace": { name: "Imperial Palace & Marunouchi", price: "¥25,000", duration: "2.5 hours", perPerson6: "¥4,200" },
  "tokyo-food-tour": { name: "Tokyo Food Tour", price: "¥30,000~", duration: "3-4 hours", perPerson6: "¥5,000~" },
  "tokyo-night-tour": { name: "Tokyo Night Tour", price: "¥30,000~", duration: "3-4 hours", perPerson6: "¥5,000~" },
  "kamakura-day-trip": { name: "Kamakura Day Trip", price: "¥50,000", duration: "7-8 hours", perPerson6: "¥8,300" },
  "hakone-day-trip": { name: "Hakone Day Trip", price: "¥55,000", duration: "8-10 hours", perPerson6: "¥9,200" },
  "nikko-day-trip": { name: "Nikko Day Trip", price: "¥60,000", duration: "9-10 hours", perPerson6: "¥10,000" },
  custom: { name: "Custom Private Tour", price: "¥10,000~/hour", duration: "Flexible", perPerson6: "varies" },
};

function buildCustomerEmail(data) {
  const { name, email, tourType, date, groupSize } = data;
  const tour = tourInfo[tourType];
  const firstName = (name || "").split(" ")[0] || "there";

  const tourSection = tour
    ? `
        <div style="background: #f8f6f3; border-radius: 8px; padding: 20px; margin: 20px 0;">
          <p style="margin: 0 0 8px; font-weight: 600; color: #2d2a26;">Your Inquiry</p>
          <table style="width: 100%; font-size: 14px; color: #5a554e;">
            <tr><td style="padding: 4px 0;">Tour:</td><td style="padding: 4px 0; font-weight: 500; color: #2d2a26;">${tour.name}</td></tr>
            ${date ? `<tr><td style="padding: 4px 0;">Date:</td><td style="padding: 4px 0;">${date}</td></tr>` : ""}
            ${groupSize ? `<tr><td style="padding: 4px 0;">Group size:</td><td style="padding: 4px 0;">${groupSize}</td></tr>` : ""}
            <tr><td style="padding: 4px 0;">Price:</td><td style="padding: 4px 0; font-weight: 500; color: #2d2a26;">${tour.price} for your group</td></tr>
            <tr><td style="padding: 4px 0;">Duration:</td><td style="padding: 4px 0;">${tour.duration}</td></tr>
          </table>
        </div>`
    : "";

  return {
    from: FROM_EMAIL,
    to: email,
    subject: `Got it, ${firstName}! Manabu will reply within 24 hours`,
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 20px; color: #2d2a26;">

  <p style="font-size: 16px; line-height: 1.6;">Hi ${firstName},</p>

  <p style="font-size: 16px; line-height: 1.6;">
    Thank you for reaching out! I received your booking request and will send you
    a <strong>personalized tour plan within 24 hours</strong>.
  </p>

  ${tourSection}

  <p style="font-size: 16px; line-height: 1.6;">
    <strong>What happens next:</strong>
  </p>
  <ol style="font-size: 15px; line-height: 1.8; color: #5a554e;">
    <li>I'll review your request and plan a custom route based on your interests</li>
    <li>You'll receive a detailed itinerary with my recommendations</li>
    <li>We confirm the booking — <strong>no payment needed until tour day</strong></li>
  </ol>

  <p style="font-size: 14px; line-height: 1.6; color: #5a554e;">
    Can't wait to show you Tokyo!
  </p>

  <p style="font-size: 15px; line-height: 1.6;">
    Manabu<br>
    <span style="font-size: 13px; color: #8a8480;">
      National Government Licensed Guide Interpreter<br>
      Tanuki Tabi Travel &middot; 500+ tours &middot; 4.86&#9733;
    </span>
  </p>

  <hr style="border: none; border-top: 1px solid #e8e4df; margin: 24px 0;">

  <p style="font-size: 12px; color: #b0aaa3; line-height: 1.5;">
    This is an automated confirmation. Manabu will personally follow up with your custom tour plan.
    If you have urgent questions, reply directly to this email.
  </p>

</body>
</html>`,
  };
}

function buildCustomerEmailEs(data) {
  const { name, email, tourType, date, groupSize } = data;
  const tour = tourInfo[tourType];
  const firstName = (name || "").split(" ")[0] || "Hola";

  const tourSection = tour
    ? `
        <div style="background: #f8f6f3; border-radius: 8px; padding: 20px; margin: 20px 0;">
          <p style="margin: 0 0 8px; font-weight: 600; color: #2d2a26;">Tu Consulta</p>
          <table style="width: 100%; font-size: 14px; color: #5a554e;">
            <tr><td style="padding: 4px 0;">Tour:</td><td style="padding: 4px 0; font-weight: 500; color: #2d2a26;">${tour.name}</td></tr>
            ${date ? `<tr><td style="padding: 4px 0;">Fecha:</td><td style="padding: 4px 0;">${date}</td></tr>` : ""}
            ${groupSize ? `<tr><td style="padding: 4px 0;">Grupo:</td><td style="padding: 4px 0;">${groupSize}</td></tr>` : ""}
            <tr><td style="padding: 4px 0;">Precio:</td><td style="padding: 4px 0; font-weight: 500; color: #2d2a26;">${tour.price} para tu grupo</td></tr>
            <tr><td style="padding: 4px 0;">Duraci&oacute;n:</td><td style="padding: 4px 0;">${tour.duration}</td></tr>
          </table>
        </div>`
    : "";

  return {
    from: FROM_EMAIL,
    to: email,
    subject: `Recibido, ${firstName}! Manabu te respondera en 24 horas`,
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 20px; color: #2d2a26;">

  <p style="font-size: 16px; line-height: 1.6;">Hola ${firstName},</p>

  <p style="font-size: 16px; line-height: 1.6;">
    Gracias por escribirme. He recibido tu solicitud y te enviar&eacute; un
    <strong>plan de tour personalizado en menos de 24 horas</strong>.
  </p>

  ${tourSection}

  <p style="font-size: 16px; line-height: 1.6;">
    <strong>Pr&oacute;ximos pasos:</strong>
  </p>
  <ol style="font-size: 15px; line-height: 1.8; color: #5a554e;">
    <li>Revisar&eacute; tu solicitud y planificar&eacute; una ruta personalizada seg&uacute;n tus intereses</li>
    <li>Recibir&aacute;s un itinerario detallado con mis recomendaciones</li>
    <li>Confirmamos la reserva &mdash; <strong>no se requiere pago hasta el d&iacute;a del tour</strong></li>
  </ol>

  <p style="font-size: 14px; line-height: 1.6; color: #5a554e;">
    Estoy deseando ense&ntilde;arte Tokio!
  </p>

  <p style="font-size: 15px; line-height: 1.6;">
    Manabu<br>
    <span style="font-size: 13px; color: #8a8480;">
      Gu&iacute;a Int&eacute;rprete con Licencia Nacional del Gobierno de Jap&oacute;n<br>
      Tanuki Tabi Travel &middot; 500+ tours &middot; 4.86&#9733;
    </span>
  </p>

  <hr style="border: none; border-top: 1px solid #e8e4df; margin: 24px 0;">

  <p style="font-size: 12px; color: #b0aaa3; line-height: 1.5;">
    Esta es una confirmaci&oacute;n autom&aacute;tica. Manabu te escribir&aacute; personalmente con tu plan de tour.
    Si tienes alguna pregunta urgente, responde directamente a este correo.
  </p>

</body>
</html>`,
  };
}

function buildNotificationEmail(data) {
  const { name, email, tourType, date, groupSize, message } = data;
  const tour = tourInfo[tourType];

  return {
    from: FROM_EMAIL,
    to: MANABU_EMAIL,
    subject: `New inquiry: ${name || "Unknown"} - ${tour ? tour.name : tourType || "General"}${date ? " (" + date + ")" : ""}`,
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: monospace; padding: 20px; font-size: 14px;">
  <h2 style="margin: 0 0 16px;">New Booking Inquiry</h2>
  <table style="border-collapse: collapse;">
    <tr><td style="padding: 4px 12px 4px 0; font-weight: bold;">Name:</td><td>${name || "Not provided"}</td></tr>
    <tr><td style="padding: 4px 12px 4px 0; font-weight: bold;">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
    <tr><td style="padding: 4px 12px 4px 0; font-weight: bold;">Tour:</td><td>${tour ? tour.name : tourType || "Not specified"}</td></tr>
    <tr><td style="padding: 4px 12px 4px 0; font-weight: bold;">Date:</td><td>${date || "Not specified"}</td></tr>
    <tr><td style="padding: 4px 12px 4px 0; font-weight: bold;">Group:</td><td>${groupSize || "Not specified"}</td></tr>
  </table>
  <h3 style="margin: 20px 0 8px;">Message:</h3>
  <div style="background: #f5f5f5; padding: 12px; border-radius: 4px; white-space: pre-wrap;">${message || "No message"}</div>
  <p style="margin-top: 16px; color: #888;">Auto-reply has been sent to ${email}.</p>
</body>
</html>`,
  };
}

async function sendEmail(payload) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + RESEND_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error("Resend API error: " + res.status + " " + error);
  }

  return res.json();
}

// Netlify event-triggered function — must use exports.handler
exports.handler = async function (event, context) {
  var body = JSON.parse(event.body);
  var payload = body.payload;

  // Only process contact forms (EN and ES)
  var formName = payload.form_name;
  var isSpanish = formName === "contact-es";

  if (formName !== "contact" && !isSpanish) {
    return { statusCode: 200, body: "Skipped: not a contact form" };
  }

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set in environment variables");
    return { statusCode: 500, body: "Missing API key" };
  }

  var data = payload.data || {};
  console.log("Processing submission from:", data.email, "form:", formName);

  try {
    var customerEmail = isSpanish
      ? buildCustomerEmailEs(data)
      : buildCustomerEmail(data);

    var results = await Promise.all([
      sendEmail(customerEmail),
      sendEmail(buildNotificationEmail(data)),
    ]);

    console.log("Auto-reply sent to:", data.email);
    console.log("Notification sent to:", MANABU_EMAIL);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Email send failed:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
