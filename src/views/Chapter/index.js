import React, { Component } from 'react'
import { Container, Header, InnerContainer } from './styles'
import { Editor, EditorState, RichUtils } from 'draft-js'
import Button from 'material-ui/Button'

class Chapter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty()
    }
  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  onBoldClick = (mode) => {
    switch (mode) {
      case 'BOLD':
        this.handleChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
        break
      case 'UNDERLINE':
        this.handleChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'))
        break
      case 'ITALIC':
        this.handleChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
        break
      case 'CODE':
        this.handleChange(RichUtils.toggleInlineStyle(this.state.editorState, 'CODE'))
        break
      case 'BLOCKQUOTE':
        this.handleChange(RichUtils.toggleBlockType(this.state.editorState, 'blockquote'))
        break
    }

  }

  _renderButton = (icon, mode) => (
    <Button size='small' color='primary' onClick={ () => this.onBoldClick(mode) }>
      <i class="material-icons">{icon}</i>
    </Button>
  )

  _renderEditorButtons = () => (
    <div>
      {this._renderButton('format_bold', 'BOLD')}
      {this._renderButton('format_underlined', 'UNDERLINE')}
      {this._renderButton('format_italic', 'ITALIC')}
      {this._renderButton('code', 'CODE')}
      {this._renderButton('format_quote', 'BLOCKQUOTE')}
    </div>
  )

  render () {
    return (
      <Container>
        <Header>Escrevendo capítulo...</Header>
        <InnerContainer>
          {this._renderEditorButtons()}
          <Editor
            editorState={ this.state.editorState }
            onChange={ this.handleChange }
            placeholder="Comece a escrever..."
            spellCheck={true}
          />
        </InnerContainer>
      </Container>
    )
  }
}
export default Chapter