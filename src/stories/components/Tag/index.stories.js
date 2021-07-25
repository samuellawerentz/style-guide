import React from 'react'
import { Tag } from './'

export default {
  title: 'Components/Tag',
  component: Tag,
  // argTypes: {
  //  type: {
  //    options:
  //    control: { type: 'select' },
  //  },
  // },
}

const Template = (args) => <Tag {...args} />

export const Default = Template.bind({})
Default.args = {}