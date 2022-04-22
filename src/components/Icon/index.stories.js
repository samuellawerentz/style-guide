import React from 'react'
import { Icon } from './'
import cssVars from '../../utils/cssVars'
import { ReactComponent as CustomIcon } from '../../assets/ic-account.svg'

export default {
  title: 'Icons/Basic Usage',
  component: Icon,
  argTypes: {
    color: {
      options: cssVars,
      control: { type: 'select' },
    },
    hoverColor: {
      options: cssVars,
      control: { type: 'select' },
    },
  },
}

const Template = (args) => <Icon {...args} />

export const Default = Template.bind({})

export const WithColor = Template.bind({})
WithColor.args = {
  color: 'primary-color',
}

export const WithHoverColor = Template.bind({})
WithHoverColor.args = {
  color: 'gray-2',
  hoverColor: 'danger-color',
}

export const LoadingIcon = (args) => <Icon.Loading {...args} />

const Flag = (args) => (
  <>
    <Icon.Flag {...args} />
    <Icon.Flag {...args} />
  </>
)
export const FlagIcon = Flag.bind({})
FlagIcon.args = {
  iso: 'in',
  url: '/style-guide/symbol-defs.svg',
  circle: true,
}

export const DifferentSizes = (args) => {
  return (
    <div>
      <Icon name="search" size={18}></Icon>
      <Icon name="search" size={20}></Icon>
      <Icon name="search" size={24}></Icon>
      <Icon name="search" size={32}></Icon>
      <Icon name="search" size={40}></Icon>
      <Icon name="search" size={56}></Icon>
    </div>
  )
}

export const CustomSvgIcon = Template.bind({})
CustomSvgIcon.args = {
  color: 'primary-color',
  hoverColor: 'danger-color',
  svg: CustomIcon,
  size: 55,
}
