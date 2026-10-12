// Pega aquí tu Pixel ID de Meta (Administrador de Eventos). Vacío = el Pixel no se carga.
const PIXEL_ID = '2324701155011210'

let loaded = false

function load() {
  if (loaded || !PIXEL_ID || typeof window === 'undefined') return
  loaded = true

  if (!window.fbq) {
    const fbq = function (...args) {
      fbq.callMethod ? fbq.callMethod(...args) : fbq.queue.push(args)
    }
    fbq.push = fbq
    fbq.loaded = true
    fbq.version = '2.0'
    fbq.queue = []
    window.fbq = window._fbq = fbq

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://connect.facebook.net/en_US/fbevents.js'
    document.head.appendChild(script)
  }

  window.fbq('init', PIXEL_ID)
}

export function trackPageView() {
  load()
  if (window.fbq && PIXEL_ID) window.fbq('track', 'PageView')
}

export function trackEvent(name, params) {
  load()
  if (window.fbq && PIXEL_ID) window.fbq('track', name, params)
}
