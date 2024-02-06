import React from 'react'
import PropTypes from 'prop-types'
import { Button as AntButton } from 'antd'
import { Icon } from '../Icon/index'
import './button.scss'
export const BUTTON_TYPES = [
  'primary',
  'secondary',
  'secondary-gray',
  'danger-primary',
  'danger-secondary',
  'link',
  'link-danger',
  'table-action-link',
]

export const getButtonClassName = (
  type,
  size = 'default',
  icon,
  className,
  onlyIcon,
  fullWidth,
  align,
  variant,
) => {
  return [
    'sg',
    'cnto-btn',
    'contacto-button',
    type ? `contacto-button--${type}` : '',
    size ? `contacto-button--${size}` : '',
    icon ? `contacto-button--with-icon` : '',
    onlyIcon ? 'contacto-button--only-icon' : '',
    fullWidth ? 'contacto-button--full-width' : '',
    align ? `contacto-button--${align}` : '',
    className,
    variant ? `contacto-button--${variant}` : '',
  ].join(' ')
}
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type,
  size,
  label,
  icon,
  fullWidth,
  align,
  className,
  children,
  variant,
  ...props
}) => {
  return (
    <AntButton
      className={getButtonClassName(
        type,
        size,
        icon,
        className,
        !(label || children) && icon,
        fullWidth,
        align,
        variant,
      )}
      icon={icon ? <Icon name={icon} className={size} /> : null}
      {...props}
    >
      {label || children}
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
  size: PropTypes.oneOf(['small', 'default', 'large', 'extra-large']),
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
   * Set to true, if the button needs to expand to full width of the container
   */
  fullWidth: PropTypes.bool,
  /**
   * How to align the text inside the button. Default is center.
   */
  align: PropTypes.oneOf(['left', 'right', 'center']),
  children: PropTypes.any,
  variant: PropTypes.string,
}

Button.defaultProps = {
  size: 'default',
  type: 'primary',
}
