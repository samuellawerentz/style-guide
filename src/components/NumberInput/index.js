import React, { useEffect, useState } from 'react'
import { InputNumber as AntNumberInput, Form } from 'antd'
import { Text } from '../Typography/index'
import PropTypes from 'prop-types'
import './numberInput.scss'

/**
 * This is used to get number input from the user
 */
export const NumberInput = React.forwardRef(function NumberInput(
  { label, size, disabled, placeholder, readOnly, noShadow, showCount, className = '', ...props },
  ref,
) {
  return (
    <div className="sg contacto-number-input-wrapper">
      {label && (
        <div className="contacto-number-input-label-wrapper">
          <Text type="caption-bold">{label}</Text>
        </div>
      )}
      <AntNumberInput
        ref={ref}
        className={[
          'contacto-number-input',
          'contacto-number-input--input',
          showCount ? 'show-count' : '',
          'contacto-number-input--' + size,
          noShadow ? 'contacto-number-input--no-shadow' : '',
          readOnly ? 'contacto-number-input--readonly' : '',
          className,
        ].join(' ')}
        disabled={readOnly || disabled}
        placeholder={placeholder}
        showCount={(count, maxLength) => {
          console.log('count :>> ', count)
        }}
        {...props}
      />
    </div>
  )
})

const WithValidation = ({ wrapperClassName, errorMessage, validateFunction, ...props }) => {
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => setErrorMsg(''), [props.value, props.disabled])

  const validateInput = () => {
    if (!validateFunction?.(props.value, props.key)) setErrorMsg(errorMessage)
  }

  return (
    <Form.Item
      validateStatus={errorMsg && 'error'}
      help={errorMsg}
      className={['sg contacto-form-number-input', wrapperClassName].join(' ')}
    >
      <NumberInput {...props} onBlur={validateInput} />
    </Form.Item>
  )
}

NumberInput.WithValidation = WithValidation

NumberInput.propTypes = {
  /**
   * This indicates the type of textfield
   */
  className: PropTypes.string,
  /**
   * How large should the textfield be?
   */
  size: PropTypes.oneOf(['small', 'default', 'large']),
  /**
   * Placeholder Text
   */
  placeholder: PropTypes.string,
  /**
   * Label for the Input
   */
  label: PropTypes.string,
  /**
   * Disable the textfield
   */
  disabled: PropTypes.bool,
  /**
   * Show the value as readonly
   */
  readOnly: PropTypes.bool,
  /**
   * Set to true, if you don't want the shadow.
   */
  noShadow: PropTypes.bool,
  /**
   * Set to true, if you don't want to Show Count.
   */
  showCount: PropTypes.bool,
}
