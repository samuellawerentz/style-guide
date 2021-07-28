import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Layout, Row, Col } from 'antd'
import { Text } from '../typography/Typography'

/**
 * Description
 */
export const Sider = ({ className = '', noPadding, title, onClose, collapsed, ...props }) => {
  return (
    <Layout.Sider
      className={[
        'sg contacto-sider',
        className,
        noPadding || collapsed ? 'contacto-sider--no-padding' : '',
      ].join(' ')}
      width={464}
      collapsed={collapsed}
      collapsedWidth={0}
      {...props}
    >
      <div className="contacto-sider-title">
        <Row justify="space-between">
          <Col span={22}>
            <Text type="title-2">{title}</Text>
          </Col>
          <span className="material-icons" onClick={onClose}>
            close
          </span>
        </Row>
      </div>
    </Layout.Sider>
  )
}

Sider.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  noPadding: PropTypes.bool,
  title: PropTypes.string,
  onClose: PropTypes.func,
  collapsed: PropTypes.bool,
}

Sider.defaultProps = {}
