import React, { useEffect, useRef } from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Layout, Row, Col } from 'antd'
import { Text } from '../typography/Typography'

/**
 * Description
 */
export const Sider = ({
  className = '',
  noPadding,
  title,
  onClose,
  children,
  footerButtons,
  ...props
}) => {
  const siderRef = useRef(null)
  useEffect(() => {
    siderRef.current && siderRef.current.parentElement.classList.add('ant-layout-has-sider')
  }, [])
  return (
    <Layout.Sider
      ref={siderRef}
      className={[
        'sg contacto-sider',
        className,
        noPadding ? 'contacto-sider--no-padding' : '',
      ].join(' ')}
      width={464}
      collapsedWidth={0}
      {...props}
    >
      <div className="contacto-sider-children">
        <div className="contacto-sider-title">
          <Row justify="space-between">
            <Col span={22}>
              <Text type="title-2">{title}</Text>
            </Col>
            <span className="material-icons contacto-sider-close-icon" onClick={onClose}>
              close
            </span>
          </Row>
        </div>
        <div className="contacto-sider-content">{children}</div>
        {!!footerButtons?.length && (
          <div className="contacto-sider-footer">{footerButtons.map((button) => button)}</div>
        )}
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
  children: PropTypes.any,
  footerButtons: PropTypes.any,
}

Sider.defaultProps = {}
