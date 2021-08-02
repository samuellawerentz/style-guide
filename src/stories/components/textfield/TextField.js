import React from 'react'
import { Input } from 'antd'
import { Text } from '../typography/Typography'
import PropTypes from 'prop-types'
import './textfield.scss'

export const TEXTFIELD_TYPES = ['input', 'search-box', 'no-shadow']
/**
 * This is used to get text input from the user
 */
export const TextField = ({
  type,
  label,
  icon,
  size,
  disabled,
  placeholder,
  readOnly,
  noShadow,
  className = '',
  ...props
}) => {
  icon = type === 'search-box' ? 'search' : icon
  return (
    <div className="sg contacto-input-wrapper">
      {label && (
        <div className="contacto-input-label-wrapper">
          <Text type="caption-bold">{label}</Text>
        </div>
      )}
      <Input
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
            <span className="material-icons contacto-icon contacto-icon--input-prefix">{icon}</span>
          ) : null
        }
      />
    </div>
  )
}

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
  noShadow: PropTypes.bool,
}

TextField.defaultProps = {
  size: 'default',
  type: 'input',
}
