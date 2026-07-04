import { ArrowIcon } from '../Home/Icons'
import './CaseStudyShared.css'
import './DeadliComingSoon.css'

export default function DeadliComingSoon({ onNavigate }) {
  return (
    <main className="mh-coming-soon">
      <div className="mh-coming-soon__frame">
        <span className="mh-case-slide__glow mh-case-slide__glow--one" aria-hidden="true" />
        <span className="mh-case-slide__glow mh-case-slide__glow--two" aria-hidden="true" />

        <div className="mh-coming-soon__content">
          <span className="mh-case-label">DEADLI</span>
          <h1 className="mh-coming-soon__title">Case study coming soon.</h1>
          <p className="mh-coming-soon__text">
            I'm still polishing the write-up for this project. Check back soon, or explore
            another room in the meantime.
          </p>
          <button
            type="button"
            className="mh-coming-soon__back"
            onClick={() => onNavigate?.('work')}
          >
            <span>Back to Work</span>
            <ArrowIcon size={16} />
          </button>
        </div>
      </div>
    </main>
  )
}
