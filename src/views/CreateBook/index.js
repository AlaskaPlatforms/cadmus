import React, { Component } from 'react'
import Input from '@utils/form/Input'
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
  
  handleChangeTitle = ({ target }) => {
    const { value } = target
    this.setState({ title: value })
  }

  handleChangeGenre = ({ target }) => {
    const { value } = target
    this.setState({ genres: value })
  }

  handleChangeDescription = ({ target }) => {
    const { value } = target
    this.setState({ description: value })
  }

  renderInputs() {
    const { title, genres, description } = this.state
    return (
      <Form>
        <div className="row">
          <div className="col s12 l8 input-field">
            <input type="text" placeholder="Titulo" value={ title } onChange={ this.handleChangeTitle }/>
          </div>
          <div className="col s12 l4 input-field">
            <select>
              <option value="">zika</option>
            </select>
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
          <Button className="btn right blue darken-4">Salvar</Button>
          <Button style={{ color: '#0d47a1' }} className="btn-flat right transparent">Cancelar</Button>
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