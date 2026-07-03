import AboutHero from './AboutHero'
import AboutInfoCards from './AboutInfoCards'
import './About.css'

export default function About({ onNavigate }) {
  return (
    <main className="mh-stage-wrap">
      <div className="mh-about">
        <AboutHero onNavigate={onNavigate} />
        <AboutInfoCards />
      </div>
    </main>
  )
}
