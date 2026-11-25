import icon from '../assets/logo.png'
import SantaHat from './SantaHat'
import { isHolidaySeason } from '../lib/season'

function Logo({ className = '', onLight = false, festive = false }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <img src={icon} alt="" className="h-7 w-7" />
      <span className="inline-flex items-baseline gap-[2px] text-lg font-extrabold tracking-tight">
        <span className={onLight ? 'text-ink' : 'text-paper'}>nova</span>
        <span className="text-signal">
          kod
          <span className="relative">
            e
            {festive && isHolidaySeason() && (
              <SantaHat className="pointer-events-none absolute -right-2 -top-1 w-4 rotate-[20deg] md:-right-3 md:-top-2.5 md:w-[22px]" />
            )}
          </span>
        </span>
      </span>
    </span>
  )
}

export default Logo
