import { Link } from 'react-router-dom'
import Logo from './Logo'
import { useLanguage } from '../i18n/LanguageContext'

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className="h-4 w-4">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.link/ull0cb',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className="h-4 w-4">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 12a8 8 0 1 1 3.2 6.4L4 19.5l1.1-3.3A7.96 7.96 0 0 1 4 12Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 10.3c0 3.2 2.5 5.7 5.7 5.7.5 0 .9-.4.9-.9v-.7c0-.3-.2-.5-.4-.6l-1.6-.6c-.2-.1-.5 0-.6.2l-.3.5a4.6 4.6 0 0 1-2.4-2.4l.5-.3c.2-.1.3-.4.2-.6l-.6-1.6c-.1-.2-.3-.4-.6-.4h-.7c-.5 0-.9.4-.9.9Z"
        />
      </svg>
    ),
  },
]

function Footer() {
  const { t } = useLanguage()

  const explorarLinks = [
    { to: '/', label: t.nav.inicio },
    { to: '/servicios', label: t.nav.servicios },
    { to: '/portafolio', label: t.nav.portafolio },
    { to: '/contacto', label: t.nav.contacto },
  ]

  return (
    <footer className="border-t border-edge">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo onLight />
          <p className="mt-3 max-w-xs text-sm text-slate">{t.footer.tagline}</p>
          <div className="mt-4 flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-signal/10 text-signalDark transition-colors hover:bg-signal hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-ink">{t.footer.explorar}</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-slate">
            {explorarLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-signalDark">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-ink">{t.footer.serviciosLabel}</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-slate">
            {t.servicios.map((servicio) => (
              <li key={servicio.title}>
                <Link to="/servicios" className="transition-colors hover:text-signalDark">
                  {servicio.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-ink">{t.footer.legal}</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-slate">
            <li>
              <Link to="/privacidad" className="transition-colors hover:text-signalDark">
                {t.footer.privacidad}
              </Link>
            </li>
            <li>
              <Link to="/terminos" className="transition-colors hover:text-signalDark">
                {t.footer.terminos}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-edge px-6 py-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 text-center text-xs text-slate/80 md:flex-row md:justify-between md:text-left">
          <span>© 2024 Novakode. {t.footer.derechos}</span>
          <span>
            {t.footer.creditoPrefix}{' '}
            <a
              href="https://esawebb.org/images/weic2330a/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-dotted hover:text-signalDark"
            >
              NASA, ESA, CSA, STScI, D. Milisavljevic (Purdue University), T. Temim (Princeton University), I. De Looze (University of Gent)
            </a>{' '}
            {t.footer.creditoSuffix}
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
