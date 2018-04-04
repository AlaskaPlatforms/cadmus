import React, { Component } from 'react'
import Input from '@utils/form/Input'
import { Form, Header, Container } from './styles'

class CreateBook extends Component {

  renderInputs() {
    return (
      <Form>
        <div className="row">
          <div className="col s12 l8 input-field">
            <input type="text" placeholder="Titulo"/>
          </div>
          <div className="col s12 l4 input-field">
            <input type="text" placeholder="Generos"/>
          </div>
        </div>
        <div className="row">
          <div className="col s12 input-field">
            <textarea class="materialize-textarea" type="text" placeholder="Descrição"></textarea>
          </div>
        </div>
      </Form>
    )
  }

  render() {
    return (
      <Container className="container white">
        <Header className="left-align flow-text blue darken-4">Novo livro</Header>
        {this.renderInputs()}
      </Container>
    )
  }
}
export default CreateBook