import React, { useEffect, useState } from 'react'
import { Input, Form } from 'antd'
import { Text } from '../Typography/index'
import { Icon } from '../Icon/index'
import PropTypes from 'prop-types'
import './textfield.scss'

export const TEXTFIELD_TYPES = ['input', 'search-box', 'no-shadow']
/**
 * This is used to get text input from the user
 */
export const TextField = React.forwardRef(function TextField(
  {
    type,
    inputType = 'text',
    label,
    icon,
    size,
    disabled,
    placeholder,
    readOnly,
    showCount,
    password,
    countTop,
    noShadow,
    textArea,
    className = '',
    suffix,
    suffixIcon,
    passwordWithSuffix,
    onSuffixWithPasswordClick,
    onSuffixClick,
    ...props
  },
  ref,
) {
  icon = type === 'search-box' ? 'search' : icon
  const Tag = password ? Input.Password : textArea ? Input.TextArea : Input

  return (
    <div
      className={`sg contacto-input-wrapper ${
        showCount && countTop && !textArea && !label && 'show-count-padding'
      }`}
    >
      {label && (
        <div className="contacto-input-label-wrapper">
          <Text type="caption-bold">{label}</Text>
        </div>
      )}
      <Tag
        ref={ref}
        type={inputType}
        className={[
          `contacto-input${textArea && showCount ? '-text-area-show-count' : ''}`,
          'contacto-input--' + type,
          'contacto-input--' + size,
          showCount ? 'show-count' : '',
          noShadow
            ? `contacto-input${textArea && showCount ? '-text-area-show-count' : ''}--no-shadow`
            : '',
          readOnly
            ? `contacto-input${textArea && showCount ? '-text-area-show-count' : ''}--readonly`
            : '',
          className,
        ].join(' ')}
        disabled={readOnly || disabled}
        {...(showCount && !textArea
          ? {
              showCount: {
                // eslint-disable-next-line react/display-name
                formatter: ({ count, maxLength }) => {
                  return (
                    <Text
                      type="caption"
                      color="gray-2"
                      className={`${countTop ? 'count-top' : 'count-margin'}`}
                    >
                      {count}/{maxLength}
                    </Text>
                  )
                },
              },
            }
          : showCount && { showCount: true })}
        placeholder={placeholder}
        {...props}
        prefix={
          icon ? (
            <span
              onClick={onSuffixWithPasswordClick}
              className="material-icons-round contacto-icon contacto-icon--input-prefix"
            >
              {icon}
            </span>
          ) : null
        }
        suffix={
          suffixIcon ? (
            <span
              onClick={onSuffixClick}
              className="material-icons-round contacto-icon contacto-icon--input-suffix"
            >
              {suffixIcon}
            </span>
          ) : (
            suffix
          )
        }
        iconRender={(visible) => (
          <Icon size={20} name={visible ? 'visibility' : 'visibility_off'} />
        )}
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

const InputWithErrorMsg = React.forwardRef(function InputWithValidation(
  { otherError = true, className, name, onBlur, ...props },
  ref,
) {
  const [touched, settouched] = useState(false)
  const errorCondition = props.word?.length || (!props.value && otherError)
  const hasError = touched && errorCondition

  return (
    <>
      <TextField
        ref={ref}
        className={`textbox ${hasError ? 'has-error' : ''} ${className}`}
        onBlur={(e) => settouched(true) || (onBlur && onBlur(e))}
        {...props}
      />
      {touched && !props.value && otherError && (
        <Text color="danger-color" type="caption">
          {props.label || name} is required
        </Text>
      )}
    </>
  )
})

TextField.WithValidation = WithValidation
TextField.InputWithErrorMsg = InputWithErrorMsg

TextField.propTypes = {
  /**
   * This indicates the type of textfield
   */
  type: PropTypes.oneOf(TEXTFIELD_TYPES),
  /**
   * This indicates the type of input, i.e., password, text etc.
   */
  inputType: PropTypes.string,
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
  /**
   * Set to true, if you don't want the character count.
   */
  showCount: PropTypes.bool,
  /**
   * Set to true, if you don't want the character count on top of TextField.
   */
  countTop: PropTypes.bool,
  /**
   * To display the text/component at end
   */
  suffix: PropTypes.any,
  /**
   * To display the icon at last
   */
  suffixIcon: PropTypes.any,
  /**
   * If it's a passowrd with suffix
   */
  passwordWithSuffix: PropTypes.bool,
  /**
   * What to do when suffix is clicked
   */
  onSuffixClick: PropTypes.func,
  /**
   * What to do when suffix with password is clicked
   */
  onSuffixWithPasswordClick: PropTypes.func,
}

TextField.defaultProps = {
  size: 'default',
  type: 'input',
}
