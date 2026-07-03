import { motion, useReducedMotion } from 'motion/react'
import heroMascot from '../../assets/marmel/hero-mascot.png'
import './MascotVisual.css'

export default function MascotVisual({ word = 'DESIGNER' }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="mh-mascot-stage">
      <motion.span
        className="mh-mascot-stage__word"
        aria-hidden="true"
        initial={prefersReducedMotion ? false : { clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: 'inset(0 0% 0 0)' }}
        transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
      >
        {word}
      </motion.span>

      <motion.img
        className="mh-mascot-stage__image"
        src={heroMascot}
        alt="Marmel, the studio's headphone-wearing mascot character, sitting"
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
      />
    </div>
  )
}
