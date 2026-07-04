import { useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '../Home/Icons'
import { CaseLightboxProvider } from './CaseLightbox'
import {
  HeroSlide,
  OverviewSlide,
  RoleSlide,
  ProblemSlide,
  SolutionsSlide,
  ProcessSlide,
  PrototypeSlide,
  StatementSlide,
  NextProjectSlide,
} from './SprootSlides'
import './CaseStudyShared.css'
import './SprootCase.css'

export default function SprootCase({ onNavigate }) {
  const scrollerRef = useRef(null)

  const scrollByPage = (direction) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth, behavior: 'smooth' })
  }

  return (
    <CaseLightboxProvider>
      <main className="mh-case-page">
        <div className="mh-case-scroller" ref={scrollerRef}>
          <HeroSlide />
          <OverviewSlide />
          <RoleSlide />
          <ProblemSlide />
          <SolutionsSlide />
          <ProcessSlide />
          <PrototypeSlide />
          <StatementSlide />
          <NextProjectSlide onNavigate={onNavigate} />
        </div>

        <div className="mh-case-nav">
          <button
            type="button"
            className="mh-case-nav__arrow"
            onClick={() => scrollByPage(-1)}
            aria-label="Previous section"
          >
            <ChevronLeftIcon size={20} />
          </button>
          <button
            type="button"
            className="mh-case-nav__arrow mh-case-nav__arrow--next"
            onClick={() => scrollByPage(1)}
            aria-label="Next section"
          >
            <ChevronRightIcon size={20} />
          </button>
        </div>
      </main>
    </CaseLightboxProvider>
  )
}
