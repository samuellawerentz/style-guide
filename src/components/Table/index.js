import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Table as AntTable } from 'antd'

/**
 * The default table that is used in the application.
 * The pagination, cell padding, header and scroll behaviour has been standardised.
 * The options are similar to that of antd table
 */
// eslint-disable-next-line react/prop-types
export const Table = ({ className = '', pagination, ...props }) => {
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
}
