import WorkHero from './WorkHero'
import WorkProjects from './WorkProjects'
import './Work.css'

export default function Work() {
  return (
    <main className="mh-stage-wrap">
      <div className="mh-work">
        <WorkHero />
        <WorkProjects />
      </div>
    </main>
  )
}
