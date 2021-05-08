import Quill from 'quill'

const Inline = Quill.import('blots/inline')

class ItalicBlot extends Inline { }
ItalicBlot.blotName = 'italic'
ItalicBlot.tagName = 'em'

export default ItalicBlot
