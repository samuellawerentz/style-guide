import React from 'react'
import { Alert } from './'

export default {
  title: 'Components/Alert',
  component: Alert,
  // argTypes: {
  //  type: {
  //    options:
  //    control: { type: 'select' },
  //  },
  // },
}

const Template = (args) => <Alert {...args} />

export const Compact = Template.bind({})
Compact.args = {
  message: 'This is a warning banner of size compact',
  type: 'info',
  size: 'compact',
}

export const Default = Template.bind({})
Default.args = {
  message: 'This is a warning banner',
  type: 'info',
}

export const Success = Template.bind({})
Success.args = {
  message: 'This is a success banner',
  type: 'success',
}

export const Warning = Template.bind({})
Warning.args = {
  message: 'This is a warning banner',
  type: 'warning',
}

export const Error = Template.bind({})
Error.args = {
  message: 'This is a danger banner',
  type: 'danger',
}
