import React from 'react'
import { Input } from 'antd'
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
    password,
    noShadow,
    className = '',
    ...props
  },
  ref,
) {
  icon = type === 'search-box' ? 'search' : icon
  const Tag = password ? Input.Password : Input
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
          noShadow ? 'contacto-input--no-shadow' : '',
          readOnly ? 'contacto-input--readonly' : '',
          className,
        ].join(' ')}
        disabled={readOnly || disabled}
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
   * Label for the Input
   */
  label: PropTypes.string,
  /**
   * Material UI icon name taken from https://fonts.google.com/icons
   */
  icon: PropTypes.string,
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
   * Is it a password field?
   */
  password: PropTypes.bool,
}

TextField.defaultProps = {
  size: 'default',
  type: 'input',
}
