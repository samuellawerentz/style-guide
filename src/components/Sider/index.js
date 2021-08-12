import React, { useEffect, useRef } from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Layout, Row, Col } from 'antd'
import { Text } from '../Typography/index'

/**
 * Default sider with the title, close button and standard footer layout.
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
            <span className="material-icons-round contacto-sider-close-icon" onClick={onClose}>
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
  /**
   * Set this to true, to have 0 padding on the sider and individual padding on the content.
   * This is mostly used for long content which would require scroll.
   */
  noPadding: PropTypes.bool,
  /**
   * Title of the sider
   */
  title: PropTypes.string,
  /**
   * Function handler that is called on clicking the close button
   */
  onClose: PropTypes.func,
  /**
   * React children
   */
  children: PropTypes.any,
  /**
   * An array of buttons that would be rendered with default spaing on the bottom of the footer.
   */
  footerButtons: PropTypes.any,
}

Sider.defaultProps = {}
