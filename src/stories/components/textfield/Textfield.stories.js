import React from 'react'
import { TEXTFIELD_TYPES, TextField } from './TextField'

export default {
  title: 'Components/Textfield',
  component: TextField,
  argTypes: {
    type: {
      options: TEXTFIELD_TYPES,
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'default', 'large'],
      control: { type: 'select' },
    },
  },
  decorators: [(story) => <div style={{ width: '280px' }}>{story()}</div>],
}

const Template = (args) => <TextField {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'input',
  size: 'default',
  placeholder: 'A simple text field',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  type: 'input',
  size: 'default',
  placeholder: 'A textfield with an icon',
  icon: 'search',
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  type: 'input',
  size: 'default',
  placeholder: 'A textfield with an icon',
  icon: 'search',
  label: 'An example label',
}

export const Disabled = Template.bind({})
Disabled.args = {
  type: 'input',
  size: 'default',
  placeholder: 'An disabled textfield',
  disabled: true,
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  type: 'input',
  size: 'default',
  placeholder: 'An read-only textfield',
  value: 'Read only',
  readOnly: true,
}
