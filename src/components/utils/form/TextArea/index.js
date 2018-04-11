import React from 'react'

export default props => (
  <div className={`input-field ${props.cols}`}>
    <textarea {...props.textarea}
      id={props.id}
      type={props.type}
      name={props.name}
      readOnly={props.readOnly}
      value={props.value}
      onChange={props.onChange}
      >
    </textarea>  

    <label {...props.label}
      htmlFor={props.name}>
    {props.label}
    </label>
  </div>
)