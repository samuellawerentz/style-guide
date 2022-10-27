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
      children: [
        { label: 'Abcd', value: 'Abcd' },
        { label: 'dsfsdf', value: 'dsfsdf' },
        { label: 'gtg', value: 'gtg' },
        { label: 'qwe', value: 'qwe' },
      ],
    },
    {
      title: 'API 2',
      children: [
        { label: 'Absfwecd', value: 'Absfwecd' },
        { label: 'ewrew', value: 'ewrew' },
        { label: 'yut', value: 'yut' },
        { label: 'pop', value: 'pop' },
      ],
    },
  ],
}
