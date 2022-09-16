import React from 'react'
import { JSONEditor } from './'

export default {
  title: 'Components/JSONEditor',
  component: JSONEditor,
  // argTypes: {
  //  type: {
  //    options:
  //    control: { type: 'select' },
  //  },
  // },
}

const Template = (args) => <JSONEditor {...args} />

export const Default = Template.bind({})
Default.args = {
  mode: 'key-value',
  data: {
    hi: 123,
  },
}
