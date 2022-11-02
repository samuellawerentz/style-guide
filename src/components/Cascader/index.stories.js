import React from 'react'
import { Cascader } from './'

export default {
  title: 'Components/Cascader',
  component: Cascader,
  // argTypes: {
  //  type: {
  //    options:
  //    control: { type: 'select' },
  //  },
  // },
}

const Template = (args) => <Cascader {...args} />

export const Default = Template.bind({})
Default.args = {
  onChange: (_, options) => {
    console.log(options)
  },
  options: [
    { label: 'Option1', value: 'option1', children: [] },
    { label: 'Option2', value: 'option2', children: [{ label: 'child', value: 'child' }] },
  ],
}
