import { useEffect, useRef, useState } from 'react'

const STORAGE_KEY = 'novakode_whatsapp_pos'
const SIZE = 56
const MARGIN = 16
const DRAG_THRESHOLD = 6

function defaultPosition() {
  return {
    x: window.innerWidth - SIZE - MARGIN,
    y: window.innerHeight - SIZE - MARGIN - 64,
  }
}

function clampPosition(pos) {
  const maxX = Math.max(MARGIN, window.innerWidth - SIZE - MARGIN)
  const maxY = Math.max(MARGIN, window.innerHeight - SIZE - MARGIN)
  return {
    x: Math.min(Math.max(pos.x, MARGIN), maxX),
    y: Math.min(Math.max(pos.y, MARGIN), maxY),
  }
}

function loadInitialPosition() {
  if (typeof window === 'undefined') return { x: 0, y: 0 }
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (saved && typeof saved.x === 'number' && typeof saved.y === 'number') {
      return clampPosition(saved)
    }
  } catch {
    // ignore invalid stored value
  }
  return defaultPosition()
}

function WhatsAppButton() {
  const [pos, setPos] = useState(loadInitialPosition)
  const btnRef = useRef(null)
  const drag = useRef({ active: false, moved: false, offsetX: 0, offsetY: 0 })

  useEffect(() => {
    const handleResize = () => setPos((current) => clampPosition(current))
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handlePointerDown = (e) => {
    const rect = btnRef.current.getBoundingClientRect()
    drag.current = {
      active: true,
      moved: false,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
    }
    btnRef.current.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e) => {
    if (!drag.current.active) return
    const dx = e.clientX - drag.current.offsetX - pos.x
    const dy = e.clientY - drag.current.offsetY - pos.y
    if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
      drag.current.moved = true
    }
    if (drag.current.moved) {
      setPos(
        clampPosition({
          x: e.clientX - drag.current.offsetX,
          y: e.clientY - drag.current.offsetY,
        })
      )
    }
  }

  const handlePointerUp = (e) => {
    if (!drag.current.active) return
    drag.current.active = false
    btnRef.current.releasePointerCapture(e.pointerId)
    if (drag.current.moved) {
      setPos((current) => {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(current))
        } catch {
          // storage unavailable, ignore
        }
        return current
      })
    }
  }

  const handleClick = (e) => {
    if (drag.current.moved) {
      e.preventDefault()
      drag.current.moved = false
    }
  }

  return (
    <a
      ref={btnRef}
      href="https://wa.me/"
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onClick={handleClick}
      style={{ left: pos.x, top: pos.y, touchAction: 'none' }}
      className="fixed z-50 flex h-14 w-14 cursor-grab items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/40 transition-transform active:cursor-grabbing active:scale-95 hover:scale-105"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2Zm5.98 14.09c-.24.68-1.4 1.31-1.93 1.4-.5.08-1.12.11-1.81-.12-.42-.13-.95-.31-1.63-.61-2.87-1.24-4.74-4.13-4.89-4.32-.14-.19-1.17-1.55-1.17-2.96 0-1.41.74-2.1 1-2.39.26-.28.57-.35.76-.35h.55c.18 0 .42-.03.65.5.24.57.83 1.98.9 2.13.07.14.11.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.14-.28.28-.12.55.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.24 2.21 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.19-.28.37-.23.62-.14.26.09 1.63.77 1.9.91.28.14.47.21.53.33.06.12.06.7-.18 1.38Z" />
      </svg>
    </a>
  )
}

export default WhatsAppButton
