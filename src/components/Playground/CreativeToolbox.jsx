import LogoModule from './LogoModule'
import ColorModule from './ColorModule'
import TypographyModule from './TypographyModule'
import IconModule from './IconModule'
import MascotModule from './MascotModule'
import './CreativeToolbox.css'

export default function CreativeToolbox() {
  return (
    <div className="mh-toolbox">
      <div className="mh-toolbox__header">
        <span className="mh-toolbox__eyebrow">CREATIVE TOOLBOX</span>
        <h2 className="mh-toolbox__heading">Before you leave…</h2>
        <p className="mh-toolbox__sub">Leave a little piece of yourself in Marmel Space.</p>
      </div>

      <LogoModule />
      <ColorModule />
      <TypographyModule />
      <IconModule />
      <MascotModule />
    </div>
  )
}
