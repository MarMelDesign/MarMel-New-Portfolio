import { useRef, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { PlaygroundProvider } from './PlaygroundContext'
import CreativeToolbox from './CreativeToolbox'
import BrandBoard from './BrandBoard'
import FloatingToolbar from './FloatingToolbar'
import PosterView from './PosterView'
import { useSound } from './hooks/useSound'
import './Playground.css'

export default function Playground({ onNavigate }) {
  const boardRef = useRef(null)
  const playSound = useSound()
  const [posterOpen, setPosterOpen] = useState(false)

  const visitSpace = () => {
    setPosterOpen(false)
    onNavigate?.('marmel-space')
  }

  return (
    <PlaygroundProvider boardRef={boardRef} playSound={playSound}>
      <main className="mh-stage-wrap">
        <div className="mh-playground">
          <section className="mh-playground__studio" aria-label="Brand playground">
            <CreativeToolbox />
            <BrandBoard ref={boardRef} />
          </section>

          <FloatingToolbar onGenerate={() => setPosterOpen(true)} onVisitSpace={visitSpace} />
        </div>
      </main>

      <AnimatePresence>
        {posterOpen && <PosterView onClose={() => setPosterOpen(false)} onVisitSpace={visitSpace} />}
      </AnimatePresence>
    </PlaygroundProvider>
  )
}
