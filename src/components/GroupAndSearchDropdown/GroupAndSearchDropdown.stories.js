import React from 'react'
import { GroupAndSearchDropdown } from '.'
import { ReactComponent as BracketIcon } from '../../assets/ic-bracket.svg'

export default {
  title: 'Components/GroupAndSearchDropdown',
  component: GroupAndSearchDropdown,
  argTypes: {
    size: {
      options: ['small', 'default', 'large'],
      control: { type: 'select' },
    },
  },
  decorators: [(story) => <div style={{ width: '580px' }}>{story()}</div>],
}

const Template = (args) => <GroupAndSearchDropdown {...args} />

export const Default = Template.bind({})
Default.args = {
  dropdownIcon: BracketIcon,
  maxLength: 100,
  mode: 'replacer',
  placeholder: 'A simple text field',
  onChange: (e) => console.log(e.target.value),
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
