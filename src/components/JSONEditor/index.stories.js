import React from 'react'
import { JSONEditor } from './'

export default {
  title: 'Components/JSONEditor',
  component: JSONEditor,
  // argTypes: {
  //  type: {
  //    options:
  //    control: { type: 'select' },
  //  },
  // },
}

const Template = (args) => <JSONEditor {...args} />

export const SchemaEditor = Template.bind({})
SchemaEditor.args = {
  mode: 'schema',
  data: {
    order: {
      order_id: 12312412,
      order_date: '12/12/12',
      order_amount: '12000.00',
      payment: {
        type: 'cash',
        is_successful: true,
      },
    },
  },
}

export const KeyValueEditor = Template.bind({})
KeyValueEditor.args = {
  mode: 'key-value',
  data: {
    order: {
      order_id: 12312412,
      order_date: '12/12/12',
      order_amount: '12000.00',
      payment: {
        type: 'cash',
        is_successful: true,
      },
    },
  },
  options: [
    {
      title: 'System Variables',
      children: [
        { label: 'Abcd', value: 'Abcd' },
        { label: 'dsfsdf', value: 'dsfsdf' },
        { label: 'gtg', value: 'gtg' },
        { label: 'qwe', value: 'qwe' },
      ],
    },
    {
      title: 'API 2',
      children: [
        { label: 'Absfwecd', value: 'Absfwecd' },
        { label: 'ewrew', value: 'ewrew' },
        { label: 'yut', value: 'yut' },
        { label: 'pop', value: 'pop' },
      ],
    },
  ],
}

export const KeyValueEditorWithNoChildren = Template.bind({})
KeyValueEditorWithNoChildren.args = {
  mode: 'no-children',
  data: {
    order_id: 12312412,
  },
}

const treeProps = {
  mode: 'schema',
  fromTree: true,
  data: [
    {
      key: 'contact',
      data_type: 'object',
      selected: true,
      sub_object: [
        {
          key: 'id',
          data_type: 'number',
          selected: false,
          sub_object: [],
        },
      ],
    },
  ],
}

const treeDataTemplate = () => (
  <div>
    <JSONEditor {...treeProps} />
  </div>
)
export const LoadingFromTreeData = treeDataTemplate.bind({})
