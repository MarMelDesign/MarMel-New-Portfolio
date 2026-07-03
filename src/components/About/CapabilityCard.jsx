import { LayoutIcon, PenToolIcon, GridIcon } from '../Home/Icons'
import './CapabilityCard.css'

const capabilities = [
  {
    icon: LayoutIcon,
    title: 'UX/UI Design',
    description: 'I craft intuitive and engaging interfaces that people love to use.',
  },
  {
    icon: PenToolIcon,
    title: 'Brand Identity',
    description: 'I create visual identities that tell stories and build strong connections.',
  },
  {
    icon: GridIcon,
    title: 'Playful products',
    description: 'I design products, that feel delightful, smart and little unexpected.',
  },
]

export default function CapabilityCard() {
  return (
    <div className="mh-capability-card">
      {capabilities.map(({ icon: Icon, title, description }) => (
        <div className="mh-capability-card__row" key={title}>
          <div className="mh-capability-card__icon">
            <Icon size={18} />
          </div>
          <div className="mh-capability-card__text">
            <span className="mh-capability-card__title">{title}</span>
            <span className="mh-capability-card__desc">{description}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
