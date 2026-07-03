import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import trackSrc from '../../assets/audio/just-a-dream.mp3'

export const TRACK = { title: 'Just a Dream', artist: 'Nelly' }

const MusicContext = createContext(null)

export function MusicProvider({ children }) {
  const audioRef = useRef(null)
  // Tracks whether the current mute state came from our own autoplay-policy
  // workaround rather than a deliberate choice, so pressing play can safely
  // clear it without ever overriding a mute the visitor set on purpose.
  const autoMutedRef = useRef(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const audio = audioRef.current

    // Derive isPlaying from the audio element's own play/pause events rather
    // than setting it manually wherever play()/pause() is called — a play()
    // promise can reject silently (autoplay policy, a stalled network, etc.),
    // and if state were set optimistically the button could show "pause"
    // while the audio never actually started.
    const onTimeUpdate = () => {
      if (audio.duration) setProgress(audio.currentTime / audio.duration)
    }
    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)

    async function attemptAutoplay() {
      try {
        await audio.play()
      } catch {
        // Browsers block unmuted autoplay until the user interacts with the page.
        // Muted autoplay is almost always allowed, so fall back to that and let
        // the header mute button hand control back to the visitor.
        audio.muted = true
        autoMutedRef.current = true
        setIsMuted(true)
        try {
          await audio.play()
        } catch {
          // Autoplay fully blocked by this browser's policy even when muted —
          // start on the visitor's first interaction with the page instead.
          // Listen on 'click' (not 'pointerdown') so this fires after React's
          // own onClick handlers — otherwise clicking the visible Play button
          // races this listener: it starts playback first, then togglePlay
          // sees audio already playing and immediately pauses it again.
          const startOnInteraction = () => {
            audio.muted = false
            autoMutedRef.current = false
            setIsMuted(false)
            audio.play().catch(() => {})
          }
          document.addEventListener('click', startOnInteraction, { once: true })
          document.addEventListener('keydown', startOnInteraction, { once: true })
        }
      }
    }
    attemptAutoplay()

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
    }
  }, [])

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (audio.paused) {
      // Pressing play is an explicit "I want to hear this" action, so clear
      // mute — but only if it was our own autoplay-policy workaround, never
      // a mute the visitor chose deliberately via a mute button.
      if (audio.muted && autoMutedRef.current) {
        audio.muted = false
        autoMutedRef.current = false
        setIsMuted(false)
      }
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }, [])

  const toggleMute = useCallback(() => {
    const audio = audioRef.current
    audio.muted = !audio.muted
    autoMutedRef.current = false
    setIsMuted(audio.muted)
  }, [])

  const seekTo = useCallback((ratio) => {
    const audio = audioRef.current
    if (!audio.duration) return
    audio.currentTime = ratio * audio.duration
    setProgress(ratio)
  }, [])

  const value = { track: TRACK, isPlaying, isMuted, progress, togglePlay, toggleMute, seekTo }

  return (
    <MusicContext.Provider value={value}>
      <audio ref={audioRef} src={trackSrc} loop preload="auto" />
      {children}
    </MusicContext.Provider>
  )
}

export function useMusic() {
  const context = useContext(MusicContext)
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider')
  }
  return context
}
