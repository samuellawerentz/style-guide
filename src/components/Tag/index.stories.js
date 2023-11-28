import React from 'react'
import { Tag, TAG_TYPES } from './'

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    type: {
      options: TAG_TYPES,
      control: { type: 'select' },
    },
  },
}

const Template = (args) => <Tag {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Default Tag',
}

export const Closeable = Template.bind({})
Closeable.args = {
  label: 'Default Tag',
  closable: true,
}

export const Success = Template.bind({})
Success.args = {
  label: 'Active',
  type: 'success',
}

export const Danger = Template.bind({})
Danger.args = {
  label: 'Inactive',
  type: 'danger',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Disabled',
  type: 'disabled',
}

export const InProgress = Template.bind({})
InProgress.args = {
  label: 'In Progress',
  type: 'progress',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary',
  type: 'secondary',
  disableUppercase: true,
}

export const Round = Template.bind({})
Round.args = {
  label: 'Round',
  type: 'round',
  closable: true,
  disableUppercase: true,
}

export const TeamName = Template.bind({})
TeamName.args = {
  label: 'Team Name',
  type: 'teamname',
}
