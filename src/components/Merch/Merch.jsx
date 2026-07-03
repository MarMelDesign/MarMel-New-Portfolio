import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Button from '../Home/Button'
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '../Home/Icons'
import { ROOMS } from './merchRooms'
import './Merch.css'

const EASE = [0.22, 1, 0.36, 1]

const sceneVariants = {
  enter: (direction) => ({ opacity: 0, x: direction >= 0 ? 48 : -48 }),
  center: { opacity: 1, x: 0 },
  exit: (direction) => ({ opacity: 0, x: direction >= 0 ? -48 : 48 }),
}

export default function Merch({ onNavigate }) {
  const [[current, direction], setSlide] = useState([0, 0])
  const prefersReducedMotion = useReducedMotion()
  const room = ROOMS[current]

  const paginate = useCallback((step) => {
    setSlide(([index]) => [(index + step + ROOMS.length) % ROOMS.length, step])
  }, [])

  const goTo = useCallback((index) => {
    setSlide(([current]) => [index, index >= current ? 1 : -1])
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight') paginate(1)
      if (event.key === 'ArrowLeft') paginate(-1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [paginate])

  return (
    <main className="mh-stage-wrap">
      <div className="mh-merch">
        <div className="mh-merch__counter">
          <span className="mh-merch__counter-current">{String(current + 1).padStart(2, '0')}</span>
          <span className="mh-merch__counter-total">/ {String(ROOMS.length).padStart(2, '0')}</span>
        </div>

        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={current}
            className="mh-merch__scene"
            custom={direction}
            variants={prefersReducedMotion ? undefined : sceneVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: EASE }}
          >
            <div className="mh-merch__text">
              <span className="mh-merch__eyebrow">
                <StarIcon size={14} />
                THE MARMEL COLLECTION
              </span>

              <span className="mh-merch__tag">{room.tag}</span>

              <h2 className="mh-merch__headline">
                {room.lines.map((line) => (
                  <span
                    key={line.text}
                    className={
                      line.accent
                        ? 'mh-merch__headline-line mh-merch__headline-line--accent'
                        : 'mh-merch__headline-line'
                    }
                  >
                    {line.text}
                  </span>
                ))}
              </h2>

              <p className="mh-merch__subtitle">{room.subtitle}</p>

              {room.cta && (
                <div className="mh-merch__cta-row">
                  <Button
                    variant="talk"
                    href={room.cta.action === 'mailto' ? 'mailto:melkonyan.designer@gmail.com' : undefined}
                    onClick={room.cta.action === 'mailto' ? undefined : () => onNavigate?.(room.cta.action)}
                  >
                    {room.cta.label}
                  </Button>
                </div>
              )}
            </div>

            <div className="mh-merch__visual">
              <span className="mh-merch__spotlight" aria-hidden="true" />
              <span className="mh-merch__floor-light" aria-hidden="true" />
              <div className={room.fit === 'cover' ? 'mh-merch__door mh-merch__door--photo' : 'mh-merch__door'}>
                <img
                  key={room.image}
                  src={room.image}
                  alt={room.alt}
                  className={
                    room.fit === 'cover'
                      ? 'mh-merch__figure mh-merch__figure--cover'
                      : 'mh-merch__figure'
                  }
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mh-merch__controls">
          <div className="mh-merch__control-bar">
            <button
              type="button"
              className="mh-merch__arrow"
              onClick={() => paginate(-1)}
              aria-label="Previous room"
            >
              <ChevronLeftIcon size={20} />
            </button>

            <div className="mh-merch__dots">
              {ROOMS.map((item, index) => (
                <button
                  key={item.tag}
                  type="button"
                  className={
                    index === current ? 'mh-merch__dot mh-merch__dot--active' : 'mh-merch__dot'
                  }
                  onClick={() => goTo(index)}
                  aria-label={`Go to room ${index + 1}`}
                  aria-current={index === current ? 'true' : undefined}
                />
              ))}
            </div>

            <button
              type="button"
              className="mh-merch__arrow mh-merch__arrow--next"
              onClick={() => paginate(1)}
              aria-label="Next room"
            >
              <ChevronRightIcon size={20} />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
