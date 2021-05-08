import { useEffect } from 'react'

export default function useDocumentLoad(opts = {}) {
  const {
    documentId,
    socket,
    editor,
  } = opts

  useEffect(() => {
    if (!socket || !editor) return

    socket.once('load-document', doc => {
      console.log('Document loaded', doc)
      editor.setContents(doc)
      editor.enable()
    })

    socket.emit('get-document', documentId)
  }, [socket, editor, documentId])
}
