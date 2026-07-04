import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Header from './components/Home/Header'
import Home from './components/Home/Home'
import Work from './components/Work/Work'
import About from './components/About/About'
import Playground from './components/Playground/Playground'
import MarmelSpace from './components/MarmelSpace/MarmelSpace'
import Merch from './components/Merch/Merch'
import Resume from './components/Resume/Resume'
import IcrushCase from './components/CaseStudy/IcrushCase'
import SprootCase from './components/CaseStudy/SprootCase'
import SarangCase from './components/CaseStudy/SarangCase'
import DeSoiCase from './components/CaseStudy/DeSoiCase'
import VaultwinCase from './components/CaseStudy/VaultwinCase'
import DeadliComingSoon from './components/CaseStudy/DeadliComingSoon'
import LoadingScreen from './components/Loading/LoadingScreen'
import Footer from './components/Footer/Footer'
import { MusicProvider } from './components/Music/MusicProvider'
import './App.css'

const CASE_STUDY_PAGES = [
  'icrush-case',
  'sproot-case',
  'sarang-case',
  'desoi-case',
  'vaultwin-case',
  'deadli-case',
]

const pageVariants = {
  initial: { opacity: 0, y: 24, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -16, scale: 0.98 },
}

const reducedVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const pageTransition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] }

function App() {
  const [page, setPage] = useState('home')
  const [loading, setLoading] = useState(true)
  const prefersReducedMotion = useReducedMotion()
  const variants = prefersReducedMotion ? reducedVariants : pageVariants

  return (
    <MusicProvider>
      <Analytics />
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div
        className={
          page === 'resume'
            ? 'mh-app mh-app--resume'
            : CASE_STUDY_PAGES.includes(page)
              ? 'mh-app mh-app--case'
              : 'mh-app'
        }
      >
        <Header activePage={page} onNavigate={setPage} />

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            className="mh-page"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            {page === 'work' ? (
              <Work onNavigate={setPage} />
            ) : page === 'icrush-case' ? (
              <IcrushCase onNavigate={setPage} />
            ) : page === 'sproot-case' ? (
              <SprootCase onNavigate={setPage} />
            ) : page === 'sarang-case' ? (
              <SarangCase onNavigate={setPage} />
            ) : page === 'desoi-case' ? (
              <DeSoiCase onNavigate={setPage} />
            ) : page === 'vaultwin-case' ? (
              <VaultwinCase onNavigate={setPage} />
            ) : page === 'deadli-case' ? (
              <DeadliComingSoon onNavigate={setPage} />
            ) : page === 'about' ? (
              <About onNavigate={setPage} />
            ) : page === 'playground' ? (
              <Playground onNavigate={setPage} />
            ) : page === 'marmel-space' ? (
              <MarmelSpace onNavigate={setPage} />
            ) : page === 'merch' ? (
              <Merch onNavigate={setPage} />
            ) : page === 'resume' ? (
              <Resume onNavigate={setPage} />
            ) : (
              <Home onNavigate={setPage} />
            )}
          </motion.div>
        </AnimatePresence>

        {!CASE_STUDY_PAGES.includes(page) && <Footer />}
      </div>
    </MusicProvider>
  )
}

export default App
