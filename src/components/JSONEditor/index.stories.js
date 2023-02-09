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
  apis: [
    {
      headers: [
        {
          key: 'test',
          value: 'new|',
        },
        {
          key: 'test1',
          value: '1231',
        },
      ],
      query_params: [],
      response_body: [
        {
          key: 'books',
          data_type: 'list',
          selected: false,
          transformation: null,
          sub_object: [
            {
              key: 'author',
              data_type: 'string',
              selected: false,
              transformation: null,
              sub_object: [],
            },
            {
              key: 'description',
              data_type: 'object',
              selected: false,
              transformation: null,
              sub_object: [
                {
                  key: 'description_name',
                  data_type: 'string',
                  selected: false,
                  transformation: null,
                  sub_object: [],
                },
              ],
            },
            {
              key: 'isbn',
              data_type: 'string',
              selected: false,
              transformation: null,
              sub_object: [],
            },
            {
              key: 'pages',
              data_type: 'number',
              selected: false,
              transformation: null,
              sub_object: [],
            },
            {
              key: 'published',
              data_type: 'string',
              selected: false,
              transformation: null,
              sub_object: [],
            },
            {
              key: 'publisher',
              data_type: 'string',
              selected: false,
              transformation: null,
              sub_object: [],
            },
            {
              key: 'subtitle',
              data_type: 'string',
              selected: false,
              transformation: null,
              sub_object: [],
            },
            {
              key: 'title',
              data_type: 'string',
              selected: false,
              transformation: null,
              sub_object: [],
            },
            {
              key: 'website',
              data_type: 'string',
              selected: false,
              transformation: null,
              sub_object: [],
            },
          ],
        },
      ],
      name: 'API 2',
      slug: 'api-2',
      method: 'GET',
      url: 'https://run.mocky.io/v3/a1566548-524f-43a4-a04f-77d353b0da84',
      primary_object: '',
      request_body_type: 'NoBody',
      request_body: null,
      enabled: true,
      lookup_category: 'generic',
      priority: 1,
      shown_to_agent: false,
      uuid: '7a285489-f370-4462-97f7-acb6088d3907',
    },
    {
      headers: null,
      query_params: null,
      response_body: [
        {
          key: 'books1',
          data_type: 'list',
          selected: false,
          transformation: null,
          sub_object: [
            {
              key: 'author',
              data_type: 'string',
              selected: false,
              transformation: null,
              sub_object: [],
            },
            {
              key: 'description',
              data_type: 'string',
              selected: false,
              transformation: null,
              sub_object: [],
            },
            {
              key: 'isbn',
              data_type: 'string',
              selected: false,
              transformation: null,
              sub_object: [],
            },
            {
              key: 'pages',
              data_type: 'number',
              selected: false,
              transformation: null,
              sub_object: [],
            },
            {
              key: 'published',
              data_type: 'string',
              selected: false,
              transformation: null,
              sub_object: [],
            },
            {
              key: 'publisher',
              data_type: 'string',
              selected: false,
              transformation: null,
              sub_object: [],
            },
            {
              key: 'subtitle',
              data_type: 'string',
              selected: false,
              transformation: null,
              sub_object: [],
            },
            {
              key: 'title',
              data_type: 'string',
              selected: false,
              transformation: null,
              sub_object: [],
            },
            {
              key: 'website',
              data_type: 'string',
              selected: false,
              transformation: null,
              sub_object: [],
            },
          ],
        },
      ],
      name: 'API 1',
      slug: 'api-1',
      method: 'GET',
      url: 'https://run.mocky.io/v3/a1566548-524f-43a4-a04f-77d353b0da84',
      primary_object: '',
      request_body_type: 'NoBody',
      request_body: null,
      enabled: true,
      lookup_category: 'generic',
      priority: 1,
      shown_to_agent: true,
      uuid: '326521cf-37f2-4d8c-a220-1846d457a904',
    },
  ],
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
