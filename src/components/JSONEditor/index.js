/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import ItemRow from './ItemRow'
import { forwardRef } from 'react'
import { JsonEditor as JsonSchemaEditor } from 'rc-json-editor'

/**
 * A JSON Editor component wrapped upon rc-json-editor
 */

const extractKeys = (responseBody, parentKey, path, api) => {
  return responseBody.reduce((acc, obj) => {
    const resp_key = `${path ? `${path}.${obj.key}` : obj.key}`
    if (parentKey === '' || obj.key === parentKey)
      acc.push(
        ...[
          obj.data_type !== 'list' && obj.data_type !== 'object'
            ? { value: resp_key, data_type: obj.data_type, api }
            : null,
          ...extractKeys(obj.sub_object, '', resp_key, api),
        ].filter(Boolean),
      )
    return acc
  }, [])
}

export const JSONEditor = forwardRef(function JSONEditor(
  { className = '', data, mode = 'schema', fromTree, apis, onNodeTypeChange, ...props },
  ref,
) {
  const options = useMemo(
    () =>
      apis.map((api) => ({
        label: api.name,
        options: extractKeys(api.response_body, api.primary_object, '', api.uuid).slice(
          Number(!!api.primary_object),
        ),
      })),
    [],
  )

  const ItemRowWrapper = (props) => (
    <ItemRow {...props} options={options} onNodeTypeChange={onNodeTypeChange} />
  )
  return (
    <div className={['sg contacto-jsoneditor', className, mode].join(' ')}>
      <JsonSchemaEditor
        data={data}
        ItemComponent={ItemRowWrapper}
        ref={ref}
        fromTree={fromTree}
        {...props}
      />
    </div>
  )
})

JSONEditor.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  /**
   * JSON data that has to loaded - can be tree data or JSON data
   */
  data: PropTypes.any,
  /**
   * Type of JSON Editor - schema, key-value, no-children
   */
  mode: PropTypes.string,
  /**
   * Whether the data is JSON or Tree data
   */
  fromTree: PropTypes.bool,
  apis: PropTypes.array,
  onNodeTypeChange: PropTypes.func,
}

JSONEditor.defaultProps = {}
