import { motion } from 'motion/react'
import { usePlayground } from './usePlaygroundStore'
import { COLORS, ICONS, MASCOTS, TYPOGRAPHY } from './playgroundData'
import { ICON_COMPONENTS } from './iconRegistry'
import { LOGO_STYLE_TITLE } from './logoTitleTreatment'
import logoWordmark from '../../assets/marmel/logo-wordmark.png'
import './PosterCanvas.css'

const EASE = [0.22, 1, 0.36, 1]

function piece(delay, prefersReducedMotion, y = 18) {
  if (prefersReducedMotion) {
    return { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.2, delay: 0 } }
  }
  return {
    initial: { opacity: 0, y, scale: 0.94 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.7, delay, ease: EASE },
  }
}

export default function PosterCanvas({ prefersReducedMotion = false }) {
  const { present } = usePlayground()

  const accentColor = COLORS.find((color) => color.id === present.color)?.hex ?? '#5c0f1c'
  const typography = TYPOGRAPHY.find((type) => type.id === present.typography) ?? TYPOGRAPHY[0]
  const iconMeta = ICONS.find((icon) => icon.id === present.icon) ?? ICONS[0]
  const mascotMeta = MASCOTS.find((mascot) => mascot.id === present.mascot) ?? MASCOTS[0]
  const Icon = ICON_COMPONENTS[present.icon]
  const titleTreatment = LOGO_STYLE_TITLE[present.logoStyle] ?? LOGO_STYLE_TITLE.bold

  const textStyle = { fontFamily: typography.fontFamily }
  const titleStyle = {
    ...textStyle,
    fontWeight: titleTreatment.fontWeight,
    fontStyle: titleTreatment.fontStyle,
    textTransform: titleTreatment.textTransform,
    letterSpacing: titleTreatment.letterSpacing,
  }

  return (
    <div className="mh-poster-canvas">
      <motion.div
        key={mascotMeta.id}
        className="mh-poster-canvas__bg"
        style={{
          backgroundImage: `url(${mascotMeta.image})`,
          backgroundPosition: mascotMeta.focus,
        }}
        initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: prefersReducedMotion ? 0.2 : 1, ease: EASE }}
      />
      <span className="mh-poster-canvas__wash" aria-hidden="true" />

      <div className="mh-poster-canvas__card">
        <motion.span className="mh-poster-canvas__eyebrow" {...piece(0.05, prefersReducedMotion)}>
          YOUR MESSAGE
        </motion.span>

        <motion.div
          className="mh-poster-canvas__logo"
          style={{ background: accentColor }}
          {...piece(0.15, prefersReducedMotion)}
        >
          {Icon && <Icon size={36} className="mh-poster-canvas__logo-icon" />}
        </motion.div>

        <motion.div {...piece(0.28, prefersReducedMotion)}>
          {titleTreatment.wrap === 'pill' ? (
            <h2 className="mh-poster-canvas__title mh-poster-canvas__title--pill" style={textStyle}>
              <span className="mh-poster-canvas__title-pill" style={{ background: accentColor }}>
                {present.name}
              </span>
            </h2>
          ) : titleTreatment.wrap === 'ring' ? (
            <h2 className="mh-poster-canvas__title mh-poster-canvas__title--ring" style={{ ...textStyle, fontWeight: 900 }}>
              {present.name}
              <span className="mh-poster-canvas__title-ring-underline" style={{ background: accentColor }} />
            </h2>
          ) : (
            <h2 className="mh-poster-canvas__title" style={titleStyle}>
              {present.name}
            </h2>
          )}
        </motion.div>

        <motion.div className="mh-poster-canvas__description" {...piece(0.4, prefersReducedMotion)}>
          <p style={textStyle}>{present.description}</p>
        </motion.div>

        <motion.div className="mh-poster-canvas__selected" {...piece(0.56, prefersReducedMotion, 10)}>
          <div className="mh-poster-canvas__selected-icon" style={{ background: accentColor }}>
            {Icon && <Icon size={22} className="mh-poster-canvas__logo-icon" />}
          </div>
          <div className="mh-poster-canvas__selected-caption">
            <span className="mh-poster-canvas__selected-caption-title">{iconMeta.boardCaption}</span>
            <span className="mh-poster-canvas__selected-caption-sub">Marmel - {mascotMeta.label}</span>
          </div>
        </motion.div>

        <motion.div className="mh-poster-canvas__footer" {...piece(0.7, prefersReducedMotion, 6)}>
          <img src={logoWordmark} alt="" className="mh-poster-canvas__footer-logo" />
          <span>Made in the Marmel Playground</span>
        </motion.div>
      </div>
    </div>
  )
}
