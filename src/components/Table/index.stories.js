import React from 'react'
import { Table } from './'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
]

const data = []
for (let i = 0; i < 3; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  })
}

export default {
  title: 'Components/Table',
  component: Table,
  // argTypes: {
  //  type: {
  //    options:
  //    control: { type: 'select' },
  //  },
  // },
}

const Template = (args) => <Table {...args} />

export const Default = Template.bind({})
Default.args = {
  columns,
  dataSource: data,
  backdropProps: {
    blur: true,
    tip: 'Loading...',
  },
  loading: false,
}

export const TableWithScroll = (props) => (
  <div style={{ height: 200, border: '1px solid' }}>
    <Table {...props} />
  </div>
)
TableWithScroll.args = {
  columns,
  dataSource: [...data, ...data],
}

export const Loader = Template.bind({})
Loader.args = {
  columns,
  dataSource: data,
  loading: true,
  backdropProps: {
    blur: true,
    tip: 'Loading...',
  },
}
