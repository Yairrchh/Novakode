import { useLanguage } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'
import olaxPreview from '../assets/olax-preview.png'
import todoticketPreview from '../assets/todoticket-preview.png'
import shopiPreview from '../assets/shopi-preview.png'
import airesvalPreview from '../assets/airesval-preview.png'
import veraPreview from '../assets/vera-preview.png'
import casaclinicaPreview from '../assets/casaclinica-preview.png'

const PROJECT_PREVIEWS = {
  Olax: olaxPreview,
  Todoticket: todoticketPreview,
  Shopi: shopiPreview,
  AiresVal: airesvalPreview,
  Vera: veraPreview,
  'Casa Clínica': casaclinicaPreview,
}

function Portafolio() {
  const { t } = useLanguage()
  const p = t.portafolio_page

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <Reveal>
        <span className="text-xs font-bold uppercase tracking-widest text-signalDark">{p.eyebrow}</span>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
          <span className="block text-ink">{p.tituloLinea1}</span>
          <span className="block text-slate">{p.tituloLinea2}</span>
        </h1>
        <p className="mt-5 max-w-xl text-slate">{p.subtitulo}</p>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {p.proyectos.map((proyecto, index) => {
          const CardTag = proyecto.url ? 'a' : 'div'
          return (
            <Reveal
              key={proyecto.nombre}
              as={CardTag}
              delay={index * 100}
              {...(proyecto.url ? { href: proyecto.url, target: '_blank', rel: 'noreferrer' } : {})}
              className="group flex flex-col overflow-hidden rounded-2xl border border-edge bg-card transition-colors hover:border-signal"
            >
              <div className="aspect-[21/9] overflow-hidden bg-night/[0.03]">
                <img
                  src={PROJECT_PREVIEWS[proyecto.nombre]}
                  alt={proyecto.nombre}
                  className="h-full w-full object-contain object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-bold uppercase tracking-widest text-slate">
                  {proyecto.tipo}
                </span>
                <h2 className="mt-2 text-xl font-bold text-ink group-hover:text-signalDark">
                  {proyecto.nombre}
                </h2>
                <p className="mt-3 text-sm text-slate">{proyecto.descripcion}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {proyecto.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-edge px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-slate"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {proyecto.url && (
                  <span className="mt-4 inline-block text-xs font-bold uppercase tracking-widest text-signalDark">
                    {p.visitarSitio}
                  </span>
                )}
              </div>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}

export default Portafolio
