import React from 'react'
import { TopBanner, BannerType } from './'
import { Button } from '../Button'

export default {
  title: 'Components/TopBanner',
  component: TopBanner,
  argTypes: {
    type: {
      options: BannerType,
      control: { type: 'select' },
    },
  },
}

const Template = (args) => <TopBanner {...args} />

export const Default = Template.bind({})
Default.args = {
  visible: true,
  content: 'This is default type banner.',
}

export const Success = Template.bind({})
Success.args = {
  visible: true,
  content: 'This is success type banner.',
  type: 'success',
}

export const Danger = Template.bind({})
Danger.args = {
  visible: true,
  content: 'This is danger type banner.',
  type: 'danger',
}

export const Warning = Template.bind({})
Warning.args = {
  visible: true,
  content: 'This is warning type banner.',
  type: 'warning',
}

export const BannerWithButton = Template.bind({})
BannerWithButton.args = {
  visible: true,
  content: 'This is banner with action button.',
  type: 'default',
  buttons: [
    <Button
      label="Alert"
      key="button"
      onClick={() => alert('Banner button clicked!')}
      size="small"
      type="link"
      variant="underline"
    />,
  ],
}

export const BannerWithLoading = Template.bind({})
BannerWithLoading.args = {
  visible: true,
  content: 'This is banner with action button.',
  type: 'danger',
  loading: true,
}
