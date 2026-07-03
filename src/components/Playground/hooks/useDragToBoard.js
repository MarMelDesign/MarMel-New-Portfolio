import { useCallback } from 'react'
import { usePlayground } from '../usePlaygroundStore'

export function useDragToBoard(field, onSelect) {
  const { boardRef, notifyArrival } = usePlayground()

  const handleDragEnd = useCallback(
    (_event, info) => {
      const board = boardRef?.current
      if (!board) return
      const rect = board.getBoundingClientRect()
      const { x, y } = info.point
      const droppedOnBoard = x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
      if (droppedOnBoard) {
        onSelect?.()
        notifyArrival(field)
      }
    },
    [boardRef, field, notifyArrival, onSelect],
  )

  return handleDragEnd
}
