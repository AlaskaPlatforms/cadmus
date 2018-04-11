import React, { Component } from 'react'

export default props => (
  <div className={`input-field ${props.cols}`}>
    <input 
      id={props.id}
      type={props.type}
      name={props.name}
      readOnly={props.readOnly}
      value={props.value}
      onChange={props.onChange}
      />

    <label
      htmlFor={props.name}>
    {props.label}
    </label>
  </div>
)
