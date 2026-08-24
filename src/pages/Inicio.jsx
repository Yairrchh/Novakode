import { Link } from 'react-router-dom'
import heroNebula from '../assets/hero-supernova.jpg'
import olaxPreview from '../assets/olax-preview.png'
import todoticketPreview from '../assets/todoticket-preview.png'
import shopiPreview from '../assets/shopi-preview.png'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'
import StarField from '../components/StarField'

const PROJECT_PREVIEWS = {
  Olax: olaxPreview,
  Todoticket: todoticketPreview,
  Shopi: shopiPreview,
}

const SERVICE_ICONS = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 8-4 4 4 4M15 8l4 4-4 4M13.5 6l-3 12" />
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className="h-6 w-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 4h1.5l2.1 11.1a2 2 0 0 0 2 1.65h7.4a2 2 0 0 0 1.96-1.6L19.5 8H6"
      />
      <circle cx="9.5" cy="20" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="20" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className="h-6 w-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 12a8 8 0 1 1 3.2 6.4L4 19.5l1.1-3.3A7.96 7.96 0 0 1 4 12Z"
      />
      <path strokeLinecap="round" d="M8.5 11h7M8.5 14h4.5" />
    </svg>
  ),
}

const COMMITMENT_ICONS = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className="h-5 w-5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.5 5 6v5.5c0 4.2 2.9 7.4 7 8.5 4.1-1.1 7-4.3 7-8.5V6l-7-2.5Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4.5" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12.5 3 5 13.5h5.5L10.5 21 19 10h-5.5L12.5 3Z" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className="h-5 w-5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 13a8 8 0 1 1 16 0"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 13v3.5a1.5 1.5 0 0 0 1.5 1.5H6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2Zm16 0v3.5a1.5 1.5 0 0 1-1.5 1.5H18a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2Z"
      />
      <path strokeLinecap="round" d="M18 18v.5a2.5 2.5 0 0 1-2.5 2.5H13" />
    </svg>
  ),
}

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
        <StarField />

        <div className="relative mx-auto max-w-3xl px-6 pb-10 pt-14 text-center md:pb-14 md:pt-20">
          <Reveal as="h1" y={16} className="mx-auto max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-paper [text-shadow:0_2px_20px_rgba(0,0,0,0.6)] md:text-6xl">
            {t.hero.titleBefore}
            <span className="text-signal">{t.hero.titleAccent}</span>
            {t.hero.titleAfter}
          </Reveal>

          <Reveal as="p" y={16} delay={150} className="mx-auto mt-6 max-w-lg text-[#dbe4ef] [text-shadow:0_2px_16px_rgba(0,0,0,0.85)] md:text-lg">
            {t.hero.subtitle}
          </Reveal>

          <Reveal y={16} delay={300} className="mt-10 flex flex-wrap justify-center gap-4">
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
          </Reveal>
        </div>

        <div className="h-4 md:h-8" />
      </section>

      <section className="border-b border-edge px-6 py-6">
        <Reveal
          y={12}
          className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-widest text-slate"
        >
          <span className="text-signalDark">{t.stackLabel}</span>
          {t.stackItems.map((item, index) => (
            <span key={item} className="contents">
              {index > 0 && <span className="text-slate/30">/</span>}
              <span>{item}</span>
            </span>
          ))}
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-8">
        <Reveal as="h2" className="text-xs font-bold uppercase tracking-widest text-signalDark">
          {t.queHago}
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {t.servicios.map((servicio, index) => (
            <Reveal
              key={servicio.title}
              delay={index * 100}
              className="group rounded-2xl border border-edge bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-xl hover:shadow-signal/10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signalDark transition-colors duration-300 group-hover:bg-signal group-hover:text-white">
                  {SERVICE_ICONS[servicio.icon]}
                </div>
                <h3 className="text-base font-semibold text-ink">{servicio.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate">{servicio.detail}</p>
            </Reveal>
          ))}
        </div>
        <Link
          to="/servicios"
          className="mt-8 inline-block text-sm font-semibold text-signalDark hover:underline"
        >
          {t.verTodosServicios}
        </Link>
      </section>

      <section className="border-t border-edge px-6 pt-8 pb-10">
        <Reveal className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-extrabold text-ink md:text-4xl">{t.trabajoReciente.titulo}</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate">{t.trabajoReciente.subtitulo}</p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {t.proyectosDestacados.map((proyecto, index) => {
            const CardTag = proyecto.url ? 'a' : 'div'
            return proyecto.comingSoon ? (
              <Reveal
                key={proyecto.nombre}
                delay={index * 100}
                className="overflow-hidden rounded-2xl border border-dashed border-edge bg-card"
              >
                <div className="flex aspect-video items-center justify-center bg-night/[0.03]">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate/50">
                    {t.proximamente}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold text-ink/60">{proyecto.nombre}</h3>
                  <p className="mt-2 text-sm text-slate/70">{proyecto.resumen}</p>
                </div>
              </Reveal>
            ) : (
              <Reveal
                key={proyecto.nombre}
                as={CardTag}
                delay={index * 100}
                {...(proyecto.url
                  ? { href: proyecto.url, target: '_blank', rel: 'noreferrer' }
                  : {})}
                className="group overflow-hidden rounded-2xl border border-edge bg-card transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-xl hover:shadow-signal/10"
              >
                <div className="aspect-video overflow-hidden bg-night/[0.03]">
                  <img
                    src={PROJECT_PREVIEWS[proyecto.nombre]}
                    alt={proyecto.nombre}
                    className="h-full w-full object-contain object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold text-ink group-hover:text-signalDark">
                    {proyecto.nombre}
                  </h3>
                  <p className="mt-2 text-sm text-slate">{proyecto.resumen}</p>
                  {proyecto.url && (
                    <span className="mt-3 inline-block text-xs font-bold uppercase tracking-widest text-signalDark">
                      {t.verSitio}
                    </span>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/portafolio"
            className="text-sm font-semibold text-signalDark hover:underline"
          >
            {t.verCasoCompleto}
          </Link>
        </div>
      </section>

      <section className="bg-canvas px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <Reveal as="p" className="text-xs font-bold uppercase tracking-widest text-signalDark">
            {t.compromisos.eyebrow}
          </Reveal>
          <div className="mt-6 grid gap-10 md:grid-cols-3">
            {t.compromisos.items.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="flex items-center gap-2 text-signalDark">
                  {COMMITMENT_ICONS[item.icon]}
                  <h3 className="text-base font-bold text-ink">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate">{item.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-night px-6 py-20 text-center">
        <StarField starCount={18} shootingStars={false} />
        <Reveal className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-paper md:text-4xl">
            {t.ctaFinal.titulo}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[#dbe4ef]">{t.ctaFinal.subtitulo}</p>
          <a
            href="https://wa.link/ull0cb"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-signal px-7 py-3.5 text-sm font-bold text-night shadow-[0_0_24px_rgba(41,197,246,0.35)] transition-opacity hover:opacity-90"
          >
            {t.ctaFinal.boton}
          </a>
          <p className="mt-4 text-xs text-muted">{t.ctaFinal.nota}</p>
        </Reveal>
      </section>
    </>
  )
}

export default Inicio
