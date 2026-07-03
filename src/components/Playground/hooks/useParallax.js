import { useRef } from 'react'
import { useSpring, useReducedMotion } from 'motion/react'

export function useParallax({ max = 6, tilt = 2, ref: externalRef } = {}) {
  const internalRef = useRef(null)
  const ref = externalRef ?? internalRef
  const prefersReducedMotion = useReducedMotion()
  const x = useSpring(0, { stiffness: 120, damping: 20 })
  const y = useSpring(0, { stiffness: 120, damping: 20 })
  const rotateX = useSpring(0, { stiffness: 120, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 120, damping: 20 })

  const onMouseMove = (event) => {
    if (prefersReducedMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    x.set(px * max)
    y.set(py * max)
    rotateY.set(px * tilt)
    rotateX.set(-py * tilt)
  }

  const onMouseLeave = () => {
    x.set(0)
    y.set(0)
    rotateX.set(0)
    rotateY.set(0)
  }

  return { ref, x, y, rotateX, rotateY, onMouseMove, onMouseLeave }
}
