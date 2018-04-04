
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




import React from 'react'

export default props => (
  <div className='row'>
    <div className='input-field col s6'>
      <input {...props.input}
        value={props.value}
        id={props.id}
        type={props.type}
        className='validate'
        readOnly={props.readOnly}
        placeholder={props.placeholder}
        />

      <label {...props.label}
        className={props.value ? 'active' : ''}
        for={props.for}>
      {props.caption}
      </label>
    </div>
  </div>
)