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
      <div>
        <Text variant="secondary">{props.subtitle}</Text>
      </div>
    )}
  </>
)
/**
 * This is a layout that is mostly used in the center, when the screen has a table.
 */
export const Card = ({ className, title, subtitle, actionButton, ...props }) => {
  return (
    <AntCard
      className={[className].join(' ')}
      {...props}
      title={<Title text={title} subtitle={subtitle} />}
      extra={actionButton || null}
    />
  )
}

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
}

Card.defaultProps = {
  className: 'sg contacto-card',
}
