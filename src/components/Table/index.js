/* eslint-disable react/display-name */
import React, { useRef, useEffect } from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Table as AntTable } from 'antd'
import SimpleBar from 'simplebar'

/**
 * The default table that is used in the application.
 * The pagination, cell padding, header and scroll behaviour has been standardised.
 * The options are similar to that of antd table
 */
// eslint-disable-next-line react/prop-types
export const Table = ({ className = '', pagination, dataSource, onChange, ...props }) => {
  const tableRef = useRef(null)
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

  useEffect(() => {
    new SimpleBar(tableRef.current.querySelector('.ant-table-container'))
  }, [])

  const handleChange = (...args) => {
    onChange && onChange(...args)
    const simpleBar = SimpleBar.instances.get(
      tableRef.current.querySelector('.ant-table-container'),
    )
    const el = simpleBar && simpleBar.getScrollElement()
    if (el) el.scrollTop = 0
  }

  return (
    <div ref={tableRef} className={['sg contacto-table-inner-wrapper', className].join(' ')}>
      <AntTable
        className="contacto-table"
        dataSource={dataSource}
        scroll={{ y: true }}
        onChange={handleChange}
        pagination={pagination !== false && modifiedPagination}
        {...props}
      />
    </div>
  )
}

Table.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  dataSource: PropTypes.any,
  onChange: PropTypes.any,
}
