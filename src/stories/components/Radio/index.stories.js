import React from 'react'
import { Radio } from './'

export default {
  title: 'Components/Radio',
  component: Radio,
  // argTypes: {
  //  type: {
  //    options:
  //    control: { type: 'select' },
  //  },
  // },
}

const Template = (args) => <Radio {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default Radio',
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Disabled Radio',
  disabled: true,
}

export const Group = () => {
  return (
    <Radio.Group defaultValue="a" size="large">
      <Radio value="a">Hangzhou</Radio>
      <Radio value="b">Shanghai</Radio>
      <Radio value="c">Beijing</Radio>
      <Radio value="d">Chengdu</Radio>
    </Radio.Group>
  )
}
