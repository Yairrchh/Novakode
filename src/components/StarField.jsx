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

function StarField({ starCount = 45, shootingStars = true }) {
  const stars = makeStars(starCount)

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
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
        )
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
  )
}

export default StarField
