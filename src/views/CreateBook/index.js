import React, { Component } from 'react'
import Input from '@utils/form/Input'g
import { Form, Header, Container, ButtonContainer, Button } from './styles'

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
          <Input cols='col s12 l8' label='Titulo' name='title' type="text" value={ title } onChange={ this.handleChangeTitle }/>
          <Input cols='col s12 l4' label='Gênero' name='genre' type="text" value={ genres } onChange={ this.handleChangeGenre }/>
        </div>
        <div className="row">
          <div className="col s12 input-field">
            <textarea className="materialize-textarea"
              type="text" 
              name='description'
              value={ description }
              onChange={ this.handleChangeDescription }
            ></textarea>
            <label htmlFor='description'>Descrição</label>
          </div>
        </div>
        <ButtonContainer>
          <Button className="btn right blue darken-4">Salvar</Button>
          <Button style={{color: '#0d47a1'}}className="btn-flat right transparent">Cancelar</Button>
        </ButtonContainer>
      </Form>
    )
  }

  render() {
    return (
      <Container className="blue-grey lighten-5">
        <Header className="left-align flow-text blue darken-4">Novo livro</Header>
        {this.renderInputs()}
      </Container>
    )
  }
}
export default CreateBook