import { ArrowIcon } from '../Home/Icons'
import cardDeadli from '../../assets/work/card-deadli.png'
import cardIcrush from '../../assets/work/card-icrush.png'
import cardDesoi from '../../assets/work/card-desoi.png'
import cardSproot from '../../assets/work/sproot.png'
import cardVaultwin from '../../assets/work/vaultwin.png'
import cardSarang from '../../assets/work/sarang.png'

const ALL_PROJECTS = [
  {
    name: 'Deadli',
    image: cardDeadli,
    alt: 'Deadli mobile app screens showing a countdown timer',
    caseStudyPage: 'deadli-case',
  },
  {
    name: 'iCrush',
    image: cardIcrush,
    alt: 'iCrush laptop mockup showing a purple social interface',
    caseStudyPage: 'icrush-case',
  },
  {
    name: 'De Soi',
    image: cardDesoi,
    alt: 'De Soi product bottles with two people on a warm background',
    caseStudyPage: 'desoi-case',
  },
  {
    name: 'Sproot',
    image: cardSproot,
    alt: 'Sproot dashboard showing media monitoring and analytics screens',
    caseStudyPage: 'sproot-case',
  },
  {
    name: 'Vaultwin',
    image: cardVaultwin,
    alt: 'Vaultwin app cards showing crypto deposit pools and prize tallies',
    caseStudyPage: 'vaultwin-case',
  },
  {
    name: 'Sarang',
    image: cardSarang,
    alt: 'Sarang app screens showing Korean food delivery and ordering',
    caseStudyPage: 'sarang-case',
  },
]

export default function NextRoomCards({ exclude, onNavigate }) {
  const projects = ALL_PROJECTS.filter((project) => project.name !== exclude).slice(0, 5)

  return (
    <div className="mh-case-next">
      <div className="mh-case-next__heading">
        <span className="mh-case-label">SELECTED WORK</span>
        <h2 className="mh-case-next__title">Explore the next room</h2>
      </div>

      <div className="mh-case-next__cards">
        {projects.map((project, i) => (
          <button
            type="button"
            key={project.name}
            className="mh-case-next-card"
            onClick={() => onNavigate?.(project.caseStudyPage || 'work')}
          >
            <span className="mh-case-next-card__image-wrap">
              <img src={project.image} alt={project.alt} className="mh-case-next-card__image" />
              <span className="mh-case-next-card__index">{String(i + 1).padStart(2, '0')}</span>
              <span className="mh-case-next-card__scrim" aria-hidden="true" />
              <span className="mh-case-next-card__info">
                <span className="mh-case-next-card__name">{project.name}</span>
                <span className="mh-case-next-card__arrow">
                  <ArrowIcon size={16} />
                </span>
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
