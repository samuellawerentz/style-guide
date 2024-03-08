import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Tag as AntTag } from 'antd'
import { Text } from '../Typography/index'
import { Icon } from '../Icon/index'

export const TAG_TYPES = [
  'success',
  'danger',
  'disabled',
  'progress',
  'default',
  'warning',
  'secondary',
  'select',
  'round',
  'teamname',
]
/**
 * Tag component that is used to specify status of a task
 */
export const Tag = ({
  className = '',
  type,
  label,
  disableUppercase,
  children,
  closeIcon = false,
  ...props
}) => {
  return (
    <AntTag
      className={['sg contacto-tag', className, `contacto-tag--${type}`].join(' ')}
      closeIcon={
        closeIcon ? (
          <span className="close-tag-icon">
            <Icon color="primary-color" name="close" size={14} />
          </span>
        ) : null
      }
      {...props}
    >
      <Text
        type={
          ['default', 'round', 'teamname'].includes(type) || disableUppercase
            ? 'caption'
            : 'caption-capital'
        }
      >
        {label || children}
      </Text>
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
  closeIcon: PropTypes.bool,
  label: PropTypes.string,
  children: PropTypes.any,
  disableUppercase: PropTypes.any,
}

Tag.defaultProps = {
  type: 'default',
}
