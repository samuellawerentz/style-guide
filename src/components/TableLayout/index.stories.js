import React from 'react'
import { TableLayout } from './'
import { TextField } from '../Textfield'
import { Button } from '../Button'
import { Table } from '../Table'

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
for (let i = 0; i < 36; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  })
}
export default {
  title: 'Layout/Table Layout',
  component: TableLayout,
  argTypes: {
    table: {
      control: false,
    },
  },
}

const Template = (args) => <TableLayout {...args} />

export const Default = Template.bind({})
Default.args = {
  table: <Table columns={columns} dataSource={data} />,
  actionButtons: [
    <Button type="table-action-link" icon="filter_list" key="1" label="Filter">
      Filter
    </Button>,
    <Button type="table-action-link" icon="playlist_add" key="2" label="Add Skill">
      Filter
    </Button>,
  ],
  searchBar: (
    <TextField
      placeholder="Search for data"
      style={{ width: 280 }}
      icon="search"
      type="search-box"
    ></TextField>
  ),
}
