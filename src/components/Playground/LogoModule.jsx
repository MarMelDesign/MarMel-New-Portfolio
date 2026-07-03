import ToolboxPanel from './ToolboxPanel'
import SelectableTile from './SelectableTile'
import { usePlayground } from './usePlaygroundStore'
import { LOGO_STYLES } from './playgroundData'
import './LogoModule.css'

function LogoPreview({ id }) {
  switch (id) {
    case 'bold':
      return (
        <div className="mh-logo-preview__badge">
          <span className="mh-logo-preview__badge-letter">M</span>
        </div>
      )
    case 'minimal':
      return <span className="mh-logo-preview__minimal">m</span>
    case 'wordmark':
      return <span className="mh-logo-preview__wordmark">marmel</span>
    case 'italic':
      return <span className="mh-logo-preview__italic">M</span>
    case 'rounded':
      return (
        <span className="mh-logo-preview__pill">
          <span className="mh-logo-preview__pill-text">Marm</span>
        </span>
      )
    case 'monogram':
      return (
        <span className="mh-logo-preview__monogram">
          <span className="mh-logo-preview__monogram-text">MM</span>
        </span>
      )
    default:
      return null
  }
}

export default function LogoModule() {
  const { present, selectLogoStyle } = usePlayground()

  return (
    <ToolboxPanel title="your name" number="01">
      <div className="mh-logo-module__grid">
        {LOGO_STYLES.map((style) => (
          <SelectableTile
            key={style.id}
            className="mh-logo-tile"
            field="logoStyle"
            selected={present.logoStyle === style.id}
            onSelect={() => selectLogoStyle(style.id)}
            ariaLabel={`Logo style: ${style.label}`}
          >
            <LogoPreview id={style.id} />
          </SelectableTile>
        ))}
      </div>
    </ToolboxPanel>
  )
}
