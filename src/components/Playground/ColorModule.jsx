import ToolboxPanel from './ToolboxPanel'
import SelectableTile from './SelectableTile'
import { usePlayground } from './usePlaygroundStore'
import { COLORS } from './playgroundData'
import './ColorModule.css'

export default function ColorModule() {
  const { present, selectColor } = usePlayground()

  return (
    <ToolboxPanel title="colors" number="02">
      <div className="mh-color-module__grid">
        {COLORS.map((color) => (
          <SelectableTile
            key={color.id}
            className="mh-color-tile"
            field="color"
            selected={present.color === color.id}
            onSelect={() => selectColor(color.id)}
            ariaLabel={`Color: ${color.label}`}
          >
            <span
              className="mh-color-tile__swatch"
              style={{
                background: color.hex,
                borderBottom: color.needsBorder ? '1px solid #e4d8c4' : 'none',
              }}
            />
            <span className="mh-color-tile__label">{color.label}</span>
          </SelectableTile>
        ))}
      </div>
    </ToolboxPanel>
  )
}
