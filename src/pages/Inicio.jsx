import { Link } from 'react-router-dom'
import heroNebula from '../assets/hero-supernova.jpg'
import { useLanguage } from '../i18n/LanguageContext'

function Inicio() {
  const { t } = useLanguage()

  return (
    <>
      <section
        className="relative overflow-hidden bg-cover bg-[center_45%] bg-night"
        style={{ backgroundImage: `url(${heroNebula})` }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_60%_at_50%_48%,rgba(15,20,32,0.88)_0%,rgba(15,20,32,0.55)_55%,rgba(15,20,32,0.1)_85%,rgba(15,20,32,0)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-night/40 via-night/55 to-night" />

        <div className="relative mx-auto max-w-3xl px-6 pb-24 pt-14 text-center md:pb-36 md:pt-20">
          <h1 className="mx-auto max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-paper [text-shadow:0_2px_20px_rgba(0,0,0,0.6)] md:text-6xl">
            {t.hero.titleBefore}
            <span className="text-signal">{t.hero.titleAccent}</span>
            {t.hero.titleAfter}
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-[#dbe4ef] [text-shadow:0_2px_16px_rgba(0,0,0,0.85)] md:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/servicios"
              className="rounded-full bg-signal px-7 py-3.5 text-sm font-bold text-night shadow-[0_0_24px_rgba(41,197,246,0.35)] transition-opacity hover:opacity-90"
            >
              {t.hero.ctaPrimary}
            </Link>
            <Link
              to="/contacto"
              className="rounded-full border border-white/30 bg-white/[0.06] px-7 py-3.5 text-sm font-semibold text-paper backdrop-blur transition-colors hover:border-signal hover:text-signal"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>

        <div className="h-16 md:h-24" />
      </section>

      <section className="border-b border-edge px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-widest text-slate">
          <span className="text-signalDark">{t.stackLabel}</span>
          <span>react</span>
          <span className="text-slate/30">/</span>
          <span>vite</span>
          <span className="text-slate/30">/</span>
          <span>tailwind</span>
          <span className="text-slate/30">/</span>
          <span>supabase</span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-xs font-bold uppercase tracking-widest text-signalDark">{t.queHago}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {t.servicios.map((servicio) => (
            <div key={servicio.title} className="rounded-2xl border border-edge bg-card p-6">
              <h3 className="text-base font-semibold text-ink">{servicio.title}</h3>
              <p className="mt-3 text-sm text-slate">{servicio.detail}</p>
            </div>
          ))}
        </div>
        <Link
          to="/servicios"
          className="mt-8 inline-block text-sm font-semibold text-signalDark hover:underline"
        >
          {t.verTodosServicios}
        </Link>
      </section>

      <section className="border-t border-edge px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-xs font-bold uppercase tracking-widest text-signalDark">{t.trabajoReciente}</h2>
          <div className="mt-8 flex flex-col justify-between gap-6 rounded-2xl border border-edge bg-card p-8 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold text-ink">{t.olax.titulo}</h3>
              <p className="mt-2 max-w-lg text-sm text-slate">{t.olax.detalle}</p>
            </div>
            <Link
              to="/portafolio"
              className="whitespace-nowrap text-sm font-semibold text-signalDark hover:underline"
            >
              {t.verCasoCompleto}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Inicio
