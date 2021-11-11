import React from 'react'
import { Backdrop } from './'

export default {
  title: 'Components/Backdrop',
  component: Backdrop,
  argTypes: {
    spinning: {
      table: { disable: true },
    },
  },
}

const Template = (args) => <Backdrop {...args} />

export const Default = Template.bind({})
Default.args = {
  blur: true,
  tip: 'Loading',
  visible: true,
  children: (
    <div style={{ height: 400, textAlign: 'center' }}>
      This is a tall block <br /> That will have content for the backdrop
    </div>
  ),
}
