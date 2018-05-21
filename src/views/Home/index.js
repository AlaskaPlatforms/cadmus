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

  headerHero() {
    return (
      <div className='headerHero'>
        <h1>Seja um escritor!</h1>
        <h2>
          <span>
            Cadmus é a maneira mais fácil de publicar suas obras!
          <br/>
          </span>
          <span>
            Descubra novas obras!
          </span>
        </h2>
        <div>
          <a class="buttonLargeWhite" role="link" href="#">Leitor</a>        
          <div class="buttonLargeBlue" tabindex="0" role="button">Escritor</div>  
        </div>
      </div>
    )
  }

  headerMenu() {
    return (
      <div className='headerMenu'>
        <a class="linkButton" href="#">Criar uma conta</a>      
      </div>
    )
  }

  headerContainer() {
    return (
      <div className='headerContainer'>
        <img className='headerLogo' src='' alt='cadmus.com logo'/>   
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
        <img class="cadmusMessageImg" src="" alt="pagina da web que mostra como publicar obras"/>
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
            <a class="linkButtonFixedFooter" role="link" href="#">Privacidade &amp; Cookies</a>
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
};

export default Home;