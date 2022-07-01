import React from 'react'
import { NumberInput } from '.'

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
  argTypes: {
    size: {
      options: ['small', 'default', 'large'],
      control: { type: 'select' },
    },
  },
  decorators: [(story) => <div style={{ width: '280px' }}>{story()}</div>],
}

const Template = (args) => <NumberInput {...args} />
const WithValidation = (args) => <NumberInput.WithValidation {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 'default',
  placeholder: 'A simple Number Input',
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  size: 'default',
  placeholder: 'A NumberInput with an Label',
  label: 'An example label',
}

export const Disabled = Template.bind({})
Disabled.args = {
  size: 'default',
  placeholder: 'An disabled NumberInput',
  disabled: true,
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  size: 'default',
  placeholder: 'An read-only NumberInput',
  value: 'Read only',
  readOnly: true,
  suffix: 'sample suffix',
}

export const NumberInputWithValidation = WithValidation.bind({})
NumberInputWithValidation.args = {
  placeholder: 'An Number Input with validation',
  errorMessage: 'Not allowed',
}
