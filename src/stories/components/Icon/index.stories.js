import React from 'react'
import { Icon } from './'
import cssVars from '../../../utils/cssVars'

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

export const LoadingIcon = () => <Icon.Loading />

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
