import React, { useRef } from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Card as AntCard, Space, Row } from 'antd'
import { Text } from '../Typography/index'

const Title = (props) => (
  <>
    <div>
      <Text type="title-2">{props.text}</Text>
    </div>
    {props.subtitle && (
      <div className="contacto-card-subtitle">
        <Text variant="secondary">{props.subtitle}</Text>
      </div>
    )}
  </>
)

const Section = React.forwardRef(function Section(props, ref) {
  return (
    <div
      className={[
        'contacto-card-section',
        props.scrollY ? 'contacto-card-section--scroll-y' : '',
        props.className || '',
      ].join(' ')}
      ref={ref}
    >
      {props.children}
    </div>
  )
})

const Footer = (props) => {
  const footerRef = useRef(null)
  const cardBody = footerRef.current?.closest('.ant-card-body')
  if (cardBody) cardBody.parentNode.insertBefore(footerRef.current, cardBody.nextSibling)
  return (
    <Section className="contacto-card-footer-section" ref={footerRef}>
      <Row justify="end">
        <Space size={16} direction="horizontal">
          {props.footerButtons.map((button) => button)}
        </Space>
      </Row>
    </Section>
  )
}
/**
 * This is a layout that is mostly used in the center, when the screen has a table.
 */
export const Card = ({
  className = '',
  title,
  subtitle,
  actionButton,
  topAlignButton,
  hasTableLayout,
  ...props
}) => {
  return (
    <AntCard
      className={[
        'sg contacto-card',
        className,
        topAlignButton ? 'contacto-card-align-top' : '',
        hasTableLayout ? 'contacto-card--has-table-layout' : '',
      ].join(' ')}
      {...props}
      title={<Title text={title} subtitle={subtitle} />}
      extra={actionButton || null}
    />
  )
}

Card.Section = Section
Card.Footer = Footer

Card.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  /**
   * Title of the card
   */
  title: PropTypes.any,
  /**
   * Text rendered beneath the title
   */
  subtitle: PropTypes.string,
  /**
   * The action button component. It must be a react component, usually, the Button component.
   */
  actionButton: PropTypes.node,
  /**
   * Should the button be top aligned with the header?
   */
  topAlignButton: PropTypes.bool,
  /**
   * If the card contains the default table view, set this to true
   * for the scroll functionaltiy to work properly
   */
  hasTableLayout: PropTypes.bool,
}

Card.defaultProps = {}
