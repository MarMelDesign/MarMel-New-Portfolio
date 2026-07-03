import { motion, useReducedMotion } from 'motion/react'
import { usePlayground } from './usePlaygroundStore'
import { useMagneticHover } from './hooks/useMagneticHover'
import './ToolbarButton.css'

export default function ToolbarButton({ icon: Icon, label, onClick, disabled = false, showLabel = true }) {
  const prefersReducedMotion = useReducedMotion()
  const { play } = usePlayground()
  const magnetic = useMagneticHover({ strength: 0.35, max: 7 })

  return (
    <motion.button
      type="button"
      ref={disabled ? undefined : magnetic.ref}
      className="mh-toolbar-btn"
      onClick={onClick}
      onHoverStart={() => !disabled && play('hover')}
      onMouseMove={disabled ? undefined : magnetic.onMouseMove}
      onMouseLeave={disabled ? undefined : magnetic.onMouseLeave}
      disabled={disabled}
      aria-label={label}
      style={disabled ? undefined : { x: magnetic.x, y: magnetic.y }}
      whileHover={disabled || prefersReducedMotion ? undefined : { scale: 1.05 }}
      whileTap={disabled || prefersReducedMotion ? undefined : { scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 420, damping: 26 }}
    >
      <Icon size={16} />
      {showLabel && <span className="mh-toolbar-btn__label">{label}</span>}
    </motion.button>
  )
}
