import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Tag as AntTag } from 'antd'
import { Text } from '../typography/Typography'

export const TAG_TYPES = ['success', 'danger', 'disabled', 'progress', 'default']
/**
 * Tag component that is used to specify status of a task
 */
export const Tag = ({ className, type, label, ...props }) => {
  return (
    <AntTag className={[className, `contacto-tag--${type}`].join(' ')} {...props}>
      <Text type={type === 'default' ? 'caption' : 'caption-capital'}>{label}</Text>
    </AntTag>
  )
}

Tag.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  /**
   * The type of tag
   */
  type: PropTypes.oneOf(TAG_TYPES),
  /**
   * The text to be displayed
   */
  label: PropTypes.string,
}

Tag.defaultProps = {
  className: 'sg contacto-tag',
  type: 'default',
}
