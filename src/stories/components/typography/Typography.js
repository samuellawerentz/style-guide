import React from 'react'
import { Typography } from 'antd'
import PropTypes from 'prop-types'
import './typography.scss'

export const TEXT_TYPES = [
  'large-title',
  'title-1',
  'title-2',
  'title-3',
  'headline',
  'subtitle',
  'body',
  'caption',
  'caption-bold',
  'caption-italic',
  'caption-capital',
]
/**
 * Typography for Contacto Apps
 */
export const Text = ({ type, children, className, variant, ...props }) => {
  return (
    <Typography.Text
      className={[
        'sg',
        'contacto-typography',
        'contacto-typography--' + type,
        'contacto-typography--' + variant,
        className,
      ].join(' ')}
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
}

Text.defaultProps = {
  type: 'body',
}
