import { useEffect } from 'react'

export default function useDocumentChangesFromServer(opts = {}) {
  const {
    socket,
    editor,
  } = opts

  useEffect(() => {
    if (!socket || !editor) return

    const handler = delta => {
      editor.updateContents(delta)
    }
    socket.on('receive-changes', handler)

    return () => {
      socket.off('receive-changes', handler)
    }
  }, [socket, editor])
}
