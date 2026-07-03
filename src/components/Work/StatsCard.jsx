import { Fragment } from 'react'
import './StatsCard.css'

const stats = [
  { value: '120+', label: 'Completed Projects' },
  { value: '50+', label: 'Happy Clients' },
  { value: '10+', label: 'Countries Worldwide' },
]

export default function StatsCard() {
  return (
    <div className="mh-stats-card">
      {stats.map((stat, index) => (
        <Fragment key={stat.label}>
          <div className="mh-stats-card__stat">
            <span className="mh-stats-card__value">{stat.value}</span>
            <span className="mh-stats-card__label">{stat.label}</span>
          </div>
          {index < stats.length - 1 && (
            <span className="mh-stats-card__divider" aria-hidden="true" />
          )}
        </Fragment>
      ))}
    </div>
  )
}
