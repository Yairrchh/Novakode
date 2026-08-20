import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

function Servicios() {
  const { t } = useLanguage()
  const p = t.servicios_page

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-extrabold text-ink md:text-4xl">{p.titulo}</h1>
      <p className="mt-4 max-w-xl text-slate">{p.subtitulo}</p>

      <div className="mt-16 flex flex-col gap-16">
        {p.items.map((servicio) => (
          <div key={servicio.label} className="grid gap-8 border-t border-edge pt-10 md:grid-cols-[1fr_2fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-signalDark">
                {servicio.label}
              </span>
              <h2 className="mt-2 text-2xl font-bold text-ink">{servicio.title}</h2>
            </div>

            <div>
              <p className="text-slate">{servicio.detail}</p>
              <ul className="mt-6 flex flex-col gap-2">
                {servicio.incluye.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-start gap-4 border-t border-edge pt-10">
        <p className="text-slate">{p.ctaTexto}</p>
        <Link
          to="/contacto"
          className="rounded-full bg-signal px-6 py-3 text-sm font-bold text-night transition-opacity hover:opacity-90"
        >
          {p.ctaBoton}
        </Link>
      </div>
    </div>
  )
}

export default Servicios
