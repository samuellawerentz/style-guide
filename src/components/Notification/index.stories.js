import React from 'react'
import { Notification, showNotification } from './'

export default {
  title: 'Components/Notification',
  component: showNotification,
}

const Template = (args) => <Notification {...args} />

export const Info = Template.bind({})
Info.args = {
  message: 'This is info notification',
  type: 'info',
}

export const Success = Template.bind({})
Success.args = {
  message: 'This is success notification',
  type: 'success',
}

export const Error = Template.bind({})
Error.args = {
  message: 'This is error notification',
  type: 'error',
}

export const Warning = Template.bind({})
Warning.args = {
  message: 'This is warning notification',
  type: 'warning',
}
