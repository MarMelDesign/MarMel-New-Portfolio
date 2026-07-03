import { useEffect, useRef } from 'react'
import { motion, useAnimation, useReducedMotion } from 'motion/react'
import { useDragToBoard } from './hooks/useDragToBoard'
import { useTiltOnHover } from './hooks/useTiltOnHover'
import { usePlayground } from './usePlaygroundStore'
import './SelectableTile.css'

export default function SelectableTile({
  selected = false,
  onSelect,
  ariaLabel,
  className = '',
  children,
  field,
  draggable = true,
  tilt = false,
  ...rest
}) {
  const controls = useAnimation()
  const wasSelected = useRef(selected)
  const prefersReducedMotion = useReducedMotion()
  const { play } = usePlayground()
  const handleDragEnd = useDragToBoard(field, onSelect)
  const tiltProps = useTiltOnHover({ max: 12 })

  useEffect(() => {
    if (selected && !wasSelected.current && !prefersReducedMotion) {
      controls.start({
        scale: [1, 1.08, 1],
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      })
    }
    wasSelected.current = selected
  }, [selected, controls, prefersReducedMotion])

  return (
    <motion.button
      type="button"
      ref={tilt ? tiltProps.ref : undefined}
      className={`mh-tile ${selected ? 'mh-tile--selected' : ''} ${className}`.trim()}
      aria-pressed={selected}
      aria-label={ariaLabel}
      onClick={onSelect}
      onHoverStart={() => play('hover')}
      onMouseMove={tilt ? tiltProps.onMouseMove : undefined}
      onMouseLeave={tilt ? tiltProps.onMouseLeave : undefined}
      style={tilt ? { rotateX: tiltProps.rotateX, rotateY: tiltProps.rotateY, transformPerspective: 600 } : undefined}
      animate={controls}
      whileHover={prefersReducedMotion ? undefined : { y: -3 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 420, damping: 26 }}
      drag={draggable && Boolean(field)}
      dragMomentum={false}
      dragElastic={0.15}
      dragSnapToOrigin
      whileDrag={{ scale: 1.08, zIndex: 50 }}
      onDragStart={() => play('dragStart')}
      onDragEnd={handleDragEnd}
      {...rest}
    >
      {children}
    </motion.button>
  )
}
