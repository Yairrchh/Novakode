import { useEffect, useRef } from 'react'
import Snowfall from './Snowfall'
import { isHolidaySeason } from '../lib/season'

// Manual nudges for specific star indexes that land on top of headline text
// (e.g. index 20 used to sit right over the hero's "Tu" — moved to a clear
// corner instead of touching the seeded random formula for every star).
const POSITION_OVERRIDES = {
  20: { top: 6, left: 6 },
}

function makeStars(count) {
  return Array.from({ length: count }, (_, i) => {
    const seed = i * 137.51
    const rand = (offset) => {
      const x = Math.sin(seed + offset) * 43758.5453
      return x - Math.floor(x)
    }
    const sparkle = rand(6) > 0.8
    const override = POSITION_OVERRIDES[i]
    return {
      top: override ? override.top : rand(1) * 100,
      left: override ? override.left : rand(2) * 100,
      size: sparkle ? 9 + rand(3) * 6 : 2 + rand(3) * 2.6,
      duration: 1.8 + rand(4) * 2.6,
      delay: rand(5) * 4,
      sparkle,
    }
  })
}

// firstAppear: seconds after mount before the first flash shows. Since the
// flash happens ~65% into each animation cycle, we offset with a negative
// animation-delay so the very first flash lands at firstAppear instead of
// waiting a nearly full cycle.
const SHOOTING_STARS = [
  { top: 12, left: 65, angle: 215, duration: 3.4, firstAppear: 0.2 },
  { top: 22, left: 15, angle: 200, duration: 4.2, firstAppear: 0.6 },
  { top: 48, left: 82, angle: 210, duration: 3.8, firstAppear: 1 },
  { top: 8, left: 35, angle: 205, duration: 4.6, firstAppear: 1.4 },
  { top: 35, left: 50, angle: 220, duration: 4, firstAppear: 0.4 },
  { top: 60, left: 8, angle: 195, duration: 4.4, firstAppear: 1.8 },
  { top: 5, left: 90, angle: 225, duration: 3.6, firstAppear: 0.9 },
]

// Parallax: the whole star layer drifts slightly opposite to the mouse and
// with the scroll position of its section. Mouse range is +/-MOUSE_RANGE px,
// scroll range is +/-SCROLL_RANGE px (both multiplied by `intensity`); the
// layer is oversized by a bleed so its edges never show.
const MOUSE_RANGE = 14
const SCROLL_RANGE = 28

function StarField({ starCount = 45, shootingStars = true, intensity = 1 }) {
  const stars = makeStars(starCount)
  const mouseRange = MOUSE_RANGE * intensity
  const scrollRange = SCROLL_RANGE * intensity
  const bleed = Math.ceil(mouseRange + scrollRange) + 6
  const frameRef = useRef(null)
  const layerRef = useRef(null)

  useEffect(() => {
    const frame = frameRef.current
    const layer = layerRef.current
    if (!frame || !layer) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const target = { mx: 0, my: 0, sy: 0 }
    const current = { mx: 0, my: 0, sy: 0 }
    let raf = 0

    const tick = () => {
      current.mx += (target.mx - current.mx) * 0.08
      current.my += (target.my - current.my) * 0.08
      current.sy += (target.sy - current.sy) * 0.12
      layer.style.transform = `translate3d(${current.mx}px, ${current.my + current.sy}px, 0)`
      const settled =
        Math.abs(target.mx - current.mx) < 0.05 &&
        Math.abs(target.my - current.my) < 0.05 &&
        Math.abs(target.sy - current.sy) < 0.05
      raf = settled ? 0 : requestAnimationFrame(tick)
    }
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }

    const onScroll = () => {
      const rect = frame.getBoundingClientRect()
      const vh = window.innerHeight
      // -1 when the section is just below the viewport, +1 when just above.
      const progress = (vh / 2 - (rect.top + rect.height / 2)) / (vh / 2 + rect.height / 2)
      target.sy = Math.max(-1, Math.min(1, progress)) * scrollRange
      kick()
    }
    const onMouse = (e) => {
      target.mx = -(e.clientX / window.innerWidth - 0.5) * 2 * mouseRange
      target.my = -(e.clientY / window.innerHeight - 0.5) * 2 * mouseRange
      kick()
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    window.addEventListener('pointermove', onMouse, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('pointermove', onMouse)
    }
  }, [mouseRange, scrollRange])

  return (
    <div
      ref={frameRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div ref={layerRef} className="absolute will-change-transform" style={{ inset: -bleed }}>
        <div className="absolute" style={{ inset: bleed }}>
          {stars.map((star, i) =>
            star.sparkle ? (
              <svg
                key={i}
                viewBox="0 0 24 24"
                className="star-sparkle"
                style={{
                  top: `${star.top}%`,
                  left: `${star.left}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  animationDuration: `${star.duration}s`,
                  animationDelay: `${star.delay}s`,
                }}
              >
                <path
                  fill="currentColor"
                  d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
                />
              </svg>
            ) : (
              <span
                key={i}
                className="star"
                style={{
                  top: `${star.top}%`,
                  left: `${star.left}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  animationDuration: `${star.duration}s`,
                  animationDelay: `${star.delay}s`,
                }}
              />
            ),
          )}

          {shootingStars &&
            SHOOTING_STARS.map((s, i) => (
              <span
                key={i}
                className="absolute"
                style={{ top: `${s.top}%`, left: `${s.left}%`, transform: `rotate(${s.angle}deg)` }}
              >
                <span
                  className="shooting-star"
                  style={{
                    animationDuration: `${s.duration}s`,
                    animationDelay: `${s.firstAppear - s.duration * 0.65}s`,
                  }}
                />
              </span>
            ))}
        </div>
      </div>
      {isHolidaySeason() && <Snowfall count={Math.round(starCount * 0.4)} />}
    </div>
  )
}

export default StarField
