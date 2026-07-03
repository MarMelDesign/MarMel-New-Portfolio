import { FlagIcon, CubeIcon, BoltIcon } from './Icons'
import './TrustBadge.css'

export default function TrustBadge() {
  return (
    <div className="mh-badge">
      <span className="mh-badge__icons">
        <span className="mh-badge__icon mh-badge__icon--1">
          <FlagIcon />
        </span>
        <span className="mh-badge__icon mh-badge__icon--2">
          <CubeIcon />
        </span>
        <span className="mh-badge__icon mh-badge__icon--3">
          <BoltIcon />
        </span>
      </span>
      <span className="mh-badge__text">UX/UI designer · Brand visuals · Motion-first concepts</span>
    </div>
  )
}
