import ToolboxPanel from './ToolboxPanel'
import SelectableTile from './SelectableTile'
import { usePlayground } from './usePlaygroundStore'
import { ICONS } from './playgroundData'
import { ICON_COMPONENTS } from './iconRegistry'
import './IconModule.css'

export default function IconModule() {
  const { present, selectIcon } = usePlayground()

  return (
    <ToolboxPanel title="icon" number="04">
      <div className="mh-icon-module__grid">
        {ICONS.map((icon) => {
          const Icon = ICON_COMPONENTS[icon.id]
          const selected = present.icon === icon.id
          return (
            <SelectableTile
              key={icon.id}
              className="mh-icon-tile"
              field="icon"
              tilt
              selected={selected}
              onSelect={() => selectIcon(icon.id)}
              ariaLabel={`Icon: ${icon.label}`}
            >
              <Icon size={20} className="mh-icon-tile__glyph" />
            </SelectableTile>
          )
        })}
      </div>
    </ToolboxPanel>
  )
}
