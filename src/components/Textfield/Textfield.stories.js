import React from 'react'
import { TEXTFIELD_TYPES, TextField } from '.'

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
const WithValidation = (args) => <TextField.WithValidation {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'input',
  size: 'default',
  placeholder: 'A simple text field',
}

export const SearchBox = Template.bind({})
SearchBox.args = {
  type: 'search-box',
  size: 'default',
  placeholder: 'A sample search box',
  allowClear: true,
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
  suffix: 'sample suffix',
}

export const Password = Template.bind({})
Password.args = {
  type: 'input',
  password: 'true',
  size: 'default',
  placeholder: 'An read-only textfield',
  value: 'Read only',
}

export const InputWithValidation = WithValidation.bind({})
InputWithValidation.args = {
  placeholder: 'An Textfield with validation',
  errorMessage: 'Not allowed',
}
