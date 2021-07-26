import React, { useEffect, useRef } from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Space, Row } from 'antd'
import { Table } from '../Table/index'

/**
 * A common table layout
 *
 */
export const TableLayout = ({ className, tableProps, searchBar, actionButtons }) => {
  const tableLayoutRef = useRef(null)
  const paginationContainerRef = useRef(null)

  useEffect(() => {
    const paginationContainer = tableLayoutRef.current.querySelector(
      'ul.ant-pagination.ant-table-pagination',
    )
    paginationContainerRef.current.appendChild(paginationContainer)
  }, [])
  return (
    <div className={[className].join(' ')} ref={tableLayoutRef}>
      <Row justify="space-between" className="contacto-table-layout--controls">
        <Space direction="horizontal" size={16}>
          <div className="contacto-table-layout--search-bar">{searchBar}</div>
          {!!actionButtons?.length &&
            actionButtons.map((actionButtons, i) => (
              <div className="contacto-table-layout--action-button" key={i}>
                {actionButtons}
              </div>
            ))}
        </Space>
        <div
          className="contacto-table-layout--pagination sg contacto-table"
          ref={paginationContainerRef}
        ></div>
      </Row>
      <div className="contacto-table-wrapper">
        <Table {...tableProps} />
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
