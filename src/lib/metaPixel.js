// Pega aquí tu Pixel ID de Meta (Administrador de Eventos). Vacío = el Pixel no se carga.
const PIXEL_ID = '2324701155011210'

const CONSENT_KEY = 'novakode-cookie-consent'
const listeners = new Set()
let loaded = false
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
    load()
    if (window.fbq) window.fbq('consent', 'grant')
    if (previous !== 'granted') trackPageView()
  } else if (window.fbq) {
    window.fbq('consent', 'revoke')
  }
  emit()
}

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
  if (consent !== 'granted' || !PIXEL_ID) return
  load()
  window.fbq('track', 'PageView')
}

export function trackEvent(name, params) {
  if (consent !== 'granted' || !PIXEL_ID) return
  load()
  window.fbq('track', name, params)
}
