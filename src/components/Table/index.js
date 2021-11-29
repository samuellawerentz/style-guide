/* eslint-disable react/prop-types */
import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Table as AntTable } from 'antd'
import { Backdrop } from '../Backdrop/index'

/**
 * The default table that is used in the application.
 *
 * The pagination, cell padding, header and scroll behaviour has been standardised.
 *
 * The options are similar to that of antd table
 */

export const Table = ({ className = '', pagination, loading, backdropProps, ...props }) => {
  let modifiedPagination = {
    ...pagination,
    showSizeChanger: false,
    showTotal(total, range) {
      return `${range[0]}-${range[1]} of ${total}`
    },
    itemRender(page, type) {
      if (type === 'prev' || type === 'next') {
        return (
          <span className="material-icons-round">{`navigate_${
            type === 'prev' ? 'before' : type
          }`}</span>
        )
      }
    },
  }
  return (
    <AntTable
      className={['sg contacto-table', className].join(' ')}
      loading={loading && Backdrop({ visible: true, size: 32, ...backdropProps }).props}
      scroll={{ y: true }}
      pagination={pagination !== false && modifiedPagination}
      {...props}
    />
  )
}

Table.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  /**
   * Props for the Backdrop Component used during loading state
   *
   * Check - https://contacto-io.github.io/style-guide/?path=/docs/components-backdrop--default
   */
  backdropProps: PropTypes.any,
}
