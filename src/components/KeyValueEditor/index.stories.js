import { useArgs } from '@storybook/client-api'
import React from 'react'
import { KeyValueEditor } from './'
import { ReactComponent as BracketIcon } from '../../assets/ic-bracket.svg'

export default {
  title: 'Components/KeyValueEditor',
  component: KeyValueEditor,
  // argTypes: {
  //  type: {
  //    options:
  //    control: { type: 'select' },
  //  },
  // },
}

const Template = (args) => {
  // eslint-disable-next-line no-unused-vars
  const [{ data }, updateArgs] = useArgs()
  return (
    <KeyValueEditor
      {...args}
      onChange={(data) => {
        // console.log('out', JSON.stringify(data))
        updateArgs({ data })
      }}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  data: [{ key: '', value: '' }],
  dropdownIcon: BracketIcon,
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
