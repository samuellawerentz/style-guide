import React from 'react'
import { CountryInput } from '.'
import { useArgs } from '@storybook/client-api'

export default {
  title: 'Components/CountryInput',
  component: CountryInput,
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
    <CountryInput
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
  value: '+919791603078',
}
