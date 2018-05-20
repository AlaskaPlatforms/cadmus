import React from 'react'

import logo from '@assets/img/logo-full.png'
import './styles.scss'

const LogoFull = props => (
  <div className={ props.classes }>
    <img
      src={ logo }
      alt="Cadmus Logo"
    />
  </div>
)

export default LogoFull
