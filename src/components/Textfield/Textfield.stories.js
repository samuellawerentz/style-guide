import React from 'react'
import { TEXTFIELD_TYPES, TextField } from '.'
import { Icon } from '../Icon'

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
const InputWithErrorMsg = (args) => <TextField.InputWithErrorMsg {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'input',
  size: 'default',
  maxLength: 100,
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
  placeholder: 'A read-only textfield',
  value: 'Read only',
  readOnly: true,
  suffix: 'sample suffix',
}

export const Password = Template.bind({})
Password.args = {
  type: 'input',
  password: 'true',
  size: 'default',
  placeholder: 'A read-only textfield',
  value: 'Read only',
}

export const CountOnTop = Template.bind({})
CountOnTop.args = {
  type: 'input',
  size: 'default',
  maxLength: 100,
  showCount: true,
  countTop: true,
  placeholder: 'A simple text field',
}

export const TextArea = Template.bind({})
TextArea.args = {
  type: 'input',
  textArea: true,
  size: 'default',
  autoSize: { minRows: 2, maxRows: 6 },
  placeholder: 'A textArea',
}

export const InputWithValidation = WithValidation.bind({})
InputWithValidation.args = {
  placeholder: 'An Textfield with validation',
  errorMessage: 'Not allowed',
  suffixIcon: 'content_copy',
  onSuffixClick: () => console.log('suffix clicked'),
  readOnly: 'true',
  value: 'testtest',
}

export const PasswordWithSuffix = WithValidation.bind({})
PasswordWithSuffix.args = {
  placeholder: 'A password textfield with suffix',
  password: 'true',
  errorMessage: 'Not allowed',
  suffixIcon: 'content_copy',
  onSuffixWithPasswordClick: () => console.log('suffix clicked'),
  readOnly: 'true',
  value: 'test',
}

export const Suffix = Template.bind({})
Suffix.args = {
  type: 'input',
  size: 'default',
  suffix: 'Sample suffix',
  maxLength: 100,
  placeholder: 'A simple text field',
}

export const CustomPassword = Template.bind({})
CustomPassword.args = {
  inputType: 'password',
  size: 'default',
  suffix: 'Sample suffix',
  maxLength: 100,
  placeholder: 'A simple text field',
  icon: <Icon size={20} name="visibility_off" />,
  suffixIcon: 'content_copy',
  readOnly: 'true',
  value: 'tests',
}

export const TextFieldWithValidation = InputWithErrorMsg.bind({})
TextFieldWithValidation.args = {
  label: 'AI Chatbot Name',
  placeholder: '',
  onSuffixClick: () => console.log('suffix clicked'),
}
