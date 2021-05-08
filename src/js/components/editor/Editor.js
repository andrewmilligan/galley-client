import React from 'react'
import { useParams } from 'react-router-dom'
import useCollaborativeEditor from 'js/hooks/use_collaborative_editor'
import TextControls from './TextControls'

function Editor() {
  const { id: documentId } = useParams()

  const [ref, editor] = useCollaborativeEditor(documentId)

  return (
    <div className='container'>
      {editor && <TextControls editor={editor} />}
      <div ref={ref} />
    </div>
  )
}

Editor.propTypes = {}

Editor.defaultProps = {}

export default Editor
