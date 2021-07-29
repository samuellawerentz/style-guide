import React from 'react'
import { Card } from '.'
import { Button } from '../button/Button'
import { Default } from '../TableLayout/index.stories'

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

export const CardWithTableInside = Template.bind({})
CardWithTableInside.args = {
  title: 'Workflows',
  actionButton: <Button type="secondary" label="Create Workflow" icon="group_add" />,
  children: <Default {...Default.args} />,
}

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

export const CardWithLongText = Template.bind({})
CardWithLongText.args = {
  title: 'Sample header',
  subtitle:
    'This is a very very very very very long descriptive copy for the header, so that the line will wrap to the next line to see if the button is top aligned.',
  actionButton: <Button type="secondary" label="Sample Action with Icon" icon="group_add" />,
  topAlignButton: true,
}
