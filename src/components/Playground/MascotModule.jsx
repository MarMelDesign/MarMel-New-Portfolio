import ToolboxPanel from './ToolboxPanel'
import SelectableTile from './SelectableTile'
import { usePlayground } from './usePlaygroundStore'
import { MASCOTS } from './playgroundData'
import './MascotModule.css'

export default function MascotModule() {
  const { present, selectMascot } = usePlayground()

  return (
    <ToolboxPanel title="mascot background" number="05">
      <div className="mh-mascot-module__grid">
        {MASCOTS.map((mascot) => (
          <SelectableTile
            key={mascot.id}
            className="mh-mascot-tile"
            field="mascot"
            selected={present.mascot === mascot.id}
            onSelect={() => selectMascot(mascot.id)}
            ariaLabel={`Mascot background: ${mascot.label}`}
          >
            <span
              className="mh-mascot-tile__thumb"
              style={{
                backgroundImage: `url(${mascot.image})`,
                backgroundSize: mascot.fit,
                backgroundPosition: mascot.focus,
              }}
            />
            <span className="mh-mascot-tile__label">{mascot.label}</span>
          </SelectableTile>
        ))}
      </div>
    </ToolboxPanel>
  )
}
