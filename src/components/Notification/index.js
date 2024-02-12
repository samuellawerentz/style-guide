import React, { useEffect } from 'react'
import { Icon } from '../Icon/index'
import { Text } from '../Typography/index'
import { notification } from 'antd'
import './notification.scss'
import { ReactComponent as CheckCircle } from '../../assets/ic-check-circle.svg'

const iconMap = {
  name: {
    info: 'info',
    warning: 'error',
    error: 'report',
  },
  svg: {
    success: CheckCircle,
  },
  color: {
    success: 'success-color',
  },
}

export const showNotification = (type, message) => {
  const iconColor = iconMap.svg[type] ? iconMap.color[type] : ''
  notification[type]({
    message: <Text type="title-3">{message}</Text>,
    className: `notification-${type}`,
    icon: (
      <Icon
        name={iconMap.name[type] || ''}
        svg={iconMap.svg[type] || ''}
        size={24}
        color={iconColor}
      />
    ),
    closeIcon: (
      <Icon name="close" size={24} color="primary-text-color" hoverColor="primary-text-color" />
    ),
    duration: 5,
  })
}

export const Notification = ({ type, message }) => {
  useEffect(() => {
    showNotification(type, message)
  }, [type])
  return <>This is notification of type {type}</>
}
