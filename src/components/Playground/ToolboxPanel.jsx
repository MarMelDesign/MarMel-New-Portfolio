import './ToolboxPanel.css'

export default function ToolboxPanel({ title, number, children }) {
  return (
    <div className="mh-panel">
      <div className="mh-panel__header">
        <span className="mh-panel__title">{title}</span>
        <span className="mh-panel__number">{number}</span>
      </div>
      {children}
    </div>
  )
}
