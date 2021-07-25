import React from 'react'
import PropTypes from 'prop-types'
import { Button as AntButton } from 'antd'
import './button.scss'
export const BUTTON_TYPES = [
  'primary',
  'secondary',
  'danger-primary',
  'danger-secondary',
  'link',
  'link-danger',
]
/**
 * Primary UI component for user interaction
 */
export const Button = ({ type, size, label, icon, loading, className, ...props }) => {
  return (
    <AntButton
      className={[
        'sg',
        'contacto-button',
        `contacto-button--${type}`,
        `contacto-button--${size}`,
        icon ? `contacto-button--with-icon` : '',
        !label && icon ? 'contacto-button--only-icon' : '',
        className,
      ].join(' ')}
      icon={icon ? <span className={'material-icons contacto-icon ' + size}>{icon}</span> : null}
      loading={loading}
      {...props}
    >
      {label}
    </AntButton>
  )
}

Button.propTypes = {
  /**
   * This indicates what type of button should be rendered
   */
  type: PropTypes.oneOf(BUTTON_TYPES),
  className: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'default', 'large']),
  /**
   * Button Text
   */
  label: PropTypes.string,

  /**
   * Material UI icon name taken from https://fonts.google.com/icons
   */
  icon: PropTypes.string,
  /**
   * Disable the button
   */
  disabled: PropTypes.bool,
  /**
   * Activate the loading state and add a spinner icon
   */
  loading: PropTypes.bool,
}

Button.defaultProps = {
  size: 'default',
  type: 'primary',
}
