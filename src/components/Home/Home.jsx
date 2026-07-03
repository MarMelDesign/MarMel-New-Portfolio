import HeroText from './HeroText'
import TrustBadge from './TrustBadge'
import MascotVisual from './MascotVisual'
import MoodMusicCard from './MoodMusicCard'
import './Home.css'

export default function Home({ onNavigate }) {
  return (
    <main className="mh-stage-wrap">
      <section className="mh-stage" aria-label="Marmel Studio introduction">
        <MascotVisual />

        <div className="mh-stage__text">
          <HeroText onNavigate={onNavigate} />
        </div>

        <div className="mh-stage__badge">
          <TrustBadge />
        </div>

        <div className="mh-stage__preview">
          <MoodMusicCard />
        </div>
      </section>
    </main>
  )
}
