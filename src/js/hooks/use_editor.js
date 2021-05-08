import { useEffect, useState, useRef } from 'react'
import Editor from 'js/editor'

export default function useEditor() {
  const [editor, setEditor] = useState()
  const editorRef = useRef()

  useEffect(() => {
    if (!editorRef.current) {
      const e = new Error('Must attach collaborative editor ref on first render')
      console.error(e)
    }

    editorRef.current.innerHTML = ''

    const quill = new Editor(editorRef.current)
    quill.disable()
    setEditor(quill)
  }, [])

  return [editorRef, editor]
}
