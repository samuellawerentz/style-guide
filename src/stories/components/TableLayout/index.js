import React, { useEffect, useRef } from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Space, Table, Row } from 'antd'

/**
 * A common table layout
 *
 * ToDo:
 *
 * 1. Handle if pagination is not available
 *
 * 2. Update table component
 *
 * 3. Update SearchBar
 */
export const TableLayout = ({ className, tableProps, searchBar, actionButtons }) => {
  const tableLayoutRef = useRef(null)
  const paginationContainerRef = useRef(null)
  const { pagination, ...tProps } = tableProps
  const modifiedPagination = {
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
  useEffect(() => {
    const paginationContainer = tableLayoutRef.current.querySelector(
      'ul.ant-pagination.ant-table-pagination',
    )
    paginationContainerRef.current.appendChild(paginationContainer)
  }, [])
  return (
    <div className={[className].join(' ')} ref={tableLayoutRef}>
      <Row justify="space-between">
        <Space direction="horizontal" size={16} className="contacto-table-layout--controls">
          <div className="contacto-table-layout--search-bar">{searchBar}</div>
          {!!actionButtons?.length &&
            actionButtons.map((actionButtons, i) => (
              <div className="contacto-table-layout--action-button" key={i}>
                {actionButtons}
              </div>
            ))}
        </Space>
        <div className="contacto-table-layout--pagination" ref={paginationContainerRef}></div>
      </Row>
      <div className="contacto-table-wrapper">
        <Table {...tProps} pagination={modifiedPagination} />
      </div>
    </div>
  )
}

TableLayout.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  tableProps: PropTypes.object,
  searchBar: PropTypes.node,
  pagination: PropTypes.node,
  actionButtons: PropTypes.arrayOf(PropTypes.node),
}

TableLayout.defaultProps = {
  className: 'sg contacto-table-layout',
}
