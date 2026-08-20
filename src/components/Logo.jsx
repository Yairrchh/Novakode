import icon from '../assets/logo.png'

function Logo({ className = '', onLight = false }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <img src={icon} alt="" className="h-7 w-7" />
      <span className="inline-flex items-baseline gap-[2px] text-lg font-extrabold tracking-tight">
        <span className={onLight ? 'text-ink' : 'text-paper'}>nova</span>
        <span className="text-signal">kode</span>
      </span>
    </span>
  )
}

export default Logo
