import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'
import Logo from '../components/Logo'
import StarField from '../components/StarField'

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2Zm5.98 14.09c-.24.68-1.4 1.31-1.93 1.4-.5.08-1.12.11-1.81-.12-.42-.13-.95-.31-1.63-.61-2.87-1.24-4.74-4.13-4.89-4.32-.14-.19-1.17-1.55-1.17-2.96 0-1.41.74-2.1 1-2.39.26-.28.57-.35.76-.35h.55c.18 0 .42-.03.65.5.24.57.83 1.98.9 2.13.07.14.11.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.14-.28.28-.12.55.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.24 2.21 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.19-.28.37-.23.62-.14.26.09 1.63.77 1.9.91.28.14.47.21.53.33.06.12.06.7-.18 1.38Z" />
  </svg>
)

const MailIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 6.5h17v11h-17v-11Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.5 7 8.5 6.5L20.5 7" />
  </svg>
)

const BoltIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.5 3 5 13.5h5.5L10.5 21 19 10h-5.5L12.5 3Z" />
  </svg>
)

const DirectIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className={className}>
    <circle cx="7" cy="12" r="3.5" />
    <circle cx="17" cy="12" r="3.5" />
    <path strokeLinecap="round" d="M10.5 12h3" />
  </svg>
)

const TargetIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className={className}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4.3" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const SOBRE_MI_ICONS = { bolt: BoltIcon, direct: DirectIcon, target: TargetIcon }

function Contacto() {
  const { t } = useLanguage()
  const p = t.contacto_page
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setEnviado(true)
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <Reveal>
        <span className="text-xs font-bold uppercase tracking-widest text-signalDark">{p.eyebrow}</span>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
          {p.tituloBefore}
          <span className="text-signalDark">{p.tituloAccent}</span>
          {p.tituloAfter}
        </h1>
        <p className="mt-4 max-w-xl text-slate">{p.subtitulo}</p>
      </Reveal>

      <div className="mt-16 grid gap-16 md:grid-cols-2">
        <Reveal className="relative overflow-hidden rounded-2xl border border-signal/20 bg-night p-8 text-paper">
          <StarField starCount={16} shootingStars={false} />
          <div className="relative z-10 flex flex-col gap-6">
            <Logo />

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-signal">
                {p.sobreMi.eyebrow}
              </span>
              <p className="mt-3 text-[#dbe4ef]">{p.sobreMi.intro}</p>
            </div>

            <div className="flex flex-col gap-5 border-t border-white/10 pt-6">
              {p.sobreMi.items.map((item) => {
                const Icon = SOBRE_MI_ICONS[item.icon]
                return (
                  <div key={item.titulo} className="flex gap-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-signal/10 text-signal">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-paper">{item.titulo}</p>
                      <p className="mt-0.5 text-sm text-[#9BA7B7]">{item.detalle}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="flex flex-col gap-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="https://wa.link/ull0cb"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-edge bg-card p-4 transition-colors hover:border-signal"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                <WhatsAppIcon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-bold uppercase tracking-widest text-slate">{p.whatsapp}</span>
                <span className="block truncate text-sm font-semibold text-ink group-hover:text-signalDark">
                  {p.escribirDirecto}
                </span>
              </div>
            </a>

            <a
              href="mailto:novakode.studio@gmail.com"
              className="group flex items-center gap-3 rounded-2xl border border-edge bg-card p-4 transition-colors hover:border-signal"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signalDark">
                <MailIcon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-bold uppercase tracking-widest text-slate">{p.correoLabel}</span>
                <span className="block break-words text-sm font-semibold text-ink group-hover:text-signalDark">
                  novakode.studio@gmail.com
                </span>
              </div>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-bold uppercase tracking-widest text-slate">{p.form.nombre}</span>
              <input
                type="text"
                name="nombre"
                required
                className="rounded-xl border border-edge bg-card px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-signal focus:ring-2 focus:ring-signal/20"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-bold uppercase tracking-widest text-slate">{p.form.correo}</span>
              <input
                type="email"
                name="correo"
                required
                className="rounded-xl border border-edge bg-card px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-signal focus:ring-2 focus:ring-signal/20"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-bold uppercase tracking-widest text-slate">{p.form.queNecesitas}</span>
              <select
                name="servicio"
                defaultValue={p.servicios[0]}
                className="rounded-xl border border-edge bg-card px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-signal focus:ring-2 focus:ring-signal/20"
              >
                {p.servicios.map((servicio) => (
                  <option key={servicio} value={servicio}>
                    {servicio}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-bold uppercase tracking-widest text-slate">{p.form.mensaje}</span>
              <textarea
                name="mensaje"
                rows={4}
                required
                className="resize-none rounded-xl border border-edge bg-card px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-signal focus:ring-2 focus:ring-signal/20"
              />
            </label>

            <button
              type="submit"
              className="rounded-full bg-signal px-6 py-3 text-sm font-bold text-night transition-opacity hover:opacity-90"
            >
              {p.form.enviar}
            </button>

            {enviado && (
              <p className="text-xs font-bold uppercase tracking-widest text-signalDark">
                {p.form.enviado}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </div>
  )
}

export default Contacto
