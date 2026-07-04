import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import mascotVideo from '../../assets/loading/mascot-intro.mp4'
import './LoadingScreen.css'

export default function LoadingScreen({ onComplete }) {
  const [visible, setVisible] = useState(true)
  const videoRef = useRef(null)
  const doneRef = useRef(false)

  const finish = () => {
    if (doneRef.current) return
    doneRef.current = true
    setVisible(false)
  }

  useEffect(() => {
    const fallback = setTimeout(finish, 8000)
    return () => clearTimeout(fallback)
  }, [])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="mh-loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          onClick={finish}
          role="button"
          aria-label="Skip intro"
        >
          <video
            ref={videoRef}
            className="mh-loading__video"
            src={mascotVideo}
            autoPlay
            muted
            playsInline
            onEnded={finish}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
