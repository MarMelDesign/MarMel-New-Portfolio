import { motion } from 'motion/react'
import { useMarmelSpacePosters } from '../../store/marmelSpaceStore'
import PosterCard from './PosterCard'
import { ArrowLeftIcon, HeartIcon } from '../Home/Icons'
import './MarmelSpace.css'

export default function MarmelSpace({ onNavigate }) {
  const posters = useMarmelSpacePosters()
  const goToPlayground = () => onNavigate?.('playground')

  return (
    <main className="mh-stage-wrap">
      <div className="mh-space">
        <span className="mh-space__particle mh-space__particle--1" aria-hidden="true" />
        <span className="mh-space__particle mh-space__particle--2" aria-hidden="true" />
        <span className="mh-space__particle mh-space__particle--3" aria-hidden="true" />
        <span className="mh-space__particle mh-space__particle--4" aria-hidden="true" />

        <motion.div
          className="mh-space__title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1>MARMEL SPACE</h1>
          <p>A living gallery of collectible posters left by designers around the world.</p>
        </motion.div>

        <div className="mh-space__wall">
          {posters.map((poster, index) => (
            <PosterCard key={poster.id} poster={poster} index={index} />
          ))}
        </div>

        {posters.length > 0 && (
          <div className="mh-space__sentence">
            <HeartIcon size={18} />
            <span>You are now part of Marmel Space.</span>
          </div>
        )}

        <div className="mh-space__actions">
          <button type="button" className="mh-space__back" onClick={goToPlayground}>
            <ArrowLeftIcon size={17} />
            <span>Back to Playground</span>
          </button>
        </div>
      </div>
    </main>
  )
}
