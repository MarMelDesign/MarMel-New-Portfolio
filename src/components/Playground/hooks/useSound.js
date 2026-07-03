import { useCallback, useEffect } from 'react'

const SOUND_PRESETS = {
  hover: { type: 'sine', freq: 880, duration: 0.05, gain: 0.025 },
  select: { type: 'sine', freq: 520, freqEnd: 720, duration: 0.12, gain: 0.07 },
  dragStart: { type: 'sine', freq: 300, freqEnd: 220, duration: 0.08, gain: 0.045 },
  drop: { type: 'sine', freq: 440, freqEnd: 660, duration: 0.14, gain: 0.08 },
  generate: { type: 'triangle', notes: [440, 554, 660], duration: 0.09, gain: 0.07 },
  success: { type: 'sine', notes: [660, 880], duration: 0.16, gain: 0.08 },
}

let sharedContext = null

function getAudioContextClass() {
  if (typeof window === 'undefined') return null
  return window.AudioContext || window.webkitAudioContext || null
}

// Browsers only allow an AudioContext to be created/resumed inside a real
// user gesture (click, tap, keydown) — hover/mousemove does not qualify.
// Unlocking it eagerly on the first genuine gesture anywhere on the page
// means every sound preset (including hover cues) can play correctly for
// the rest of the session, instead of a hover-triggered creation getting
// stuck permanently suspended.
function unlockAudioContext() {
  const AudioContextClass = getAudioContextClass()
  if (!AudioContextClass) return
  if (!sharedContext) {
    sharedContext = new AudioContextClass()
  }
  if (sharedContext.state === 'suspended') {
    sharedContext.resume().catch(() => {})
  }
}

function playTone(ctx, { type, freq, freqEnd, duration, gain }, startTime) {
  const oscillator = ctx.createOscillator()
  const gainNode = ctx.createGain()

  oscillator.type = type
  oscillator.frequency.setValueAtTime(freq, startTime)
  if (freqEnd) {
    oscillator.frequency.exponentialRampToValueAtTime(freqEnd, startTime + duration)
  }

  gainNode.gain.setValueAtTime(0.0001, startTime)
  gainNode.gain.exponentialRampToValueAtTime(gain, startTime + 0.012)
  gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration)

  oscillator.connect(gainNode)
  gainNode.connect(ctx.destination)
  oscillator.start(startTime)
  oscillator.stop(startTime + duration + 0.02)
}

function playPreset(ctx, preset) {
  const now = ctx.currentTime
  if (preset.notes) {
    preset.notes.forEach((freq, index) => {
      playTone(ctx, { type: preset.type, freq, duration: preset.duration, gain: preset.gain }, now + index * (preset.duration * 0.8))
    })
  } else {
    playTone(ctx, preset, now)
  }
}

export function useSound() {
  useEffect(() => {
    const events = ['pointerdown', 'keydown']
    const handleFirstGesture = () => {
      unlockAudioContext()
      events.forEach((event) => window.removeEventListener(event, handleFirstGesture))
    }
    events.forEach((event) => window.addEventListener(event, handleFirstGesture, { once: false }))
    return () => events.forEach((event) => window.removeEventListener(event, handleFirstGesture))
  }, [])

  return useCallback((type) => {
    const preset = SOUND_PRESETS[type]
    if (!preset) return

    const AudioContextClass = getAudioContextClass()
    if (!AudioContextClass) return

    // Hover can't unlock a fresh context (not a real gesture) — skip
    // quietly until a click/keydown has unlocked one for the session.
    if (!sharedContext) {
      if (type === 'hover') return
      unlockAudioContext()
    }

    const ctx = sharedContext
    if (!ctx) return

    if (ctx.state === 'suspended') {
      ctx.resume().then(() => playPreset(ctx, preset)).catch(() => {})
      return
    }

    playPreset(ctx, preset)
  }, [])
}
