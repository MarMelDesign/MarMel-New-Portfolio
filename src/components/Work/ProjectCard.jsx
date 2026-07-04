import { motion } from 'motion/react'
import { ArrowIcon } from '../Home/Icons'
import './ProjectCard.css'

export default function ProjectCard({
  number,
  title,
  description,
  image,
  imageAlt,
  background,
  vars,
  onViewCase,
}) {
  return (
    <article className="mh-project-card" style={{ background, ...vars }}>
      <span className="mh-project-card__number">{number}</span>

      <motion.img
        className="mh-project-card__visual"
        src={image}
        alt={imageAlt}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />

      <div className="mh-project-card__content">
        <h3 className="mh-project-card__title">{title}</h3>
        <p className="mh-project-card__desc">{description}</p>

        {onViewCase && (
          <button type="button" className="mh-project-card__cta" onClick={onViewCase}>
            <span>View Case Study</span>
            <ArrowIcon size={14} />
          </button>
        )}
      </div>
    </article>
  )
}
