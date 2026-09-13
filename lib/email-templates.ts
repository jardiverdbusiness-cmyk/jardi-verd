import type { ContactFormInput } from "./contact-schema";

const ownerCopy = {
  ca: { subject: "Nova sol·licitud de pressupost — Jardí Verd" },
  es: { subject: "Nueva solicitud de presupuesto — Jardí Verd" },
  en: { subject: "New quote request — Jardí Verd" },
};

const leadCopy = {
  ca: {
    subject: "Hem rebut la teva sol·licitud — Jardí Verd",
    greeting: (name: string) => `Hola ${name},`,
    body: "Gràcies per contactar amb Jardí Verd. Hem rebut la teva sol·licitud i ens posarem en contacte amb tu en menys de 24 hores laborables.",
    urgent:
      "Si és urgent, truca'ns o escriu-nos directament per WhatsApp al 625 677 383.",
    signature: "L'equip de Jardí Verd",
  },
  es: {
    subject: "Hemos recibido tu solicitud — Jardí Verd",
    greeting: (name: string) => `Hola ${name},`,
    body: "Gracias por contactar con Jardí Verd. Hemos recibido tu solicitud y nos pondremos en contacto contigo en menos de 24 horas laborables.",
    urgent:
      "Si es urgente, llámanos o escríbenos directamente por WhatsApp al 625 677 383.",
    signature: "El equipo de Jardí Verd",
  },
  en: {
    subject: "We've received your request — Jardí Verd",
    greeting: (name: string) => `Hi ${name},`,
    body: "Thank you for contacting Jardí Verd. We've received your request and will get back to you within 24 working hours.",
    urgent: "If it's urgent, call or WhatsApp us directly at +34 625 677 383.",
    signature: "The Jardí Verd team",
  },
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildOwnerNotificationEmail(data: ContactFormInput) {
  const copy = ownerCopy[data.locale];
  const rows: [string, string][] = [
    ["Nom", data.name],
    ["Telèfon", data.phone],
    ["Email", data.email],
    ["Municipi", data.city],
    ["Servei", data.service || "—"],
    ["Idioma", data.locale.toUpperCase()],
    ["Pàgina d'origen", data.sourcePath || "—"],
  ];

  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;color:#20392f;font-weight:600;">${escapeHtml(
          label
        )}</td><td style="padding:6px 12px;color:#182b23;">${escapeHtml(
          value
        )}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="color:#20392f;">Nova sol·licitud de contacte</h2>
      <table style="border-collapse:collapse;width:100%;background:#f6ecd6;border-radius:12px;overflow:hidden;">
        ${rowsHtml}
      </table>
      <p style="color:#182b23;margin-top:16px;"><strong>Missatge:</strong></p>
      <p style="color:#182b23;white-space:pre-wrap;background:#fbf6ea;padding:12px;border-radius:8px;">${escapeHtml(
        data.message
      )}</p>
    </div>
  `;

  return { subject: copy.subject, html };
}

export function buildLeadConfirmationEmail(data: ContactFormInput) {
  const copy = leadCopy[data.locale];
  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="color:#20392f;">Jardí Verd</h2>
      <p style="color:#182b23;">${escapeHtml(copy.greeting(data.name))}</p>
      <p style="color:#182b23;">${copy.body}</p>
      <p style="color:#182b23;">${copy.urgent}</p>
      <p style="color:#457a63;margin-top:24px;">${copy.signature}</p>
    </div>
  `;

  return { subject: copy.subject, html };
}
