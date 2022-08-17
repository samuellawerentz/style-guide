import React from 'react'
import { PhoneNumberInput } from '.'

export default {
  title: 'Components/PhoneNumberWithCountryCode',
  component: PhoneNumberInput,
  argTypes: {
    size: {
      options: ['small', 'default', 'large'],
      control: { type: 'select' },
    },
  },
  decorators: [(story) => <div style={{ width: '280px' }}>{story()}</div>],
}

const Template = (args) => <PhoneNumberInput {...args} />

export const PhoneNumberWithCountryCode = Template.bind({})
PhoneNumberWithCountryCode.args = {
  type: 'input',
  size: 'default',
  placeholder: 'A simple text field',
  defaultCode: '91',
  defaultNumber: '8107680129',
  maxLength: 20,
  fieldGap: '12px',
  onChange: () => {},
}
