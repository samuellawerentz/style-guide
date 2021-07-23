import React from 'react'
import { Select as AntSelect } from 'antd'
import { Text } from '../typography/Typography'
import PropTypes from 'prop-types'
import './select.scss'
/**
 * This is used to select a value from the list of options
 */
export const Select = ({ label, icon, disabled, placeholder, readOnly, ...props }) => {
  return (
    <div className="sg contacto-select-wrapper">
      {label && (
        <div className="contacto-select-label-wrapper">
          <Text type="caption-bold">{label}</Text>
        </div>
      )}
      <AntSelect
        className={`contacto-select ${readOnly ? 'contacto-select--readonly' : ''}`}
        disabled={readOnly || disabled}
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
}

Select.propTypes = {
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
}

Select.defaultProps = {
  size: 'default',
  type: 'input',
}
