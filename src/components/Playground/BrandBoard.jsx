import { forwardRef, useEffect } from 'react'
import { motion, useAnimation, useReducedMotion } from 'motion/react'
import { usePlayground } from './usePlaygroundStore'
import { COLORS, ICONS, MASCOTS, TYPOGRAPHY } from './playgroundData'
import { ICON_COMPONENTS } from './iconRegistry'
import { LOGO_STYLE_TITLE } from './logoTitleTreatment'
import { useParallax } from './hooks/useParallax'
import './BrandBoard.css'

const PUSH_PINS = [
  { key: 'top-left', className: 'mh-board__pin mh-board__pin--top-left', color: '#e86a5c' },
  { key: 'top-right', className: 'mh-board__pin mh-board__pin--top-right', color: '#f2c14e' },
  { key: 'bottom-left', className: 'mh-board__pin mh-board__pin--bottom-left', color: '#3b6fb5' },
  { key: 'bottom-right', className: 'mh-board__pin mh-board__pin--bottom-right', color: '#4a9d6a' },
]

function Pulse({ pulseKey, className, style, children }) {
  const controls = useAnimation()
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (pulseKey && !prefersReducedMotion) {
      controls.start({
        scale: [1, 1.18, 1],
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      })
    }
  }, [pulseKey, controls, prefersReducedMotion])

  return (
    <motion.div className={className} style={style} animate={controls}>
      {children}
    </motion.div>
  )
}

function EditableText({ as: Tag = 'span', value, onCommit, className = '', style, multiline = false }) {
  return (
    <Tag
      className={`mh-board__editable ${className}`.trim()}
      style={style}
      contentEditable
      suppressContentEditableWarning
      role="textbox"
      aria-label="Editable text"
      onBlur={(event) => onCommit(event.currentTarget.textContent)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' && !multiline) {
          event.preventDefault()
          event.currentTarget.blur()
        }
      }}
    >
      {value}
    </Tag>
  )
}

const BrandBoard = forwardRef(function BrandBoard(props, ref) {
  const { present, lastArrival, updateName, updateDescription } = usePlayground()
  const parallax = useParallax({ max: 8, tilt: 1.2, ref })

  const accentColor = COLORS.find((color) => color.id === present.color)?.hex ?? '#5c0f1c'
  const typography = TYPOGRAPHY.find((type) => type.id === present.typography) ?? TYPOGRAPHY[0]
  const iconMeta = ICONS.find((icon) => icon.id === present.icon) ?? ICONS[0]
  const mascotMeta = MASCOTS.find((mascot) => mascot.id === present.mascot) ?? MASCOTS[0]
  const Icon = ICON_COMPONENTS[present.icon]

  const titleTreatment = LOGO_STYLE_TITLE[present.logoStyle] ?? LOGO_STYLE_TITLE.bold

  const logoPulseKey =
    lastArrival && (lastArrival.field === 'color' || lastArrival.field === 'icon') ? lastArrival.nonce : null
  const titlePulseKey =
    lastArrival && (lastArrival.field === 'logoStyle' || lastArrival.field === 'typography')
      ? lastArrival.nonce
      : null

  const textStyle = {
    fontFamily: typography.fontFamily,
  }

  const titleStyle = {
    ...textStyle,
    fontWeight: titleTreatment.fontWeight,
    fontStyle: titleTreatment.fontStyle,
    textTransform: titleTreatment.textTransform,
    letterSpacing: titleTreatment.letterSpacing,
  }

  return (
    <motion.div
      className="mh-board"
      ref={ref}
      onMouseMove={parallax.onMouseMove}
      onMouseLeave={parallax.onMouseLeave}
      style={{
        x: parallax.x,
        y: parallax.y,
        rotateX: parallax.rotateX,
        rotateY: parallax.rotateY,
        transformPerspective: 1200,
      }}
    >
      <img
        key={mascotMeta.id}
        src={mascotMeta.image}
        alt=""
        className="mh-board__bg"
        style={{ objectPosition: mascotMeta.focus }}
      />
      <span className="mh-board__wash" aria-hidden="true" />

      {PUSH_PINS.map((pin) => (
        <span key={pin.key} className={pin.className} style={{ background: pin.color }}>
          <span className="mh-board__pin-shine" />
        </span>
      ))}

      <span className="mh-board__confetti mh-board__confetti--one" aria-hidden="true" />
      <span className="mh-board__confetti mh-board__confetti--two" aria-hidden="true" />
      <span className="mh-board__confetti mh-board__confetti--three" aria-hidden="true" />
      <span className="mh-board__confetti mh-board__confetti--four" aria-hidden="true" />

      <div className="mh-board__card">
        <span className="mh-board__eyebrow">YOUR MESSAGE</span>

        <Pulse pulseKey={logoPulseKey} className="mh-board__logo-badge" style={{ background: accentColor }}>
          {Icon && <Icon size={32} className="mh-board__logo-icon" />}
        </Pulse>

        <Pulse pulseKey={titlePulseKey} className="mh-board__title-wrap">
          {titleTreatment.wrap === 'pill' ? (
            <h3 className="mh-board__title mh-board__title--pill" style={textStyle}>
              <EditableText
                as="span"
                className="mh-board__title-pill"
                style={{ background: accentColor }}
                value={present.name}
                onCommit={updateName}
              />
            </h3>
          ) : titleTreatment.wrap === 'ring' ? (
            <h3 className="mh-board__title mh-board__title--ring" style={{ ...textStyle, fontWeight: 900 }}>
              <EditableText as="span" value={present.name} onCommit={updateName} />
              <span className="mh-board__title-ring-underline" style={{ background: accentColor }} />
            </h3>
          ) : (
            <EditableText as="h3" className="mh-board__title" style={titleStyle} value={present.name} onCommit={updateName} />
          )}
        </Pulse>

        <div className="mh-board__description">
          <EditableText as="p" style={textStyle} value={present.description} onCommit={updateDescription} multiline />
        </div>

        <div className="mh-board__selected">
          <Pulse pulseKey={logoPulseKey} className="mh-board__selected-icon" style={{ background: accentColor }}>
            {Icon && <Icon size={24} className="mh-board__logo-icon" />}
          </Pulse>
          <div className="mh-board__selected-caption">
            <span className="mh-board__selected-caption-title">{iconMeta.boardCaption}</span>
            <span className="mh-board__selected-caption-sub">Marmel - {mascotMeta.label}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
})

export default BrandBoard
