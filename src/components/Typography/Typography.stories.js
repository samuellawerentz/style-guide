import React from 'react'
import { Text } from '.'
import { Space } from 'antd'
import { TEXT_TYPES } from './TEXT_TYPES'
import cssVars from '../../utils/cssVars'

export default {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    type: {
      options: TEXT_TYPES.map((type) => type.name),
      control: { type: 'select' },
    },
    color: {
      options: cssVars,
      control: { type: 'select' },
    },
  },
}

const Template = (args) => <Text {...args} />

export const All = (args) => (
  <div>
    <Space direction="vertical">
      <Text type="large-title">This is a large title</Text>
      <Text type="title-1">This is a title level 1</Text>
      <Text type="title-2">This is a title level 2</Text>
      <Text type="title-3">This is a title level 3</Text>
      <Text type="headline">This is a headline</Text>
      <Text type="caption">This is a caption</Text>
      <Text type="caption-bold">This is a bold caption</Text>
      <Text type="caption-italic">This is an italic caption</Text>
      <Text type="caption-capital">This is a capital caption</Text>
    </Space>
  </div>
)

export const LargeTitle = Template.bind({})
LargeTitle.args = {
  children: 'This is a large title',
  type: 'large-title',
}

export const Title1 = Template.bind({})
Title1.args = {
  children: 'This is title 1',
  type: 'title-1',
}

export const Title2 = Template.bind({})
Title2.args = {
  children: 'This is title 2',
  type: 'title-2',
}

export const Title3 = Template.bind({})
Title3.args = {
  children: 'This is title 3',
  type: 'title-3',
}

export const Headline = Template.bind({})
Headline.args = {
  children: 'This is headline',
  type: 'headline',
}

export const Subtitle = Template.bind({})
Subtitle.args = {
  children: 'This is subtitle',
  type: 'subtitle',
}
export const Body = Template.bind({})
Body.args = {
  children: 'This is body text',
}

export const Caption = Template.bind({})
Caption.args = {
  children: 'This is caption',
  type: 'caption',
}

export const CaptionBold = Template.bind({})
CaptionBold.args = {
  children: 'This is a bold caption',
  type: 'caption-bold',
}

export const CaptionItalic = Template.bind({})
CaptionItalic.args = {
  children: 'This is an Italic caption',
  type: 'caption-italic',
}

export const CaptionCapital = Template.bind({})
CaptionCapital.args = {
  children: 'This is an caption on uppercase',
  type: 'caption-capital',
}

export const WithColor = Template.bind({})
WithColor.args = {
  children: 'This is headline',
  type: 'headline',
  color: 'success-color',
}
