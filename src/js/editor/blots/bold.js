import Quill from 'quill'

const Inline = Quill.import('blots/inline')

class BoldBlot extends Inline { }
BoldBlot.blotName = 'bold'
BoldBlot.tagName = 'strong'

export default BoldBlot
