import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Editor from 'js/editor'

const Button = styled.button`
  background-color: transparent;
  color: ${props => props.active ? '#21b384' : '#2c2c2c'};
  border: none;
`

const Container = styled.div`
  background-color: #ccc;
  border-radius: 4px;
  padding: 5px 10px;
  position: sticky;
  top: 0;
`

function TextControls(props) {
  const {
    editor,
  } = props

  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)

  const bold = () => {
    editor.format('bold', !isBold, Editor.sources.USER)
    setIsBold(!isBold)
  }
  const italic = () => {
    editor.format('italic', !isItalic, Editor.sources.USER)
    setIsItalic(!isItalic)
  }

  editor.on('selection-change', () => {
    const formats = editor.getFormat()
    setIsBold(formats.bold === true)
    setIsItalic(formats.italic === true)
  })

  return (
    <Container>
      <Button onClick={bold} active={isBold}>Bold</Button>
      <Button onClick={italic} active={isItalic}>Italic</Button>
      <Button>Link</Button>
      <Button>Quote</Button>
      <Button>H<sub>1</sub></Button>
      <Button>H<sub>2</sub></Button>
    </Container>
  )
}

TextControls.propTypes = {
  editor: PropTypes.object,
}

TextControls.defaultProps = {}

export default TextControls
