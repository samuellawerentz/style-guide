import React from 'react'
import { ChatLoader } from '.'

export default {
  title: 'Components/ChatLoader',
  component: ChatLoader,
  parameters: {},
}

const Template = (args) => <ChatLoader {...args} />

export const Default = Template.bind({})
Default.args = {
  className: 'typing-loader',
  height: '8',
  width: '36',
  color: 'grey',
  dotRadius: '4',
  dotPositions: [
    { cx: '4', cy: '4' },
    { cx: '18', cy: '4' },
    { cx: '32', cy: '4' },
  ],
}
