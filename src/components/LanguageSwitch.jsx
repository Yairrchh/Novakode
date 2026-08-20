import { useLanguage } from '../i18n/LanguageContext'

function LanguageSwitch() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-white/[0.08] bg-white/[0.04] p-0.5 text-[11px] font-bold">
      <button
        type="button"
        onClick={() => setLang('es')}
        aria-pressed={lang === 'es'}
        className={`rounded-full px-2 py-0.5 transition-colors ${
          lang === 'es' ? 'bg-signal text-night' : 'text-muted hover:text-paper'
        }`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`rounded-full px-2 py-0.5 transition-colors ${
          lang === 'en' ? 'bg-signal text-night' : 'text-muted hover:text-paper'
        }`}
      >
        EN
      </button>
    </div>
  )
}

export default LanguageSwitch
