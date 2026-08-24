const STARS = Array.from({ length: 45 }, (_, i) => {
  const seed = i * 137.51
  const rand = (offset) => {
    const x = Math.sin(seed + offset) * 43758.5453
    return x - Math.floor(x)
  }
  return {
    top: rand(1) * 100,
    left: rand(2) * 100,
    size: 2 + rand(3) * 2.6,
    duration: 1.8 + rand(4) * 2.6,
    delay: rand(5) * 4,
  }
})

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

function StarField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {STARS.map((star, i) => (
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
      ))}

      {SHOOTING_STARS.map((s, i) => (
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
