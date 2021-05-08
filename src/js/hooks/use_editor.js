import { useEffect, useState, useRef } from 'react'
import Quill from 'quill'

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  ['bold', 'italic', 'underline'],
  [{ color: [] }, { background: [] }],
  [{ script: 'sub' }, { script: 'super' }],
  [{ align: [] }],
  ['image', 'blockquote', 'code-block'],
  ['clean'],
]

export default function useEditor() {
  const [editor, setEditor] = useState()
  const editorRef = useRef()

  useEffect(() => {
    if (!editorRef.current) {
      const e = new Error('Must attach collaborative editor ref on first render')
      console.error(e)
    }

    editorRef.current.innerHTML = ''

    const quill = new Quill(editorRef.current, {
      theme: 'snow',
      modules: { toolbar: TOOLBAR_OPTIONS },
    })
    quill.disable()
    quill.setText('Loading...')

    setEditor(quill)
  }, [])

  return [editorRef, editor]
}
