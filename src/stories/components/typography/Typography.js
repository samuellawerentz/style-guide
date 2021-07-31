import React from 'react'
import { Typography } from 'antd'
import PropTypes from 'prop-types'
import './typography.scss'
import { TEXT_TYPES } from './TEXT_TYPES'

/**
 * Typography for Contacto Apps
 */
export const Text = ({ type, children, className, variant, color, style, ...props }) => {
  return (
    <Typography.Text
      className={[
        'sg',
        'contacto-typography',
        'contacto-typography--' + type,
        'contacto-typography--' + variant,
        className,
      ].join(' ')}
      style={{ ...style, color: color ? `var(--${color})` : undefined }}
      {...props}
    >
      {children}
    </Typography.Text>
  )
}

Text.propTypes = {
  /**
   * This indicates the type of the text that is to be used
   */
  type: PropTypes.oneOf(TEXT_TYPES),
  /**
   * This indicates the children of the text node
   */
  children: PropTypes.any,

  className: PropTypes.string,
  /**
   * This indicates whether the text is primary or secondary.
   */
  variant: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
}

Text.defaultProps = {
  type: 'body',
}
