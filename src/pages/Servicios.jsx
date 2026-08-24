import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'
import StarField from '../components/StarField'
import PricingCards from '../components/PricingCards'

const WrenchIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className={className}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.7 6.3a4 4 0 0 0-5.4 4.9L4 16.5 7.5 20l5.3-5.3a4 4 0 0 0 4.9-5.4l-2.8 2.8-2.1-2.1 2.8-2.8Z"
    />
  </svg>
)

function Servicios() {
  const { t } = useLanguage()
  const p = t.servicios_page
  const planes = t.planes

  return (
    <>
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-10">
        <Reveal className="text-center">
          <h1 className="text-3xl font-extrabold text-ink md:text-4xl">{planes.titulo}</h1>
          <p className="mx-auto mt-3 max-w-xl text-slate">{planes.subtitulo}</p>
        </Reveal>

        <div className="mx-auto mt-16">
          <PricingCards />
        </div>

        <Reveal
          as="div"
          className="mt-10 flex flex-col gap-6 rounded-2xl bg-canvas p-6 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-card text-signalDark shadow-sm">
              <WrenchIcon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-ink">{planes.soporte.titulo}</h3>
              <p className="mt-1.5 max-w-xl text-sm text-slate">{planes.soporte.descripcion}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {planes.soporte.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-edge bg-card px-3 py-1 text-xs font-medium text-slate"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/contacto"
            className="shrink-0 self-start rounded-full border border-ink px-6 py-3 text-center text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-signal hover:text-signalDark md:self-center"
          >
            {planes.soporte.boton}
          </Link>
        </Reveal>
      </div>

      <section className="relative overflow-hidden bg-night px-6 py-20 text-center">
        <StarField starCount={18} shootingStars={false} />
        <Reveal className="relative">
        <h2 className="mx-auto max-w-2xl text-2xl font-extrabold text-paper md:text-3xl">
          {p.ctaPlanes.titulo}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[#dbe4ef]">{p.ctaPlanes.subtitulo}</p>
        <Link
          to="/contacto"
          className="mt-8 inline-block rounded-full bg-signal px-7 py-3.5 text-sm font-bold text-night shadow-[0_0_24px_rgba(41,197,246,0.35)] transition-opacity hover:opacity-90"
        >
          {p.ctaPlanes.boton}
        </Link>
        <p className="mt-4 text-xs text-muted">{p.ctaPlanes.nota}</p>
        </Reveal>
      </section>

      <div className="mx-auto max-w-6xl px-6 pb-20">
        <Reveal className="mt-16 text-center">
          <h2 className="text-2xl font-extrabold text-ink md:text-3xl">{t.proceso.titulo}</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate">{t.proceso.subtitulo}</p>
        </Reveal>

        <div className="relative mx-auto mt-10 max-w-2xl">
          <div className="absolute left-5 top-4 bottom-4 w-px bg-edge" />

          <div className="flex flex-col gap-2">
            {t.proceso.pasos.map((paso, index) => (
              <Reveal
                key={paso.numero}
                delay={index * 90}
                y={16}
                className="grid grid-cols-[2.5rem_1fr] items-start gap-4"
              >
                <div className="peer relative z-10 mt-4 flex justify-center">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-edge bg-card text-sm font-bold text-slate transition-colors duration-300 hover:border-signal hover:text-signalDark">
                    {paso.numero}
                  </span>
                </div>

                <div className="rounded-xl border border-transparent p-4 transition-all duration-300 hover:border-signal hover:bg-card hover:shadow-md peer-hover:border-signal peer-hover:bg-card peer-hover:shadow-md">
                  <h3 className="text-base font-bold text-ink">
                    {paso.numero}. {paso.titulo}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate">{paso.detalle}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Servicios
