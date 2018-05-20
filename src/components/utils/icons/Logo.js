import React from 'react'

import logo from '@assets/img/logo.png'
import './styles.scss'

const Logo = props => (
  <div className={ props.classes }>
    <img
      src={ logo }
      alt="Cadmus Logo"
    />
  </div>
)

export default Logo
