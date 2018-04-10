import React, { Component } from 'react'

class Input extends Component {
  render() {
    const { placeholder, type, readOnly, input } = this.props
    return (
      <div className="input-field">
        <label htmlFor={placeholder}>{placeholder}</label>
        <input {...input}
          name={placeholder}
          readOnly={readOnly}
          type={type} />
      </div>
    )
  }
}
export default Input