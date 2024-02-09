import React, { useEffect } from 'react'
import { Icon } from '../Icon/index'
import { Text } from '../Typography/index'
import { notification } from 'antd'
import './notification.scss'

export const showNotification = (type, message) => {
  const iconMap = {
    info: 'info',
    warning: 'error',
    error: 'report',
    success: 'check_circle',
  }

  notification[type]({
    message: <Text type="title-3">{message}</Text>,
    className: `notification-${type}`,
    icon: <Icon name={iconMap[type]} size={24} />,
    duration: 5,
  })
}

export const Notification = ({ type, message }) => {
  useEffect(() => {
    showNotification(type, message)
  }, [type])
  return <>This is notification of type {type}</>
}
