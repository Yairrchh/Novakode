// IDs públicos de medición. Vacío = esa herramienta no se carga.
const PIXEL_ID = '2324701155011210' // Meta Pixel (Administrador de Eventos)
const GA_ID = 'G-VMZQ1395JB' // Google Analytics 4

const CONSENT_KEY = 'novakode-cookie-consent'
const listeners = new Set()
let metaLoaded = false
let gaLoaded = false
let prefsOpen = false

function readConsent() {
  try {
    const v = localStorage.getItem(CONSENT_KEY)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    return null
  }
}

let consent = typeof window === 'undefined' ? null : readConsent()

function emit() {
  listeners.forEach((l) => l())
}

export function subscribeConsent(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function getConsent() {
  return consent
}

// El banner se muestra si no hay decisión guardada o si se pidió reabrirlo desde el footer.
export function getBannerVisible() {
  return consent === null || prefsOpen
}

export function openCookiePreferences() {
  prefsOpen = true
  emit()
}

export function setConsent(value) {
  const previous = consent
  consent = value
  prefsOpen = false
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch {
    // storage unavailable, the choice only lasts for this visit
  }

  if (value === 'granted') {
    window[`ga-disable-${GA_ID}`] = false
    loadMeta()
    loadGoogle()
    if (window.fbq) window.fbq('consent', 'grant')
    if (previous !== 'granted') trackPageView()
  } else {
    window[`ga-disable-${GA_ID}`] = true
    if (window.fbq) window.fbq('consent', 'revoke')
  }
  emit()
}

function loadGoogle() {
  if (gaLoaded || !GA_ID || typeof window === 'undefined') return
  gaLoaded = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function () {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  // page_view se envía a mano en cada ruta (el sitio es una SPA)
  window.gtag('config', GA_ID, { send_page_view: false })
}

function loadMeta() {
  if (metaLoaded || !PIXEL_ID || typeof window === 'undefined') return
  metaLoaded = true

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
  if (consent !== 'granted') return
  if (PIXEL_ID) {
    loadMeta()
    window.fbq('track', 'PageView')
  }
  if (GA_ID) {
    loadGoogle()
    window.gtag('event', 'page_view', {
      page_location: window.location.href,
      page_path: window.location.pathname,
      page_title: document.title,
    })
  }
}

// Los eventos se nombran como en Meta; aquí se traducen al equivalente de GA4.
const GA_EVENTS = {
  Contact: (params) => ['contact', { method: params?.content_name, plan: params?.plan }],
  Lead: () => ['generate_lead', {}],
}

export function trackEvent(name, params) {
  if (consent !== 'granted') return
  if (PIXEL_ID) {
    loadMeta()
    window.fbq('track', name, params)
  }
  if (GA_ID && GA_EVENTS[name]) {
    loadGoogle()
    window.gtag('event', ...GA_EVENTS[name](params))
  }
}
