import Logo from './Logo'
import { useLanguage } from '../i18n/LanguageContext'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-edge">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo onLight />
          <p className="mt-3 max-w-xs text-sm text-slate">
            {t.footer.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-slate">
          <a href="mailto:hola@novakode.dev" className="transition-colors hover:text-signalDark">
            hola@novakode.dev
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-signalDark"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-edge px-6 py-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 text-center text-xs text-slate/80 md:flex-row md:justify-between md:text-left">
          <span>© {new Date().getFullYear()} Novakode</span>
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
