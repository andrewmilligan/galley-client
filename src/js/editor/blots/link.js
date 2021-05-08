import Quill from 'quill'

const Inline = Quill.import('blots/inline')

class LinkBlot extends Inline {
  static create(url) {
    const node = super.create()
    node.setAttribute('href', url)
    return node
  }

  static formats(node) {
    return node.getAttribute('href')
  }
}
LinkBlot.blotName = 'link'
LinkBlot.tagName = 'a'

export default LinkBlot
