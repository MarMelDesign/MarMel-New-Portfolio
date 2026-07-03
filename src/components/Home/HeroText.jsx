import Button from './Button'
import './HeroText.css'

export default function HeroText({ onNavigate }) {
  return (
    <div className="mh-hero-text">
      <p className="mh-hero-text__paragraph">
        I create thoughtful digital experiences, memorable brands and playful products that make
        an impact.
      </p>

      <div className="mh-hero-text__ctas">
        <Button variant="primary" onClick={() => onNavigate?.('about')}>
          about me
        </Button>
        <Button variant="outline" onClick={() => onNavigate?.('work')}>
          my works
        </Button>
      </div>
    </div>
  )
}
