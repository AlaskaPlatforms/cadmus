import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

class Home extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      auth: true
    }    
  }

  svgClound() {
    return (
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" id="headerCurve" role="presentation" aria-hidden="true">        
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
      </svg>
    )
  }

  headerHero() {
    //<a class="buttonLargeWhite" role="link" href="#">Leitor</a>
    return (
      <div className='headerHero'>
        <h1>Seja um escritor!</h1>
        <h2>
          <span>
            CADMUS é a maneira mais fácil de publicar suas obras
          <br/>
          </span>
          <span>
            e descobrir novas obras!
          </span>
        </h2>
        <div>
          <div class="buttonLargeWhite" tabindex="0" role="button">Leitor</div>  
          <div class="buttonLargeBlue" tabindex="1" role="button">Escritor</div>  
        </div>
      </div>
    )
  }

  headerMenu() {
    return (
      <div className='headerMenu'>
        <a class="linkButton" href="#">Login</a>      
      </div>
    )
  }

  headerContainer() {
    return (
      <div className='headerContainer'>
        <img className='headerLogo' src='https://raw.githubusercontent.com/AlaskaPlatforms/cadmus/feature/login/src/assets/img/logo.png' alt='cadmus.com logo'/>   
        { this.headerMenu() }   
      </div>
    )
  }  

  headerNav() {
    return (
      <div className='headerNav clearfix'>
        { this.headerContainer() }
      </div>
    )
  }  

  header() {
    return (
      <div className='header'>
        { this.headerNav() }
        { this.headerHero() }
        { this.svgClound() }
      </div>
    )
  }

  cadmusMessage() {
    return (
      <div className='cadmusMessage'>
        <h1>Suas obras em um único lugar</h1>
        <h2>
          <span>
            Crie novas obras.
            <br/>
          </span>
          <span>
            Descubra novas obras.
            <br/>
          </span>
        </h2>
        <img class="cadmusMessageImg" src='https://raw.githubusercontent.com/AlaskaPlatforms/cadmus/feature/login/src/assets/img/logo-full.png' alt="pagina da web que mostra como publicar obras"/>
      </div>  
    )
  }

  footerNav() {
    return (
      <div className='footerNav clearfix'>
        <div className='headerContainer'>
          <div className='footerCopyright'>© 2018 TADS</div>
          <div className='footerMenu'>
            <a class="linkButtonFixedFooter" role="link" href="#">Termos de uso</a>            
            <a class="linkButtonFixedFooter" role="link" href="#">Privacidade</a>
          </div>
        </div>
      </div>
    )
  }
  
  footer() {
    return (
      <div className='footer'>
        { this.footerNav() }  
      </div>
    )
  }

  mainDiv() {
    return (
      <div className='mainDiv'>
        { this.header() }
        { this.cadmusMessage() }
        { this.footer() }
      </div>
    )
  }   

  render() {
    return (
      this.mainDiv()
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default Home