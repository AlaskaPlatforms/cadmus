import React, { Component } from 'react'

import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import Logo from '@utils/icons/Logo'

import './styles.scss'

import { Container, InnerContainer, LogoContainer, LogoLetter, LoginFormContainer } from './styles'

class Login extends Component {
  render () {
    return (
      <Container>
        <Logo classes='md-logo-login-outter' />
        <InnerContainer>
          <LogoContainer>
            <Logo classes='md-logo-login-inner' />
            <div className='logo-name'>
              <LogoLetter>C</LogoLetter>
              <LogoLetter>A</LogoLetter>
              <LogoLetter>D</LogoLetter>
              <LogoLetter>M</LogoLetter>
              <LogoLetter>U</LogoLetter>
              <LogoLetter>S</LogoLetter>
            </div>
          </LogoContainer>
          <LoginFormContainer>

          </LoginFormContainer>
        </InnerContainer>
      </Container>
    )
  }
}

export default Login
