import { useLanguage } from '../i18n/LanguageContext'

function Portafolio() {
  const { t } = useLanguage()
  const p = t.portafolio_page

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-extrabold text-ink md:text-4xl">{p.titulo}</h1>
      <p className="mt-4 max-w-xl text-slate">{p.subtitulo}</p>

      <div className="mt-16 flex flex-col gap-10">
        {p.proyectos.map((proyecto) => (
          <a
            key={proyecto.nombre}
            href={proyecto.url}
            target="_blank"
            rel="noreferrer"
            className="group grid gap-6 rounded-2xl border border-edge bg-card p-8 transition-colors hover:border-signal md:grid-cols-[1fr_2fr]"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate">
                {proyecto.tipo}
              </span>
              <h2 className="mt-2 text-2xl font-bold text-ink group-hover:text-signalDark">
                {proyecto.nombre}
              </h2>
              <span className="mt-4 inline-block text-xs font-bold uppercase tracking-widest text-signalDark">
                {p.visitarSitio}
              </span>
            </div>

            <div>
              <p className="text-slate">{proyecto.descripcion}</p>
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
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Portafolio
