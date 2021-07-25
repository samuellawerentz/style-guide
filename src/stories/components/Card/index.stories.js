import React from 'react'
import { Card } from '.'
import { Button } from '../button/Button'

export default {
  title: 'Layout/Card',
  component: Card,
  // argTypes: {
  //  type: {
  //    options:
  //    control: { type: 'select' },
  //  },
  // },
}

const Template = (args) => <Card {...args} />

export const CardWithTitle = Template.bind({})
CardWithTitle.args = {
  title: 'Sample header',
}

export const CardWithTitleAndButton = Template.bind({})
CardWithTitleAndButton.args = {
  title: 'Sample header',
  actionButton: <Button type="secondary" label="Sample Action" />,
}

export const CardWithTitleButtonAndSubtitle = Template.bind({})
CardWithTitleButtonAndSubtitle.args = {
  title: 'Sample header',
  subtitle: 'This is a descriptive copy for the header',
  actionButton: <Button type="secondary" label="Sample Action with Icon" icon="group_add" />,
}