// Holiday hat layered over the logo icon; the logo file itself is untouched.
function SantaHat({ className = '' }) {
  return (
    <svg viewBox="0 0 32 26" className={className} aria-hidden="true">
      <path d="M6 19C7 9 13 3 20 4c5 .7 8 4 8.5 10l-4-2.5c.5 3 1 5.5 1.5 7.5Z" fill="#e0242f" />
      <rect x="3" y="17" width="26" height="6" rx="3" fill="#ffffff" />
      <circle cx="28" cy="15" r="3.5" fill="#ffffff" />
    </svg>
  )
}

export default SantaHat
