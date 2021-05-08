import { useEffect } from 'react'

export default function useDocumentChangesFromUser(opts = {}) {
  const {
    socket,
    editor,
  } = opts

  useEffect(() => {
    if (!socket || !editor) return

    const handler = (delta, oldDelta, source) => {
      if (source !== 'user') return
      socket.emit('send-changes', delta)
    }
    editor.on('text-change', handler)

    return () => {
      editor.off('text-change', handler)
    }
  }, [socket, editor])
}
