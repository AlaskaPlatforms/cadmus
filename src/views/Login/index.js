import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { Creators } from '@redux/actions'

import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import {
  FormLabel,
  FormControl,
  FormGroup,
} from 'material-ui/Form'
import Logo from '@utils/icons/Logo'
import LogoFull from '@utils/icons/LogoFull'

import COLORS from '@assets/theme/colors'
import {
  Container,
  InnerContainer,
  LogoContainer,
  LogoLetter,
  FormRelativeContainer,
  LoginFormContainer,
  RegisterFormContainer
} from './styles'
import './styles.scss'

const { BACKGROUND } = COLORS

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isFormActive: true,
      email: '',
      password: '',
      newEmail: '',
      newUser: '',
      newPassword: ''
    }
    this.handleFormsExchange = this.handleFormsExchange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange ({ target: { value, name }}) {
    this.setState(state => ({
      ...state,
      [name]: value
    }))
  }

  handleFormsExchange () {
    this.setState(state => ({
      ...state,
      isFormActive: !state.isFormActive
    }))
  }

  render () {
    const { isFormActive } = this.state
    return (
      <Container>
        <Logo classes='md-logo-login-outter' />
        <InnerContainer>
          <LogoContainer>
            <Logo classes='md-logo-login-inner' />
            <div className='md-logo-name'>
              <LogoLetter>C</LogoLetter>
              <LogoLetter>A</LogoLetter>
              <LogoLetter>D</LogoLetter>
              <LogoLetter>M</LogoLetter>
              <LogoLetter>U</LogoLetter>
              <LogoLetter>S</LogoLetter>
            </div>
          </LogoContainer>
          <FormRelativeContainer>
            <LoginFormContainer className={ isFormActive ? 'l-active-login-form' : 'l-inactive-login-form' }>
              <FormControl fullWidth>
                <LogoFull classes='md-logo-login-form' />
                <FormLabel className='md-login-label'>Login</FormLabel>
                <FormGroup>
                  <TextField fullWidth label='Email' margin='dense' name='email' onChange={ this.handleInputChange } />
                  <TextField fullWidth label='Senha' type='password' name='password' onChange={ this.handleInputChange } margin='dense' />
                  <Button className='md-button-raised' variant='raised' onClick={ () => this.props.attemptAuth(this.state.email, this.state.password) }>Entrar</Button>
                  <Button className='md-button' onClick={ this.handleFormsExchange }>Registrar</Button>
                </FormGroup>
              </FormControl>
            </LoginFormContainer>

            <RegisterFormContainer className={ isFormActive ? 'l-inactive-register-form' : 'l-active-register-form' }>
              <FormControl fullWidth>
                <LogoFull classes='md-logo-login-form' />
                <FormLabel className='md-login-label'>Registrar</FormLabel>
                <FormGroup>
                  <TextField fullWidth label='Email' margin='dense' name='newEmail' onChange={ this.handleInputChange } />
                  <TextField fullWidth label='Usuário' margin='dense' name='newUser' onChange={ this.handleInputChange } />
                  <TextField fullWidth label='Senha' type='password' name='newPassword' onChange={ this.handleInputChange } margin='dense' />
                  <Button className='md-button-raised' variant='raised' onClick={
                    () => this.props.attemptRegister(this.state.newEmail, this.state.newUser, this.state.newPassword)
                  }>
                    Criar conta
                  </Button>
                  <Button className='md-button' onClick={ this.handleFormsExchange }>Entrar</Button>
                </FormGroup>
              </FormControl>
            </RegisterFormContainer>
          </FormRelativeContainer>
        </InnerContainer>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  attemptAuth: (email, password) => dispatch(Creators.authRequest(email, password)),
  attemptRegister: (email, username, password) => dispatch(Creators.userRegisterRequest(email, username, password))
})

export default withRouter(connect(null, mapDispatchToProps)(Login))
