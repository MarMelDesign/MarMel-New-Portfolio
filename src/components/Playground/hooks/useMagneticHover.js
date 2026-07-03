import { useRef } from 'react'
import { useSpring, useReducedMotion } from 'motion/react'

export function useMagneticHover({ strength = 0.3, max = 8 } = {}) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const x = useSpring(0, { stiffness: 260, damping: 20 })
  const y = useSpring(0, { stiffness: 260, damping: 20 })

  const onMouseMove = (event) => {
    if (prefersReducedMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = event.clientX - (rect.left + rect.width / 2)
    const relY = event.clientY - (rect.top + rect.height / 2)
    x.set(Math.max(-max, Math.min(max, relX * strength)))
    y.set(Math.max(-max, Math.min(max, relY * strength)))
  }

  const onMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return { ref, x, y, onMouseMove, onMouseLeave }
}
