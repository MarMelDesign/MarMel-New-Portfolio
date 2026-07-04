export default function SlideShell({
  index,
  total = 10,
  name,
  roundedSide,
  tag,
  footerLabel,
  children,
}) {
  const progressPercent = (Number(index) / total) * 100
  const frameClass =
    roundedSide === 'left'
      ? 'mh-case-slide__frame mh-case-slide__frame--round-left'
      : roundedSide === 'right'
        ? 'mh-case-slide__frame mh-case-slide__frame--round-right'
        : 'mh-case-slide__frame'

  return (
    <section className="mh-case-slide" aria-label={`${name}, slide ${index} of ${total}`}>
      <div className={frameClass}>
        <span className="mh-case-slide__glow mh-case-slide__glow--one" aria-hidden="true" />
        <span className="mh-case-slide__glow mh-case-slide__glow--two" aria-hidden="true" />

        <div className="mh-case-slide__header">
          <div className="mh-case-slide__kicker">
            <span className="mh-case-slide__kicker-dot" aria-hidden="true" />
            <span className="mh-case-slide__kicker-index">{index}</span>
            <span className="mh-case-slide__kicker-dash">—</span>
            <span className="mh-case-slide__kicker-name">{name}</span>
          </div>
          <span className="mh-case-slide__tag">{tag}</span>
        </div>

        <div className="mh-case-slide__body">{children}</div>

        <div className="mh-case-slide__footer">
          <span className="mh-case-slide__footer-label">{footerLabel}</span>
          <div className="mh-case-slide__progress">
            <span className="mh-case-slide__progress-track">
              <span
                className="mh-case-slide__progress-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </span>
            <span className="mh-case-slide__progress-text">
              {index} / {total}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
