
/*import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DefaultInput = styled.input`
  
`

const ErrorInput = styled.input`
  border-bottom: 1px solid red !important;
  box-shadow: 0 1px 0 0 red !important
`

const ErrorLabel = styled.span`
  color: red
`

export default class TextInput extends Component {
  static propTypes = {
    classes: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    leftIcon: PropTypes.string,
    error: PropTypes.string,
    false: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onClick: PropTypes.func
  }

  static defaultProps = {
    classes: null,
    name: null,
    label: null,
    disabled: false,
    placeholder: null,
    leftIcon: null,
    error: null,
    onChange: () => null,
    onBlur: () => null,
    onFocus: () => null,
    onClick: () => null
  }

  render () {
    const {
      name,
      label,
      leftIcon,
      classes,
      error,
      ...rest
    } = this.props
    const Input = error ? ErrorInput : DefaultInput
    return (
      <div className='input-field'>
        {leftIcon && <i className='material-icons prefix'>{leftIcon}</i>}
        {label && <label className={rest.value ? 'active': ''} htmlFor={name}>{label}</label>}
        <Input
          {...rest}
          className={classes}
          type='text'
        />
        {error && <ErrorLabel>{error}</ErrorLabel>}
      </div>
    )
  }
}
*/

/*
import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <div className='row'>
        <div className='input-field col s6'>
          <input {...this.props.input}
            name={this.props.name}
            value={this.props.value}
            id={this.props.id}
            type={this.props.type}
            className='validate'
            readOnly={this.props.readOnly}
            placeholder={this.props.placeholder}
            />

          <label {...this.props.label}
            htmlFor={this.props.name}>
          {this.props.placeholder}
          </label>
        </div>
      </div>
    )
  }
}
*/

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