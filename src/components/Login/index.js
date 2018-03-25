import React, { Component } from 'react'
import  { Form, InputContainer, FormHeader } from './styles'

export default class Login extends Component {
  render() {
    return (
      <Form>
        <FormHeader><i className="valign-wrapper material-icons left">lock</i>Login</FormHeader>
        <InputContainer>
          <input type="text" placeholder="E-mail ou nome de usuário"/>
          <input type="password" placeholder="Senha"/>
          <button className="btn waves-effect waves-light blue darken-4">Entrar</button>
        </InputContainer>
      </Form> 
    )
  }
}