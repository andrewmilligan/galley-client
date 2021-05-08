import React from 'react'
import { useParams } from 'react-router-dom'
import 'quill/dist/quill.snow.css'
import useCollaborativeEditor from 'js/hooks/use_collaborative_editor'

function Editor() {
  const { id: documentId } = useParams()

  const ref = useCollaborativeEditor(documentId)

  return (
    <div className='container'>
      <div ref={ref} />
    </div>
  )
}

Editor.propTypes = {}

Editor.defaultProps = {}

export default Editor
