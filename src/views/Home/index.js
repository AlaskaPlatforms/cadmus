import React, { Component } from 'react'

import 
  { Main, 
    Header, 
    HeaderNav, 
    HeaderHero, 
    HeaderCurve, 
    HeaderContainer,
    HeaderMenu, 
    HeaderLogo, 
    LinkButton,
    CadmusMessage,
    CadmusMessageImg,
    Footer,
    FooterNav,
    FooterCopyright,
    FooterMenu,
    LinkButtonFixedFooter,
    ButtonLargeWhite,
    ButtonLargeBlue
  } from './styles'

import './styles.css'

export default class Home extends Component {
  clound() {
    return (
      <path d="M-5 100 Q 0 20 5 100 Z
        M0 100 Q 5 0 10 100
        M5 100 Q 10 30 15 100
        M10 100 Q 15 10 20 100
        M15 100 Q 20 30 25 100
        M20 100 Q 25 -10 30 100
        M25 100 Q 30 10 35 100
        M30 100 Q 35 30 40 100
        M35 100 Q 40 10 45 100
        M40 100 Q 45 50 50 100
        M45 100 Q 50 20 55 100
        M50 100 Q 55 40 60 100
        M55 100 Q 60 60 65 100
        M60 100 Q 65 50 70 100
        M65 100 Q 70 20 75 100
        M70 100 Q 75 45 80 100
        M75 100 Q 80 30 85 100
        M80 100 Q 85 20 90 100
        M85 100 Q 90 50 95 100
        M90 100 Q 95 25 100 100
        M95 100 Q 100 15 105 100 Z">
      </path>            
    )
  }

  loginClick() {
    return (
      this.props.history.push('login')
    )
  }

  hero() {
    return (
      <div>
        <h1>Seja um escritor!</h1>
        <h2>
          <span>
            CADMUS é a maneira mais fácil de publicar suas obras<br/>
          </span>
          <span>
            e descobrir novas obras!
          </span>
        </h2>
        <div>
          <ButtonLargeWhite role="button">Leitor</ButtonLargeWhite>
          <ButtonLargeBlue role="button" onClick = {() => this.loginClick()}>Escritor</ButtonLargeBlue>
        </div>      
      </div>
    )
  }
  
  message() {
    return (
      <div>
        <h1>Suas obras em um único lugar</h1>
        <h2>
          <span>
            Crie novas obras.<br/>
          </span>
          <span>
            Descubra novas obras.<br/>
          </span>
        </h2>      
      </div>
    )
  }

  render() {
    return (
      <Main>
        <Header>
          <HeaderNav>
            <HeaderContainer>
              <HeaderLogo src='https://raw.githubusercontent.com/AlaskaPlatforms/cadmus/feature/login/src/assets/img/logo.png' alt='cadmus.com logo' />
              <HeaderMenu>
                <LinkButton href="#"></LinkButton>
              </HeaderMenu>
            </HeaderContainer>
          </HeaderNav>  
          <HeaderHero>
            { this.hero() }
          </HeaderHero>
          <HeaderCurve viewBox="0 0 100 100" preserveAspectRatio="none" role="presentation" aria-hidden="true">
            { this.clound() }
          </HeaderCurve>
        </Header>
        <CadmusMessage>
          { this.message() }
          <CadmusMessageImg src='https://raw.githubusercontent.com/AlaskaPlatforms/cadmus/feature/login/src/assets/img/logo-full.png' alt="pagina da web que mostra como publicar obras" />
        </CadmusMessage>
        <Footer>
          <FooterNav>
            <HeaderContainer>
              <FooterCopyright>© 2018 TADS</FooterCopyright>
              <FooterMenu>
                <LinkButtonFixedFooter role="link" href="#">Termos de uso</LinkButtonFixedFooter>
                <LinkButtonFixedFooter role="link" href="#">Privacidade</LinkButtonFixedFooter>
              </FooterMenu>
            </HeaderContainer>
          </FooterNav>
        </Footer>
      </Main>
    )
  }
}