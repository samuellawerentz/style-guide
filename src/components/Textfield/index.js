import React, { useEffect, useState } from 'react'
import { Input, Form } from 'antd'
import { Text } from '../Typography/index'
import PropTypes from 'prop-types'
import './textfield.scss'

export const TEXTFIELD_TYPES = ['input', 'search-box', 'no-shadow']
/**
 * This is used to get text input from the user
 */
export const TextField = React.forwardRef(function TextField(
  {
    type,
    label,
    icon,
    size,
    disabled,
    placeholder,
    readOnly,
    showCount,
    password,
    noShadow,
    textArea,
    className = '',
    ...props
  },
  ref,
) {
  icon = type === 'search-box' ? 'search' : icon
  const Tag = password ? Input.Password : textArea ? Input.TextArea : Input

  return (
    <div className="sg contacto-input-wrapper">
      {label && (
        <div className="contacto-input-label-wrapper">
          <Text type="caption-bold">{label}</Text>
        </div>
      )}
      <Tag
        ref={ref}
        className={[
          'contacto-input',
          'contacto-input--' + type,
          'contacto-input--' + size,
          showCount ? 'show-count' : '',
          noShadow ? 'contacto-input--no-shadow' : '',
          readOnly ? 'contacto-input--readonly' : '',
          className,
        ].join(' ')}
        disabled={readOnly || disabled}
        showCount={showCount}
        placeholder={placeholder}
        {...props}
        prefix={
          icon ? (
            <span className="material-icons-round contacto-icon contacto-icon--input-prefix">
              {icon}
            </span>
          ) : null
        }
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
      className={['sg contacto-form-input', wrapperClassName].join(' ')}
    >
      <TextField {...props} onBlur={validateInput} />
    </Form.Item>
  )
}

TextField.WithValidation = WithValidation

TextField.propTypes = {
  /**
   * This indicates the type of textfield
   */
  type: PropTypes.oneOf(TEXTFIELD_TYPES),
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
   * Enter maximum length input should hold
   */
  maxLength: PropTypes.number,
  /**
   * Set to true, if you don't want count of character on top.
   */
  topCountVisible: PropTypes.bool,
  /**
   * Label for the Input
   */
  label: PropTypes.string,
  /**
   * Material UI icon name taken from https://fonts.google.com/icons
   */
  icon: PropTypes.any,
  /**
   * Disable the textfield
   */
  disabled: PropTypes.bool,
  /**
   * Show the value as readonly
   */
  readOnly: PropTypes.bool,
  /**
   * Set to true, if you don't want the TextArea.
   */
  textArea: PropTypes.bool,
  /**
   * Set to true, if you don't want the shadow.
   */
  noShadow: PropTypes.bool,
  /**
   * Is it a password field?
   */
  password: PropTypes.bool,
  showCount: PropTypes.bool,
}

TextField.defaultProps = {
  size: 'default',
  type: 'input',
}
