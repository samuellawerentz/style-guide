import React from 'react'
import { Button, BUTTON_TYPES } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: {
      options: BUTTON_TYPES,
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'default', 'large'],
      control: { type: 'select' },
    },
  },
  parameters: {},
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  label: 'Primary Button',
  size: 'default',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  type: 'primary',
  label: 'Primary Button',
  size: 'default',
  icon: 'group_add',
}

export const OnlyIcon = Template.bind({})
OnlyIcon.args = {
  type: 'primary',
  size: 'default',
  icon: 'group_add',
}

export const LoadingState = Template.bind({})
LoadingState.args = {
  type: 'primary',
  label: 'Primary Button',
  size: 'default',
  icon: 'group_add',
  loading: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary Button',
  type: 'secondary',
  size: 'default',
}

export const PrimaryDanger = Template.bind({})
PrimaryDanger.args = {
  label: 'Danger Primary Button',
  type: 'danger-primary',
  size: 'default',
}

export const SecondaryDanger = Template.bind({})
SecondaryDanger.args = {
  label: 'Secondary Danger Button',
  type: 'danger-secondary',
  size: 'default',
}

export const SmallButton = Template.bind({})
SmallButton.args = {
  size: 'small',
  label: 'Small Button',
  type: 'primary',
}

export const Link = Template.bind({})
Link.args = {
  label: 'Button without border',
  type: 'link',
}

export const LinkDanger = Template.bind({})
LinkDanger.args = {
  label: 'Button without border',
  type: 'link-danger',
}

export const LinkUnderline = Template.bind({})
LinkUnderline.args = {
  label: 'Button without border',
  type: 'link',
  variant: 'underline',
}
