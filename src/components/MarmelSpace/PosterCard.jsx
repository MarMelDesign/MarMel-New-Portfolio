import { motion } from 'motion/react'
import { COLORS, ICONS, MASCOTS } from '../Playground/playgroundData'
import { ICON_COMPONENTS } from '../Playground/iconRegistry'

const ROTATIONS = [-3, 2, -2, 3, -1.5, 1.5]

function rotationFor(id, index) {
  let hash = 0
  for (let i = 0; i < id.length; i += 1) hash = (hash * 31 + id.charCodeAt(i)) | 0
  return ROTATIONS[Math.abs(hash + index) % ROTATIONS.length]
}

function formatDate(timestamp) {
  return new Date(timestamp).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

function hexToRgba(hex, alpha) {
  const value = hex.replace('#', '')
  const r = parseInt(value.substring(0, 2), 16)
  const g = parseInt(value.substring(2, 4), 16)
  const b = parseInt(value.substring(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export default function PosterCard({ poster, index }) {
  const accentColor = COLORS.find((color) => color.id === poster.color)?.hex ?? '#5c0f1c'
  const iconMeta = ICONS.find((icon) => icon.id === poster.icon) ?? ICONS[0]
  const mascotMeta = MASCOTS.find((mascot) => mascot.id === poster.mascot) ?? MASCOTS[0]
  const Icon = ICON_COMPONENTS[poster.icon]
  const rotate = rotationFor(poster.id, index)
  const washStyle = {
    background: `linear-gradient(180deg, ${hexToRgba(accentColor, 0.32)} 0%, rgba(10, 4, 6, 0) 34%, rgba(10, 4, 6, 0.78) 100%)`,
  }

  return (
    <motion.div
      className="mh-space-card"
      style={{ '--rotate': `${rotate}deg` }}
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 5 }}
    >
      <div
        className="mh-space-card__bg"
        style={{ backgroundImage: `url(${mascotMeta.image})`, backgroundPosition: mascotMeta.focus }}
      />
      <span className="mh-space-card__wash" style={washStyle} aria-hidden="true" />

      <div className="mh-space-card__content">
        <div className="mh-space-card__brand">
          <span className="mh-space-card__mark" style={{ background: accentColor }}>
            {Icon && <Icon size={9} />}
          </span>
          <span className="mh-space-card__wordmark">MARMEL</span>
        </div>

        <div className="mh-space-card__body">
          <h3 className="mh-space-card__name">{poster.name}</h3>
          <p className="mh-space-card__description">{poster.description}</p>
        </div>

        <div className="mh-space-card__meta">
          <span className="mh-space-card__meta-caption">
            {iconMeta.boardCaption} &middot; {mascotMeta.label}
          </span>
          <span className="mh-space-card__meta-date">{formatDate(poster.createdAt)}</span>
        </div>
      </div>
    </motion.div>
  )
}
