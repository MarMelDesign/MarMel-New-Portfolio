import { useRef } from 'react'
import { useSpring, useReducedMotion } from 'motion/react'

export function useTiltOnHover({ max = 10 } = {}) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const rotateX = useSpring(0, { stiffness: 300, damping: 22 })
  const rotateY = useSpring(0, { stiffness: 300, damping: 22 })

  const onMouseMove = (event) => {
    if (prefersReducedMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    rotateY.set(px * max)
    rotateX.set(-py * max)
  }

  const onMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave }
}
