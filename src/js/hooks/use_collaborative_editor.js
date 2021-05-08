import useSocket from './use_socket'
import useEditor from './use_editor'
import useDocument from './use_document'

export default function useCollaborativeEditor(documentId) {

  // Connect/disconnect from socket with component mount/unmount
  const socket = useSocket('http://localhost:3001')

  const [ref, editor] = useEditor()

  // Once socket and editor exist, load the document
  useDocument({ documentId, socket, editor })

  return [ref, editor]
}
