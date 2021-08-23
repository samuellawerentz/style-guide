import React from 'react'
import { Block } from '.'
import { Text } from '../Typography'

export default {
  title: 'Layout/Block',
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
Default.args = {
  spacing: [20, 30],
  children: 'This is a block with margin-bottom: 20px and margin-top: 30px',
}

export const BlockColumn = (args) => (
  <Block.Column spacing={[4, 16, 24, 32]}>
    <Text type="headline">Block Column Example</Text>
    <div>This is an example of column layout with spacing</div>
    <div>This block has a margin-bottom of 24px</div>
    <div>margin-bottom: 32px</div>
  </Block.Column>
)
