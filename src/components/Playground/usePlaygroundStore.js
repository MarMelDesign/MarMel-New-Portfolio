import { createContext, useContext } from 'react'
import { COLORS, ICONS, INITIAL_STATE, LOGO_STYLES, MASCOTS, TYPOGRAPHY } from './playgroundData'

export const MAX_HISTORY = 50
export const MUTE_STORAGE_KEY = 'marmel-playground-muted'

export const PlaygroundStateContext = createContext(null)

export const historyInitial = { past: [], present: INITIAL_STATE, future: [] }

export function historyReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELDS': {
      const present = { ...state.present, ...action.payload }
      const past = [...state.past, state.present].slice(-MAX_HISTORY)
      return { past, present, future: [] }
    }
    case 'RESET': {
      const past = [...state.past, state.present].slice(-MAX_HISTORY)
      return { past, present: INITIAL_STATE, future: [] }
    }
    case 'UNDO': {
      if (state.past.length === 0) return state
      const previous = state.past[state.past.length - 1]
      return { past: state.past.slice(0, -1), present: previous, future: [state.present, ...state.future] }
    }
    case 'REDO': {
      if (state.future.length === 0) return state
      const [next, ...rest] = state.future
      return { past: [...state.past, state.present], present: next, future: rest }
    }
    default:
      return state
  }
}

function pickRandomId(list) {
  return list[Math.floor(Math.random() * list.length)].id
}

export function randomSelectionFields() {
  return {
    logoStyle: pickRandomId(LOGO_STYLES),
    color: pickRandomId(COLORS),
    typography: pickRandomId(TYPOGRAPHY),
    icon: pickRandomId(ICONS),
    mascot: pickRandomId(MASCOTS),
  }
}

export function usePlayground() {
  const context = useContext(PlaygroundStateContext)
  if (!context) {
    throw new Error('usePlayground must be used within a PlaygroundProvider')
  }
  return context
}
