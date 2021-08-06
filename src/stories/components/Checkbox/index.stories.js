import React from 'react'
import { Checkbox } from './'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  // argTypes: {
  //  type: {
  //    options:
  //    control: { type: 'select' },
  //  },
  // },
}

const Template = (args) => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default Checkbox',
  disabled: false,
}

export const IndeterminateState = Template.bind({})
IndeterminateState.args = {
  children: 'Intermediate state Checkbox',
  indeterminate: true,
}

export const Group = (args) => {
  return <Checkbox.Group options={args.options} defaultValue={['Apple']} />
}
Group.args = {
  options: ['Apple', 'Pear', 'Green'],
}

export const GroupWithChildren = () => {
  return (
    <Checkbox.Group>
      <Checkbox value="a">Hangzhou</Checkbox>
      <Checkbox value="b">Shanghai</Checkbox>
      <Checkbox value="c">Beijing</Checkbox>
      <Checkbox value="d">Chengdu</Checkbox>
    </Checkbox.Group>
  )
}
