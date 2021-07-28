import React from 'react'
import { Sider } from './'
import { Layout } from 'antd'

export default {
  title: 'Components/Sider',
  component: Sider,
  // argTypes: {
  //  type: {
  //    options:
  //    control: { type: 'select' },
  //  },
  // },
  decorators: [
    (story) => (
      <Layout>
        <Layout.Content style={{ height: '100vh' }}>Sample Content</Layout.Content>
        {story()}
      </Layout>
    ),
  ],
}

const Template = (args) => <Sider {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'heelo',
  title: 'Sample Sider',
  collapsed: false,
}
