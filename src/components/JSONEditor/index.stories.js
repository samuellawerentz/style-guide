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
  data: TreeUtils.cleanTree(
    TreeUtils.convertJSONtoTree({ a: [{ id: 1 }, { id: 2 }], b: '', c: '' }),
  ),
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
