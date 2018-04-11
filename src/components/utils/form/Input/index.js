import React, { Component } from 'react'

export default props => (
  <div className={`input-field ${props.cols}`}>
    <input {...props.input}
      id={props.id}
      type={props.type}
      className='validate'
      name={props.name}
      readOnly={props.readOnly}
      value={props.value}
      onChange={props.onChange}
      />

    <label {...props.label}
      htmlFor={props.name}>
    {props.label}
    </label>
  </div>
)
