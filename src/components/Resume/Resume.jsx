import { useRef } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { DownloadIcon, ArrowLeftIcon } from '../Home/Icons'
import { HERO, PROFILE_TEXT, EXPERIENCE, EDUCATION, SKILLS, LANGUAGES, SECTIONS } from './resumeData'
import './Resume.css'

function Chip({ children }) {
  return (
    <span className="mh-resume-chip">
      <span className="mh-resume-chip__text">{children}</span>
    </span>
  )
}

function CardHeader({ number, title }) {
  return (
    <div className="mh-resume-card__head">
      <span className="mh-resume-card__number">{number}</span>
      <h2 className="mh-resume-card__title">{title}</h2>
      <span className="mh-resume-card__divider" aria-hidden="true" />
    </div>
  )
}

export default function Resume({ onNavigate }) {
  const skillsRef = useRef(null)
  const sectionRefs = {
    profile: useRef(null),
    experience: useRef(null),
    education: useRef(null),
    skills: skillsRef,
    languages: skillsRef,
  }
  const prefersReducedMotion = useReducedMotion()

  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  return (
    <main className="mh-stage-wrap mh-resume-wrap">
      <div className="mh-resume">
        <button type="button" className="mh-resume__back" onClick={() => onNavigate?.('about')}>
          <ArrowLeftIcon size={16} />
          <span>Back to About</span>
        </button>

        <div className="mh-resume__hero">
          <span className="mh-resume__role-label">{HERO.roleLabel}</span>
          <h1 className="mh-resume__name">{HERO.name}</h1>
          <span className="mh-resume__nickname">{HERO.nickname}</span>
        </div>

        <div className="mh-resume__dashboard">
          <div className="mh-resume__index">
            <span className="mh-resume__index-heading">SECTIONS</span>
            <div className="mh-resume__index-list">
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  className="mh-resume__index-item"
                  onClick={() => scrollToSection(section.id)}
                >
                  <span className="mh-resume__index-number">{section.number}</span>
                  <span className="mh-resume__index-label">{section.label}</span>
                </button>
              ))}
            </div>
            <button type="button" className="mh-resume__download" onClick={() => window.print()}>
              <DownloadIcon size={16} />
              <span>Download CV</span>
            </button>
          </div>

          <div className="mh-resume__main">
            <motion.div
              ref={sectionRefs.profile}
              className="mh-resume-card"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <CardHeader number="01" title="profile" />
              <p className="mh-resume-card__text">{PROFILE_TEXT}</p>
            </motion.div>

            <motion.div
              ref={sectionRefs.experience}
              className="mh-resume-card"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <CardHeader number="02" title="experience" />
              <div className="mh-resume-timeline">
                {EXPERIENCE.map((job) => (
                  <div key={job.company} className="mh-resume-job">
                    <div className="mh-resume-job__head">
                      <div className="mh-resume-job__title-block">
                        <span className="mh-resume-job__company">{job.company}</span>
                        <span className="mh-resume-job__role">{job.role}</span>
                      </div>
                      <span className="mh-resume-job__dates">{job.dates}</span>
                    </div>

                    {job.achievements && (
                      <div className="mh-resume-job__achievements">
                        <span className="mh-resume-job__achievements-label">
                          RESPONSIBILITIES &amp; ACHIEVEMENTS
                        </span>
                        {job.achievements.map((item) => (
                          <div key={item} className="mh-resume-job__achievement-row">
                            <span className="mh-resume-job__achievement-dot" aria-hidden="true" />
                            <span className="mh-resume-job__achievement-text">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              ref={sectionRefs.education}
              className="mh-resume-card"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
            >
              <CardHeader number="03" title="education" />
              <div className="mh-resume-timeline">
                {EDUCATION.map((edu) => (
                  <div key={edu.institution} className="mh-resume-edu">
                    <div className="mh-resume-edu__text">
                      <span className="mh-resume-edu__institution">{edu.institution}</span>
                      <span className="mh-resume-edu__detail">{edu.detail}</span>
                    </div>
                    <span className="mh-resume-edu__dates">{edu.dates}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              ref={sectionRefs.skills}
              className="mh-resume-card"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
            >
              <CardHeader number="04" title="skills" />
              {SKILLS.map((group) => (
                <div key={group.label} className="mh-resume-skills-group">
                  <span className="mh-resume-skills-group__label">{group.label}</span>
                  <div className="mh-resume-skills-group__chips">
                    {group.items.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </div>
                </div>
              ))}
              <div className="mh-resume-skills-group">
                <span className="mh-resume-skills-group__label">LANGUAGES</span>
                <div className="mh-resume-skills-group__chips">
                  {LANGUAGES.map((lang) => (
                    <Chip key={lang}>{lang}</Chip>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}
