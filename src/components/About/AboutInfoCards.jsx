import { motion, useReducedMotion } from 'motion/react'
import { MapPinIcon, StarIcon, BehanceIcon, LinkedinIcon, InstagramIcon } from '../Home/Icons'
import experienceMap from '../../assets/about/experience-map.png'
import mascotSleeping from '../../assets/about/mascot-sleeping.png'
import mascotPixel from '../../assets/about/pixel.png'
import tools from '../../assets/about/tools.png'
import contraLogo from '../../assets/about/icons/contra-logo.png'
import './AboutInfoCards.css'

function ContraIcon({ size = 16, className = '' }) {
  return <img src={contraLogo} alt="" width={size} height={size} className={className} />
}

const socials = [
  { label: 'Behance', Icon: BehanceIcon, size: 16, href: 'https://www.behance.net/melkonyan_designer' },
  { label: 'LinkedIn', Icon: LinkedinIcon, size: 16, href: 'https://www.linkedin.com/in/mara-melkonian/' },
  { label: 'Instagram', Icon: InstagramIcon, size: 16, href: 'https://www.instagram.com/designmarmel/' },
  {
    label: 'Contra',
    Icon: ContraIcon,
    size: 20,
    href: 'https://contra.com/mara_melkonyan_2z5rmtfq?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=mara_melkonyan_2z5rmtfq',
  },
]

export default function AboutInfoCards() {
  const prefersReducedMotion = useReducedMotion()

  const cardMotion = (index) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.5, ease: 'easeOut', delay: index * 0.08 },
  })

  return (
    <section className="mh-about-cards" aria-label="About details">
      <div className="mh-about-cards__row">
        <motion.article className="mh-about-card mh-about-card--approach" {...cardMotion(0)}>
          <span className="mh-about-card__label">My Approach</span>
          <h3 className="mh-about-card__title">Thoughtful by design.</h3>
          <p className="mh-about-card__desc">
            I combine clarity with creativity to deliver experiences that are both meaningful and
            impactful.
          </p>
          <img
            className="mh-about-card__pixel"
            src={mascotPixel}
            alt="Marmel the mascot picking up a pixel with tweezers"
          />
        </motion.article>

        <motion.article className="mh-about-card mh-about-card--experience" {...cardMotion(1)}>
          <span className="mh-about-card__label">Experience</span>
          <h3 className="mh-about-card__number">8+ years</h3>
          <p className="mh-about-card__desc">
            of designing digital products and brands for amazing clients around the world.
          </p>
          <img
            className="mh-about-card__map"
            src={experienceMap}
            alt=""
            role="presentation"
          />
        </motion.article>

        <motion.article className="mh-about-card mh-about-card--tools" {...cardMotion(2)}>
          <span className="mh-about-card__label">Tools I Use</span>
          <img className="mh-about-card__tools" src={tools} alt="Figma, Affinity, Photoshop, Illustrator, Framer, ChatGPT and Cloud tool icons" />
        </motion.article>

        <motion.article className="mh-about-card mh-about-card--funfact" {...cardMotion(3)}>
          <div className="mh-about-card__stars" aria-hidden="true">
            <StarIcon size={9} className="mh-about-card__star mh-about-card__star--big" />
            <StarIcon size={7} className="mh-about-card__star mh-about-card__star--small" />
          </div>
          <span className="mh-about-card__label">Fun Fact</span>
          <h3 className="mh-about-card__title">I'm a night owl.</h3>
          <p className="mh-about-card__desc">best ideas come after the midnight.</p>
          <img
            className="mh-about-card__mascot"
            src={mascotSleeping}
            alt="Marmel the mascot sleeping"
          />
        </motion.article>
      </div>

      <div className="mh-about-cards__footer">
        <div className="mh-about-cards__footer-info">
          <div className="mh-about-cards__footer-item">
            <MapPinIcon size={15} />
            <span>Based in Armenia</span>
          </div>
          <div className="mh-about-cards__footer-item">
            <span className="mh-about-cards__footer-dot" aria-hidden="true" />
            <span className="mh-about-cards__footer-medium">Open for new projects</span>
          </div>
        </div>

        <div className="mh-about-cards__socials">
          {socials.map(({ label, Icon, size, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mh-about-cards__social"
              aria-label={label}
            >
              <Icon size={size} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
