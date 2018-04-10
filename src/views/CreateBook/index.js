import React, { Component } from 'react'
import Input from '@utils/form/Input'
import { Form, Header, Container, ButtonContainer } from './styles'

class CreateBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      genres: '',
      description: ''
    }
  }
  
  handleChangeTitle = (event) => {
    const { value } = event.target
    this.setState({ title: value })
  }

  handleChangeGenre = (event) => {
    const { value } = event.target
    this.setState({ genres: value })
  }

  handleChangeDescription = (event) => {
    const { value } = event.target
    this.setState({ description: value })
  }

  renderInputs() {
    const { title, genres, description } = this.state
    return (
      <Form>
        <div className="row">
          <div className="col s12 l8 input-field">
            <input type="text" placeholder="Titulo" value={title} onChange={ this.handleChangeTitle }/>
          </div>
          <div className="col s12 l4 input-field">
            <input type="text" placeholder="Generos" value={ genres } onChange={ this.handleChangeGenre }/>
          </div>
        </div>
        <div className="row">
          <div className="col s12 input-field">
            <textarea className="materialize-textarea"
              type="text" 
              placeholder="Descrição"
              value={ description }
              onChange={ this.handleChangeDescription }
            ></textarea>
          </div>
        </div>
        <ButtonContainer>
          <button className="btn right">Salvar</button>
          <button className="btn right ">Cancelar</button>
        </ButtonContainer>
      </Form>
    )
  }

  render() {
    return (
      <Container className="container blue-grey lighten-5">
        <Header className="left-align flow-text blue darken-4">Novo livro</Header>
        {this.renderInputs()}
      </Container>
    )
  }
}
export default CreateBook