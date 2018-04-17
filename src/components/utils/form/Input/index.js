import React, { Component } from 'react'

const Input = props => (
  <div className={`input-field ${props.cols}`}>
    <label
      htmlFor={ props.name }>
      { props.label }
    </label>

    <input
      id={ props.id }
      type={ props.type }
      name={ props.name }
      readOnly={ props.readOnly }
      value={ props.value }
      onChange={ props.onChange }
    />
  </div>
)

export default Input
