import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import ItemRow from './ItemRow'
import { forwardRef } from 'react'
import { JsonEditor as JsonSchemaEditor } from 'rc-json-editor'

/**
 * A JSON Editor component wrapped upon rc-json-editor
 */
export const JSONEditor = forwardRef(function JSONEditor(
  { className = '', data, mode = 'schema', fromTree, ...props },
  ref,
) {
  const ItemRowWrapper = (props) => <ItemRow {...props} mode={mode} />
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
}

JSONEditor.defaultProps = {}
