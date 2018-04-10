import React from 'react'

export default props => (
  <div className={`input-field ${props.cols}`}>
    <input {...props.input}
      id={props.id}
      type={props.type}
      className='validate'
      name={props.name}
      readOnly={props.readOnly}
      value={props.value}
      />

    <label {...props.label}
      htmlFor={props.name}>
    {props.name}
    </label>
  </div>
)