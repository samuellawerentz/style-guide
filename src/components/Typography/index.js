import React from 'react'
import { Typography } from 'antd'
import PropTypes from 'prop-types'
import './typography.scss'
import { TEXT_TYPES } from './TEXT_TYPES'

/**
 * Typography for Contacto Apps
 */
export const Text = ({ type, children, className, variant, color, style, align, ...props }) => {
  return (
    <Typography.Text
      className={[
        'sg',
        'contacto-typography',
        type ? 'contacto-typography--' + type : '',
        variant ? 'contacto-typography--' + variant : '',
        align ? 'contacto-typography--' + align + ' contacto-typography--block' : '',
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
  type: PropTypes.oneOf(TEXT_TYPES.map((type) => type.name)),
  /**
   * This indicates the children of the text node
   */
  children: PropTypes.any,

  className: PropTypes.string,
  /**
   * This indicates whether the text is primary or secondary.
   */
  variant: PropTypes.string,
  /**
   * Color of the text. Please specify a variable name. Hex colors won't work here.
   */
  color: PropTypes.string,
  /**
   * CSS Style property
   */
  style: PropTypes.object,
  /**
   * Text align
   */
  align: PropTypes.oneOf(['left', 'right', 'center']),
}

Text.defaultProps = {
  type: 'body',
}
