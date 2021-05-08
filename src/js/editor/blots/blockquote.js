import Quill from 'quill'

const Block = Quill.import('blots/block')

class BlockquoteBlot extends Block { }
BlockquoteBlot.blotName = 'blockquote'
BlockquoteBlot.tagName = 'blockquote'

export default BlockquoteBlot
