import React, { Component } from 'react'

import Logo from '@components/utils/icons/Logo'

import './styles.scss'

import { Container, InnerContainer, LogoContainer, LogoName, LogoLetter } from './styles'

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
        </InnerContainer>
      </Container>
    )
  }
}

export default Login
