import { useState } from 'react'
import Button from './Button'
import { MenuIcon, CloseIcon, SpeakerIcon, SpeakerMuteIcon } from './Icons'
import { useMusic } from '../Music/MusicProvider'
import logoWordmark from '../../assets/marmel/logo-wordmark.png'
import './Header.css'

const navLinks = [
  { label: 'home', page: 'home' },
  { label: 'about', page: 'about' },
  { label: 'work', page: 'work' },
  { label: 'playground', page: 'playground' },
  { label: 'merch', page: 'merch' },
]

export default function Header({ activePage = 'home', onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isMuted, toggleMute } = useMusic()
  const showMuteToggle = activePage !== 'home'

  const navigate = (page) => {
    if (!page) return
    onNavigate?.(page)
    setMenuOpen(false)
  }

  return (
    <header className="mh-header">
      <nav className="mh-header__nav" aria-label="Primary">
        {navLinks.map((item) => (
          <button
            key={item.label}
            type="button"
            className="mh-nav-link"
            aria-current={item.page === activePage ? 'page' : undefined}
            onClick={() => navigate(item.page)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button
        type="button"
        className="mh-header__logo-tab"
        onClick={() => navigate('home')}
        aria-label="Go to home"
      >
        <img src={logoWordmark} alt="Marmel" className="mh-header__logo-img" />
      </button>

      <div className="mh-header__actions">
        {showMuteToggle && (
          <button
            type="button"
            className="mh-header__mute"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute music' : 'Mute music'}
            aria-pressed={isMuted}
          >
            {isMuted ? <SpeakerMuteIcon size={16} /> : <SpeakerIcon size={16} />}
          </button>
        )}
        <Button variant="talk" href="mailto:melkonyan.designer@gmail.com">
          let’s talk
        </Button>
      </div>

      <button
        type="button"
        className="mh-header__menu-toggle"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
      </button>

      {menuOpen && (
        <div className="mh-header__mobile-menu">
          {navLinks.map((item) => (
            <button
              key={item.label}
              type="button"
              className="mh-header__mobile-link"
              aria-current={item.page === activePage ? 'page' : undefined}
              onClick={() => navigate(item.page)}
            >
              {item.label}
            </button>
          ))}
          {showMuteToggle && (
            <button
              type="button"
              className="mh-header__mobile-mute"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute music' : 'Mute music'}
              aria-pressed={isMuted}
            >
              {isMuted ? <SpeakerMuteIcon size={16} /> : <SpeakerIcon size={16} />}
              <span>{isMuted ? 'Unmute music' : 'Mute music'}</span>
            </button>
          )}
          <Button
            variant="talk"
            className="mh-header__mobile-talk"
            href="mailto:melkonyan.designer@gmail.com"
          >
            let’s talk
          </Button>
        </div>
      )}
    </header>
  )
}
