import { motion, useReducedMotion } from 'motion/react'
import Button from '../Home/Button'
import CapabilityCard from './CapabilityCard'
import maraPortrait from '../../assets/about/mara-portrait.png'
import './AboutHero.css'

export default function AboutHero({ onNavigate }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="mh-about-hero" aria-label="About introduction">
      <div className="mh-about-hero__text">
        <div className="mh-about-hero__eyebrow">
          <span className="mh-about-hero__dot" aria-hidden="true" />
          <span>About Me</span>
        </div>

        <h1 className="mh-about-hero__headline">Hi, I'm Mara.</h1>

        <p className="mh-about-hero__paragraph">
          I design thoughtful digital experiences, memorable brands and playful products that
          combine strategy, storytelling and motion into experiences people genuinely remember.
        </p>

        <div className="mh-about-hero__buttons">
          <Button variant="primary" onClick={() => onNavigate?.('resume')}>
            resume
          </Button>
          <Button variant="outline" href="mailto:melkonyan.designer@gmail.com">
            let's collaborate
          </Button>
        </div>
      </div>

      <div className="mh-about-hero__visual">
        <motion.img
          className="mh-about-hero__mascot"
          src={maraPortrait}
          alt="Mara wearing a burgundy Marmel-branded hoodie"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        />
      </div>

      <CapabilityCard />
    </section>
  )
}
