import React from 'react'
import { Block } from '.'

export default {
  title: 'Components/Block',
  component: Block,
  // argTypes: {
  //  type: {
  //    options:
  //    control: { type: 'select' },
  //  },
  // },
}

const Template = (args) => <Block {...args} />

export const Default = Template.bind({})
Default.args = {}
