import useDocumentLoad from './use_document_load'
import useDocumentChangesFromServer from './use_document_changes_from_server'
import useDocumentChangesFromUser from './use_document_changes_from_user'

export default function useDocument(opts = {}) {
  const {
    documentId,
    socket,
    editor,
  } = opts

  useDocumentLoad({ documentId, socket, editor })
  useDocumentChangesFromServer({ socket, editor })
  useDocumentChangesFromUser({ socket, editor })
}
