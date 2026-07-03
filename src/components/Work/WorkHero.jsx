import { motion, useReducedMotion } from 'motion/react'
import mascotLaptop from '../../assets/work/mascot-laptop.png'
import StatsCard from './StatsCard'
import './WorkHero.css'

export default function WorkHero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="mh-work-hero" aria-label="Work introduction">
      <div className="mh-work-hero__text">
        <div className="mh-work-hero__eyebrow">
          <span className="mh-work-hero__dot" aria-hidden="true" />
          <span>Portfolio / Work</span>
        </div>

        <h1 className="mh-work-hero__headline">Selected projects and case studies.</h1>

        <p className="mh-work-hero__paragraph">
          A collection of digital products, brands and experiences I’ve designed from concept to
          launch.
        </p>
      </div>

      <div className="mh-work-hero__visual">
        <motion.img
          className="mh-work-hero__mascot"
          src={mascotLaptop}
          alt="Marmel, the studio mascot, working on a laptop with a coffee cup nearby"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        />
        <StatsCard />
      </div>
    </section>
  )
}
