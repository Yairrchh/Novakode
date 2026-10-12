// Credenciales de EmailJS (Account → API Keys, y Email Services / Email Templates).
// La Public Key es pública por diseño. Vacío = el formulario no puede enviar.
const SERVICE_ID = 'service_7t2dt4x'
const TEMPLATE_ID = 'template_i3a6jle'
const PUBLIC_KEY = 'yj7u36g26Uf0vnZI9'

export async function sendContactEmail(params) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error('EmailJS no está configurado')
  }
  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: PUBLIC_KEY,
      template_params: params,
    }),
  })
  if (!res.ok) throw new Error(`EmailJS ${res.status}: ${await res.text()}`)
}
