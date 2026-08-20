import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import LanguageSwitch from './LanguageSwitch'
import { useLanguage } from '../i18n/LanguageContext'

function Header() {
  const { t } = useLanguage()

  const links = [
    { to: '/', label: t.nav.inicio },
    { to: '/servicios', label: t.nav.servicios },
    { to: '/portafolio', label: t.nav.portafolio },
    { to: '/contacto', label: t.nav.contacto },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-surface/95 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        <NavLink to="/" className="text-lg">
          <Logo />
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-signal' : 'text-muted hover:text-paper'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitch />
          <NavLink
            to="/contacto"
            className="rounded-full bg-signal px-6 py-2.5 text-sm font-bold text-night transition-opacity hover:opacity-90"
          >
            {t.cta}
          </NavLink>
        </div>
      </div>

      <nav className="flex items-center justify-around border-t border-white/[0.06] py-2 md:hidden">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `text-xs font-medium ${isActive ? 'text-signal' : 'text-muted'}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
