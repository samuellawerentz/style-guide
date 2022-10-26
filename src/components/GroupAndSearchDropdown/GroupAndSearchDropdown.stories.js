import React from 'react'
import { GroupAndSearchDropdown } from '.'

export default {
  title: 'Components/GroupAndSearchDropdown',
  component: GroupAndSearchDropdown,
  argTypes: {
    size: {
      options: ['small', 'default', 'large'],
      control: { type: 'select' },
    },
  },
  decorators: [(story) => <div style={{ width: '280px' }}>{story()}</div>],
}

const Template = (args) => <GroupAndSearchDropdown {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'input',
  size: 'default',
  maxLength: 100,
  placeholder: 'A simple text field',
  options: [
    {
      title: 'System Variables',
      children: ['Abcd', 'efgh', 'erekug', 'fhjdkg'],
    },
    {
      title: 'API 2',
      children: ['dsfsf', 'sdfsdfg', 'rewwr', 'wqeqwrdfs'],
    },
  ],
}
