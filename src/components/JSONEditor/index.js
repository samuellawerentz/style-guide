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
  { className = '', data, mode = 'schema', ...props },
  ref,
) {
  const ItemRowWrapper = (props) => <ItemRow {...props} mode={mode} />
  return (
    <div className={['sg contacto-jsoneditor', className, mode].join(' ')}>
      <JsonSchemaEditor data={data} ItemComponent={ItemRowWrapper} ref={ref} />
    </div>
  )
})

JSONEditor.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  data: PropTypes.any,
  mode: PropTypes.string,
}

JSONEditor.defaultProps = {}
