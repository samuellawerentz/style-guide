import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Icon } from '../Icon/index'
import { Text } from '../Typography/index'

const iconMap = {
  info: 'info',
  warning: 'error',
  danger: 'report',
  success: 'check_circle',
}

/**
 * Component that is used to show alert messages on the UI
 */
export const Alert = ({ className = '', type, message, size = 'default', ...props }) => {
  return (
    <div
      className={[
        'sg contacto-alert',
        `contacto-alert--${type}`,
        `contacto-alert--${size}`,
        className,
      ].join(' ')}
      {...props}
    >
      <div className="contacto-alert-icon">
        <Icon name={iconMap[type]} size={20} />
      </div>
      <div className="contacto-alert-message">
        <Text>{message}</Text>
      </div>
    </div>
  )
}

Alert.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  /**
   * The type of alert
   */
  type: PropTypes.oneOf(['info', 'success', 'danger', 'warning']),
  /**
   * The alert message to be displayed
   */
  message: PropTypes.string,
  /**
   * Variant of alert (default/compact).
   */
  size: PropTypes.oneOf(['default', 'compact']),
}

Alert.defaultProps = {}
