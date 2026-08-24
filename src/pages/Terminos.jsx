import { useLanguage } from '../i18n/LanguageContext'

function Terminos() {
  const { t } = useLanguage()
  const p = t.terminos_page

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-extrabold text-ink md:text-4xl">{p.titulo}</h1>
      <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-slate">{p.intro}</p>

      <div className="mt-12 flex flex-col gap-8">
        {p.secciones.map((seccion) => (
          <div key={seccion.titulo}>
            <h2 className="text-lg font-semibold text-ink">{seccion.titulo}</h2>
            <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate">{seccion.texto}</p>
          </div>
        ))}
      </div>

      <p className="mt-12 border-t border-edge pt-6 text-xs text-slate/70">{p.nota}</p>
    </div>
  )
}

export default Terminos
