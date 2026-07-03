import { useCallback, useEffect, useReducer, useState } from 'react'
import {
  MUTE_STORAGE_KEY,
  PlaygroundStateContext,
  historyInitial,
  historyReducer,
  randomSelectionFields,
} from './usePlaygroundStore'

export function PlaygroundProvider({ children, playSound, boardRef }) {
  const [history, dispatch] = useReducer(historyReducer, historyInitial)
  const [muted, setMuted] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.localStorage.getItem(MUTE_STORAGE_KEY) === 'true'
  })
  const [lastArrival, setLastArrival] = useState(null)

  useEffect(() => {
    window.localStorage.setItem(MUTE_STORAGE_KEY, String(muted))
  }, [muted])

  const play = useCallback(
    (type) => {
      if (!muted) playSound?.(type)
    },
    [muted, playSound],
  )

  const selectLogoStyle = useCallback(
    (id) => {
      dispatch({ type: 'SET_FIELDS', payload: { logoStyle: id } })
      play('select')
    },
    [play],
  )

  const selectColor = useCallback(
    (id) => {
      dispatch({ type: 'SET_FIELDS', payload: { color: id } })
      play('select')
    },
    [play],
  )

  const selectTypography = useCallback(
    (id) => {
      dispatch({ type: 'SET_FIELDS', payload: { typography: id } })
      play('select')
    },
    [play],
  )

  const selectIcon = useCallback(
    (id) => {
      dispatch({ type: 'SET_FIELDS', payload: { icon: id } })
      play('select')
    },
    [play],
  )

  const selectMascot = useCallback(
    (id) => {
      dispatch({ type: 'SET_FIELDS', payload: { mascot: id } })
      play('select')
    },
    [play],
  )

  const shuffle = useCallback(() => {
    dispatch({ type: 'SET_FIELDS', payload: randomSelectionFields() })
    play('select')
  }, [play])

  const reset = useCallback(() => {
    dispatch({ type: 'RESET' })
    play('select')
  }, [play])

  const undo = useCallback(() => {
    dispatch({ type: 'UNDO' })
    play('select')
  }, [play])

  const redo = useCallback(() => {
    dispatch({ type: 'REDO' })
    play('select')
  }, [play])

  const updateName = useCallback((name) => {
    dispatch({ type: 'SET_FIELDS', payload: { name } })
  }, [])

  const updateDescription = useCallback((description) => {
    dispatch({ type: 'SET_FIELDS', payload: { description } })
  }, [])

  const toggleMute = useCallback(() => setMuted((current) => !current), [])

  const notifyArrival = useCallback(
    (field) => {
      setLastArrival({ field, nonce: Date.now() + Math.random() })
      play('drop')
    },
    [play],
  )

  const value = {
    present: history.present,
    canUndo: history.past.length > 0,
    canRedo: history.future.length > 0,
    muted,
    toggleMute,
    play,
    selectLogoStyle,
    selectColor,
    selectTypography,
    selectIcon,
    selectMascot,
    updateName,
    updateDescription,
    shuffle,
    reset,
    undo,
    redo,
    boardRef,
    lastArrival,
    notifyArrival,
  }

  return <PlaygroundStateContext.Provider value={value}>{children}</PlaygroundStateContext.Provider>
}
