import React from 'react'
import { DatePicker } from '.'

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  argTypes: {
    size: {
      options: ['small', 'default', 'large'],
      control: { type: 'select' },
    },
  },
  decorators: [(story) => <div style={{ width: '264px' }}>{story()}</div>],
}

const Template = (args) => {
  return <DatePicker {...args} />
}

export const Default = Template.bind({})
Default.args = {}

export const RangePicker = Template.bind({})
RangePicker.args = {
  rangePicker: true,
}
