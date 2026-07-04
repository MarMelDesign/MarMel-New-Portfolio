import { motion, useReducedMotion } from 'motion/react'
import ProjectCard from './ProjectCard'
import cardDeadli from '../../assets/work/card-deadli.png'
import cardIcrush from '../../assets/work/card-icrush.png'
import cardDesoi from '../../assets/work/card-desoi.png'
import cardSproot from '../../assets/work/sproot.png'
import cardVaultwin from '../../assets/work/vaultwin.png'
import cardSarang from '../../assets/work/sarang.png'
import './WorkProjects.css'

const projects = [
  {
    number: '01',
    title: 'Deadli',
    description: 'A productivity companion that makes deadlines feel calmer.',
    image: cardDeadli,
    imageAlt: 'Deadli mobile app screens showing a countdown timer',
    background: 'linear-gradient(135deg, #f5dada 0%, #f3d2b6 100%)',
    caseStudyPage: 'deadli-case',
    vars: {
      '--pc-title': '#181818',
      '--pc-desc': '#7a5c4c',
      '--pc-number': '#5c0f1c',
      '--pc-cta-bg': '#5c0f1c',
      '--pc-cta-text': '#fbf3e7',
    },
  },
  {
    number: '02',
    title: 'iCrush',
    description: 'A playful platform for anonymous admiration.',
    image: cardIcrush,
    imageAlt: 'iCrush laptop mockup showing a purple social interface',
    background: 'linear-gradient(135deg, #241016 0%, #4a0b16 100%)',
    caseStudyPage: 'icrush-case',
    vars: {
      '--pc-title': '#fbf3e7',
      '--pc-desc': '#d8b9b0',
      '--pc-number': '#f2d2b8',
      '--pc-cta-bg': '#fbf3e7',
      '--pc-cta-text': '#5c0f1c',
    },
  },
  {
    number: '03',
    title: 'De Soi',
    description: 'Non-alcoholic apéritif brand with adaptogens and botanical ingredients.',
    image: cardDesoi,
    imageAlt: 'De Soi product bottles with two people on a warm background',
    background: 'linear-gradient(135deg, #d68b00 0%, #de8e0d 100%)',
    caseStudyPage: 'desoi-case',
    vars: {
      '--pc-title': '#ffffff',
      '--pc-desc': '#ffffff',
      '--pc-number': '#5c0f1c',
      '--pc-cta-bg': '#5c0f1c',
      '--pc-cta-text': '#ffffff',
    },
  },
  {
    number: '04',
    title: 'Sproot',
    description: 'A media intelligence platform that turns scattered mentions into clear signals.',
    image: cardSproot,
    imageAlt: 'Sproot dashboard showing media monitoring and analytics screens',
    background: 'linear-gradient(135deg, #101a33 0%, #22407a 100%)',
    caseStudyPage: 'sproot-case',
    vars: {
      '--pc-title': '#ffffff',
      '--pc-desc': '#b9c6e6',
      '--pc-number': '#8fb1ff',
      '--pc-cta-bg': '#ffffff',
      '--pc-cta-text': '#101a33',
    },
  },
  {
    number: '05',
    title: 'Vaultwin',
    description: 'A non-loss lottery on the blockchain — entries are always returned to the player.',
    image: cardVaultwin,
    imageAlt: 'Vaultwin app cards showing crypto deposit pools and prize tallies',
    background: 'linear-gradient(135deg, #2a0e4d 0%, #7c1a6b 100%)',
    caseStudyPage: 'vaultwin-case',
    vars: {
      '--pc-title': '#ffffff',
      '--pc-desc': '#e3c9f0',
      '--pc-number': '#ff8fd6',
      '--pc-cta-bg': '#ffffff',
      '--pc-cta-text': '#2a0e4d',
    },
  },
  {
    number: '06',
    title: 'Sarang',
    description: 'A Korean food delivery app that pairs everyday cravings with delightful discovery.',
    image: cardSarang,
    imageAlt: 'Sarang app screens showing Korean food delivery and ordering',
    background: 'linear-gradient(135deg, #7a0f1c 0%, #e5484d 100%)',
    caseStudyPage: 'sarang-case',
    vars: {
      '--pc-title': '#ffffff',
      '--pc-desc': '#f9d3d3',
      '--pc-number': '#ffd9d9',
      '--pc-cta-bg': '#ffffff',
      '--pc-cta-text': '#7a0f1c',
    },
  },
]

export default function WorkProjects({ onNavigate }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="mh-work-projects" aria-label="Selected work">
      <div className="mh-work-projects__scroller">
        {projects.map((project, index) => (
          <motion.div
            key={project.number}
            className="mh-work-projects__slide"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
          >
            <ProjectCard
              {...project}
              onViewCase={project.caseStudyPage ? () => onNavigate?.(project.caseStudyPage) : undefined}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
