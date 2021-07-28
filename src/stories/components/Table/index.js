import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Table as AntTable } from 'antd'

/**
 * Description
 */
// eslint-disable-next-line react/prop-types
export const Table = ({ className = '', pagination, ...props }) => {
  let modifiedPagination = {
    ...pagination,
    showSizeChanger: false,
    showTotal(total, range) {
      return `${range[0]}-${range[1]} of ${total}`
    },
    itemRender(page, type, comp) {
      if (type === 'prev' || type === 'next') {
        return (
          <span className="material-icons">{`navigate_${type === 'prev' ? 'before' : type}`}</span>
        )
      }
    },
  }
  return (
    <AntTable
      className={['sg contacto-table', className].join(' ')}
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
