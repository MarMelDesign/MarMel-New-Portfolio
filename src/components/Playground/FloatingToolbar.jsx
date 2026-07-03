import { motion, useReducedMotion } from 'motion/react'
import Button from '../Home/Button'
import ToolbarButton from './ToolbarButton'
import { usePlayground } from './usePlaygroundStore'
import { useMagneticHover } from './hooks/useMagneticHover'
import { addPoster } from '../../store/marmelSpaceStore'
import {
  ArrowIcon,
  RotateCcwIcon,
  ShuffleIcon,
  CornerUpLeftIcon,
  CornerUpRightIcon,
  SpeakerIcon,
  SpeakerMuteIcon,
} from '../Home/Icons'
import './FloatingToolbar.css'

export default function FloatingToolbar({ onGenerate, onVisitSpace }) {
  const { present, canUndo, canRedo, muted, toggleMute, reset, shuffle, undo, redo, play } = usePlayground()
  const prefersReducedMotion = useReducedMotion()
  const generateMagnetic = useMagneticHover({ strength: 0.25, max: 9 })

  const handleGenerate = () => {
    play('generate')
    addPoster(present)
    onGenerate?.()
  }

  return (
    <div className="mh-toolbar">
      <Button variant="outline" className="mh-toolbar__visit" showArrow onClick={onVisitSpace}>
        Visit Marmel Space
      </Button>

      <button
        type="button"
        className="mh-toolbar__mute"
        onClick={toggleMute}
        aria-label={muted ? 'Unmute sound' : 'Mute sound'}
        aria-pressed={muted}
      >
        {muted ? <SpeakerMuteIcon size={16} /> : <SpeakerIcon size={16} />}
      </button>

      <div className="mh-toolbar__utilities">
        <ToolbarButton icon={RotateCcwIcon} label="Reset" onClick={reset} showLabel />
        <ToolbarButton icon={ShuffleIcon} label="Shuffle" onClick={shuffle} showLabel />
        <ToolbarButton icon={CornerUpLeftIcon} label="Undo" onClick={undo} disabled={!canUndo} showLabel />
        <ToolbarButton icon={CornerUpRightIcon} label="Redo" onClick={redo} disabled={!canRedo} showLabel />
      </div>

      <motion.button
        type="button"
        ref={generateMagnetic.ref}
        className="mh-toolbar__generate"
        onClick={handleGenerate}
        onHoverStart={() => play('hover')}
        onMouseMove={generateMagnetic.onMouseMove}
        onMouseLeave={generateMagnetic.onMouseLeave}
        style={{ x: generateMagnetic.x, y: generateMagnetic.y }}
        whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
        whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 420, damping: 26 }}
      >
        <span className="mh-toolbar__generate-label">Generate Brand Poster</span>
        <span className="mh-toolbar__generate-icon">
          <ArrowIcon size={16} />
        </span>
      </motion.button>
    </div>
  )
}
