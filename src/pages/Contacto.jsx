import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

function Contacto() {
  const { t } = useLanguage()
  const p = t.contacto_page
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setEnviado(true)
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-extrabold text-ink md:text-4xl">{p.titulo}</h1>
      <p className="mt-4 max-w-xl text-slate">{p.subtitulo}</p>

      <div className="mt-16 grid gap-16 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <label className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-slate">{p.form.nombre}</span>
            <input
              type="text"
              name="nombre"
              required
              className="rounded-xl border border-edge bg-card px-4 py-3 text-ink outline-none focus:border-signal"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-slate">{p.form.correo}</span>
            <input
              type="email"
              name="correo"
              required
              className="rounded-xl border border-edge bg-card px-4 py-3 text-ink outline-none focus:border-signal"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-slate">{p.form.queNecesitas}</span>
            <select
              name="servicio"
              defaultValue={p.servicios[0]}
              className="rounded-xl border border-edge bg-card px-4 py-3 text-ink outline-none focus:border-signal"
            >
              {p.servicios.map((servicio) => (
                <option key={servicio} value={servicio}>
                  {servicio}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-slate">{p.form.mensaje}</span>
            <textarea
              name="mensaje"
              rows={5}
              required
              className="resize-none rounded-xl border border-edge bg-card px-4 py-3 text-ink outline-none focus:border-signal"
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

        <div className="flex flex-col gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate">{p.whatsapp}</span>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-xl font-semibold text-ink hover:text-signalDark"
            >
              {p.escribirDirecto}
            </a>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate">{p.correoLabel}</span>
            <a
              href="mailto:hola@novakode.dev"
              className="mt-2 block text-xl font-semibold text-ink hover:text-signalDark"
            >
              hola@novakode.dev
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto
