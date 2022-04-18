import React from 'react'
import { PhoneNumberInput } from '.'
import { useArgs } from '@storybook/client-api'

export default {
  title: 'Components/Phone number Input',
  component: PhoneNumberInput,
  argTypes: {
    size: {
      options: ['small', 'default', 'large'],
      control: { type: 'select' },
    },
  },
  decorators: [(story) => <div style={{ width: '280px' }}>{story()}</div>],
}

const Template = () => {
  const [args, updateArgs] = useArgs()
  return (
    <PhoneNumberInput
      {...args}
      onChange={({ target: { value } }) => {
        updateArgs({ value })
      }}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Enter number',
}
