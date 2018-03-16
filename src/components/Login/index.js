import React, { Component } from 'react'
import styled from 'styled-components'

const Form = styled.div`
  background-color: #f5f5f5;
  max-width: 290px;
  margin: 150px auto 50px;
  border-radius: 3px;
  box-sizing: border-box;
  transform-origin: center bottom;
  border-radius: 5px;
`
const InputContainer = styled.div`
  padding: 15px;
  display: inline-block;
`
const FormHeader  = styled.div`
  background-color: #0d47a1;
  padding: 15px;
  width: 100%;
  color: #fff;
`

export default class Login extends Component {
  render() {
    return (
      <Form>
        <FormHeader><i className="valign-wrapper material-icons left">lock</i>Login</FormHeader>
        <InputContainer>
          <input type="text" placeholder="E-mail ou usuário"/>
          <input type="password" placeholder="Senha"/>
          <button className="btn waves-effect waves-light blue darken-4">Entrar</button>
        </InputContainer>
      </Form> 
    )
  }
}