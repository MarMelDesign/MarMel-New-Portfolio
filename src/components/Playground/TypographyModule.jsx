import ToolboxPanel from './ToolboxPanel'
import SelectableTile from './SelectableTile'
import { usePlayground } from './usePlaygroundStore'
import { TYPOGRAPHY } from './playgroundData'
import './TypographyModule.css'

export default function TypographyModule() {
  const { present, selectTypography } = usePlayground()

  return (
    <ToolboxPanel title="typography" number="03">
      <div className="mh-typography-module__list">
        {TYPOGRAPHY.map((type) => (
          <SelectableTile
            key={type.id}
            className="mh-type-tile"
            field="typography"
            selected={present.typography === type.id}
            onSelect={() => selectTypography(type.id)}
            ariaLabel={`Typography: ${type.label}`}
          >
            <span
              className="mh-type-tile__glyph"
              style={{
                fontFamily: type.fontFamily,
                fontWeight: type.fontWeight,
                fontStyle: type.fontStyle,
                letterSpacing: type.letterSpacing,
                textTransform: type.textTransform,
              }}
            >
              Aa
            </span>
            <span className="mh-type-tile__meta">
              <span className="mh-type-tile__name">{type.label}</span>
              <span className="mh-type-tile__note">{type.note}</span>
            </span>
          </SelectableTile>
        ))}
      </div>
    </ToolboxPanel>
  )
}
