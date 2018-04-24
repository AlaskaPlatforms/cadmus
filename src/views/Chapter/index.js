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

  _onBoldClick = () => {
    this.handleChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  render () {
    return (
      <Container>
        <Header>Escrevendo capítulo...</Header>
        <InnerContainer>
          <Button color='primary' onClick={ this._onBoldClick }>Bold</Button>
          <Editor editorState={ this.state.editorState } onChange={ this.handleChange } />
        </InnerContainer>
      </Container>
    )
  }
}
export default Chapter