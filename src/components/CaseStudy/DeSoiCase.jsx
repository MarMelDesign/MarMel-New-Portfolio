import { useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '../Home/Icons'
import { CaseLightboxProvider } from './CaseLightbox'
import {
  HeroSlide,
  RoleSlide,
  ProjectBriefSlide,
  DesignGoalsSlide,
  DesignApproachSlide,
  StorytellingSlide,
  VisualConsistencySlide,
  ResponsiveOutcomeSlide,
  RetentionOverviewSlide,
  RetentionAlternativesSlide,
  ConsiderationsImpactSlide,
  FinalThoughtsSlide,
  NextProjectSlide,
} from './DeSoiSlides'
import './CaseStudyShared.css'

export default function DeSoiCase({ onNavigate }) {
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
          <RoleSlide />
          <ProjectBriefSlide />
          <DesignGoalsSlide />
          <DesignApproachSlide />
          <StorytellingSlide />
          <VisualConsistencySlide />
          <ResponsiveOutcomeSlide />
          <RetentionOverviewSlide />
          <RetentionAlternativesSlide />
          <ConsiderationsImpactSlide />
          <FinalThoughtsSlide />
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
