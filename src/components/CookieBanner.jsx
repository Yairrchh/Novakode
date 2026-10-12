import { useSyncExternalStore } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { getBannerVisible, setConsent, subscribeConsent } from '../lib/metaPixel'

function CookieBanner() {
  const { t } = useLanguage()
  const visible = useSyncExternalStore(subscribeConsent, getBannerVisible, () => false)

  if (!visible) return null
  const c = t.cookies

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={c.titulo}
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-sm rounded-xl border border-signal/20 bg-night p-4 text-paper shadow-2xl shadow-black/50 md:inset-x-auto md:bottom-4 md:left-4 md:mx-0"
    >
      <p className="text-[11px] font-bold uppercase tracking-widest text-signal">{c.titulo}</p>
      <p className="mt-1.5 text-xs leading-relaxed text-[#dbe4ef]">
        {c.texto}{' '}
        <Link to="/privacidad" className="font-semibold text-signal underline decoration-dotted">
          {c.masInfo}
        </Link>
      </p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => setConsent('granted')}
          className="rounded-full bg-signal px-4 py-1.5 text-xs font-bold text-night transition-opacity hover:opacity-90"
        >
          {c.aceptar}
        </button>
        <button
          type="button"
          onClick={() => setConsent('denied')}
          className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-bold text-paper transition-colors hover:border-signal hover:text-signal"
        >
          {c.rechazar}
        </button>
      </div>
    </div>
  )
}

export default CookieBanner
