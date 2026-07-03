import { useEffect } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import PosterCanvas from './PosterCanvas'
import Button from '../Home/Button'
import { usePlayground } from './usePlaygroundStore'
import { CloseIcon } from '../Home/Icons'
import './PosterView.css'

const EASE = [0.22, 1, 0.36, 1]

export default function PosterView({ onClose, onVisitSpace }) {
  const { play } = usePlayground()
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  useEffect(() => {
    const timer = setTimeout(() => play('success'), prefersReducedMotion ? 200 : 1500)
    return () => clearTimeout(timer)
  }, [play, prefersReducedMotion])

  return (
    <motion.div
      className="mh-poster-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Generated brand poster"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <span className="mh-poster-overlay__spotlight" aria-hidden="true" />

      <motion.div
        className="mh-poster-shell"
        initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.88, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 12 }}
        transition={{ duration: prefersReducedMotion ? 0.2 : 1.3, ease: EASE }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="mh-poster-shell__close"
          onClick={onClose}
          aria-label="Close poster preview"
        >
          <CloseIcon size={18} />
        </button>

        <PosterCanvas prefersReducedMotion={prefersReducedMotion} />

        <Button
          variant="primary"
          className="mh-poster-shell__cta"
          onClick={() => {
            play('select')
            onVisitSpace?.()
          }}
        >
          See Marmel Place
        </Button>
      </motion.div>
    </motion.div>
  )
}
