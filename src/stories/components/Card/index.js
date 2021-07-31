import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Card as AntCard } from 'antd'
import { Text } from '../typography/Typography'

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

const Section = (props) => (
  <div className={['contacto-card-section', props.className || ''].join(' ')}>{props.children}</div>
)
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

Card.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  /**
   * Title of the card
   */
  title: PropTypes.string,
  /**
   * Text rendered beneath the title
   */
  subtitle: PropTypes.string,
  /**
   * The action button component. It must be a react component, usually, the Button component.
   */
  actionButton: PropTypes.node,
  topAlignButton: PropTypes.bool,
  hasTableLayout: PropTypes.bool,
}

Card.defaultProps = {}
