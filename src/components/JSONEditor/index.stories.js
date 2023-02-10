/* eslint-disable no-unused-vars */
import React from 'react'
import { JSONEditor } from './'
import { useArgs } from '@storybook/client-api'
import { TreeUtils } from 'rc-json-editor'

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

const treeProps = {
  fromTree: true,
  options: [{ label: 'API 1', options: [{ value: '123' }] }],
  data: [
    {
      key: 'state',
      data_type: 'string',
      selected: true,
      transformation: null,
      sub_object: [],
      ui_label: 'state',
      field_type: 'TextInput',
      display_format: 'Lowercase',
      optional: false,
      editable: false,
      create: false,
    },
    {
      key: 'city',
      data_type: 'string',
      selected: true,
      transformation: null,
      sub_object: [],
      ui_label: 'city',
      field_type: 'TextInput',
      display_format: 'Lowercase',
      optional: false,
      editable: false,
      create: false,
    },
    {
      key: 'address',
      data_type: 'string',
      selected: true,
      transformation: null,
      sub_object: [],
      ui_label: 'address',
      field_type: 'TextInput',
      display_format: 'Lowercase',
      optional: false,
      editable: false,
      create: false,
    },
    {
      key: 'country',
      data_type: 'string',
      selected: true,
      transformation: null,
      sub_object: [],
      ui_label: 'country',
      field_type: 'TextInput',
      display_format: 'Lowercase',
      optional: false,
      editable: false,
      create: false,
    },
  ],
}

const TreeDataTemplate = (args) => {
  const [{ data }, updateArgs] = useArgs()
  return (
    <div>
      <JSONEditor
        fromTree
        {...args}
        onChange={(data) => {
          console.log('onChange', data)
          updateArgs({ data: TreeUtils.cleanTree(data, false, undefined, false) })
        }}
      />
    </div>
  )
}
export const LoadingFromTreeData = TreeDataTemplate.bind({})
LoadingFromTreeData.args = treeProps
