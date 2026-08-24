import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'

const CheckIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4 10-10" />
  </svg>
)

const StarIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.5 14.9 9l7 .6-5.3 4.6 1.6 6.8L12 17.6 5.8 21l1.6-6.8L2.1 9.6l7-.6L12 2.5Z" />
  </svg>
)

const DiamondIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 9 8 4h8l3.5 5-7.5 11-7.5-11Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 9h15M9 4l-1.5 5L12 20l4.5-11L15 4" />
  </svg>
)

const SparkleIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.5 2c.5 3.2 1.2 5.2 2.2 6.3 1 1 3 1.7 6.3 2.2-3.2.5-5.2 1.2-6.3 2.2-1 1-1.7 3-2.2 6.3-.5-3.2-1.2-5.2-2.2-6.3-1-1-3-1.7-6.3-2.2 3.2-.5 5.2-1.2 6.3-2.2 1-1 1.7-3 2.2-6.3Z" />
    <path d="M19 14.5c.25 1.35.6 2.2 1.05 2.65.45.45 1.3.8 2.65 1.05-1.35.25-2.2.6-2.65 1.05-.45.45-.8 1.3-1.05 2.65-.25-1.35-.6-2.2-1.05-2.65-.45-.45-1.3-.8-2.65-1.05 1.35-.25 2.2-.6 2.65-1.05.45-.45.8-1.3 1.05-2.65Z" />
  </svg>
)

const WrenchIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className={className}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.7 6.3a4 4 0 0 0-5.4 4.9L4 16.5 7.5 20l5.3-5.3a4 4 0 0 0 4.9-5.4l-2.8 2.8-2.1-2.1 2.8-2.8Z"
    />
  </svg>
)

function planIcon(nombre) {
  if (nombre.includes('Corporativo') || nombre.includes('Corporate')) return StarIcon
  if (nombre.includes('Medida') || nombre.includes('Custom')) return DiamondIcon
  return null
}

function Servicios() {
  const { t } = useLanguage()
  const p = t.servicios_page
  const planes = t.planes

  return (
    <>
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-10">
        <Reveal className="text-center">
          <h1 className="text-3xl font-extrabold text-ink md:text-4xl">{planes.titulo}</h1>
          <p className="mx-auto mt-3 max-w-xl text-slate">{planes.subtitulo}</p>
        </Reveal>

        <div className="mx-auto mt-16 grid items-start gap-6 md:grid-cols-3">
          {planes.items.map((plan, index) => (
            <Reveal
              key={plan.nombre}
              delay={index * 100}
              className={`relative flex h-full flex-col rounded-2xl p-6 ${
                plan.dark
                  ? 'border border-night bg-night text-paper'
                  : plan.destacado
                    ? 'border border-signal bg-card md:shadow-xl md:shadow-signal/10'
                    : 'border-2 border-slate/25 bg-card'
              }`}
            >
              {plan.badge && (
                <span
                  className={`inline-flex w-fit items-center gap-1.5 self-start rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest ${
                    plan.destacado
                      ? 'bg-signal text-night'
                      : plan.dark
                        ? 'border border-signal/40 bg-signal/10 text-signal shadow-[0_0_18px_rgba(41,197,246,0.25)]'
                        : 'bg-white/10 text-paper'
                  }`}
                >
                  {plan.dark && <SparkleIcon className="h-3 w-3" />}
                  {plan.badge}
                </span>
              )}

              <h3
                className={`${plan.badge ? 'mt-4' : 'mt-2'} flex items-center gap-2 text-lg font-bold ${plan.dark ? 'text-paper' : 'text-ink'}`}
              >
                {plan.nombre}
                {(() => {
                  const Icon = planIcon(plan.nombre)
                  return Icon ? (
                    <Icon className={`h-4 w-4 ${plan.dark ? 'text-signal' : 'text-signalDark'}`} />
                  ) : null
                })()}
              </h3>
              <p className={`mt-2 text-sm ${plan.dark ? 'text-[#c3ccdb]' : 'text-slate'}`}>{plan.descripcion}</p>

              <div className="mt-5 flex items-baseline gap-1">
                {plan.moneda ? (
                  <>
                    <span className={`text-3xl font-extrabold ${plan.dark ? 'text-paper' : 'text-ink'}`}>
                      ${plan.precio}
                    </span>
                    <span className={`text-sm ${plan.dark ? 'text-[#c3ccdb]' : 'text-slate'}`}>{plan.moneda}</span>
                  </>
                ) : (
                  <span className={`text-3xl font-extrabold ${plan.dark ? 'text-paper' : 'text-ink'}`}>
                    {plan.precio}
                  </span>
                )}
              </div>
              {plan.tipoPago && (
                <span className="mt-1 text-xs font-semibold text-signalDark">{plan.tipoPago}</span>
              )}

              {plan.incluyeIntro && (
                <p className={`mt-5 rounded-lg px-3 py-2 text-xs ${plan.dark ? 'bg-white/5 text-[#c3ccdb]' : 'bg-signal/5 text-slate'}`}>
                  {plan.incluyeIntro}
                </p>
              )}

              <ul className="mt-5 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2.5 text-sm ${plan.dark ? 'text-[#dbe4ef]' : 'text-ink'}`}
                  >
                    <CheckIcon
                      className={`mt-0.5 h-4 w-4 shrink-0 ${plan.dark ? 'text-signal' : 'text-signalDark'}`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div
                className={`mt-auto flex items-center gap-2 rounded-lg px-3 py-2 text-xs ${
                  plan.dark ? 'bg-white/5 text-[#c3ccdb]' : 'bg-canvas text-slate'
                }`}
              >
                <span>
                  {planes.entregaLabel}: <strong>{plan.entrega}</strong>
                </span>
              </div>

              <Link
                to="/contacto"
                className={`mt-6 rounded-full px-6 py-3 text-center text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                  plan.dark
                    ? 'bg-paper text-night hover:shadow-white/10'
                    : plan.destacado
                      ? 'bg-signal text-night hover:shadow-signal/30'
                      : 'border border-edge text-ink hover:border-signal hover:text-signalDark'
                }`}
              >
                {plan.boton} →
              </Link>
            </Reveal>
          ))}
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

      <section className="bg-night px-6 py-20 text-center">
        <Reveal>
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
