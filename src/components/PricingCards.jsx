import { useLanguage } from '../i18n/LanguageContext'
import Reveal from './Reveal'
import StarField from './StarField'

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

function planIcon(nombre) {
  if (nombre.includes('Corporativo') || nombre.includes('Corporate')) return StarIcon
  if (nombre.includes('Medida') || nombre.includes('Custom')) return DiamondIcon
  return null
}

function PricingCards() {
  const { t } = useLanguage()
  const planes = t.planes

  return (
    <div className="grid items-start gap-6 md:grid-cols-3">
      {planes.items.map((plan, index) => (
        <Reveal
          key={plan.nombre}
          delay={index * 100}
          className={`relative h-full overflow-hidden rounded-2xl p-6 ${
            plan.dark
              ? 'border border-night bg-night text-paper'
              : plan.destacado
                ? 'border border-signal bg-card md:shadow-xl md:shadow-signal/10'
                : 'border-2 border-slate/25 bg-card'
          }`}
        >
          {plan.dark && <StarField starCount={14} shootingStars={false} />}
          <div className="relative z-10 flex h-full flex-col">
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

            <a
              href="https://wa.link/ull0cb"
              target="_blank"
              rel="noreferrer"
              className={`mt-6 rounded-full px-6 py-3 text-center text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                plan.dark
                  ? 'bg-paper text-night hover:shadow-white/10'
                  : plan.destacado
                    ? 'bg-signal text-night hover:shadow-signal/30'
                    : 'border border-edge text-ink hover:border-signal hover:text-signalDark'
              }`}
            >
              {plan.boton} →
            </a>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export default PricingCards
