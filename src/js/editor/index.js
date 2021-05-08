import Quill from 'quill'

import BoldBlot from './blots/bold'
import ItalicBlot from './blots/italic'
import LinkBlot from './blots/link'
import BlockquoteBlot from './blots/blockquote'
import HeaderBlot from './blots/header'
import DividerBlot from './blots/divider'
import ImageBlot from './blots/image'

Quill.register(BoldBlot)
Quill.register(ItalicBlot)
Quill.register(LinkBlot)
Quill.register(BlockquoteBlot)
Quill.register(HeaderBlot)
Quill.register(DividerBlot)
Quill.register(ImageBlot)

export default Quill
