import React from 'react'
import { Typography } from 'antd'
import './typography.scss'

export const Text = ({ type, children, className, ...props }) => {
  return (
    <Typography.Text
      className={['contacto-typography', 'contacto-typography--' + type, className].join(' ')}
    >
      {children}
    </Typography.Text>
  )
}
