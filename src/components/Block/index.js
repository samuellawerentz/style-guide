import React, { useEffect, useRef } from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import SimpleBar from 'simplebar-react'

const Column = (props) => {
  const columnRef = useRef(null)
  useEffect(() => {
    if (props.spacing?.length && columnRef.current?.children.length) {
      Array.from(columnRef.current?.children).forEach(
        (child, i) => (child.style.marginBottom = `${props.spacing[i % props.spacing.length]}px`),
      )
    }
  }, [props.spacing])
  return (
    <div
      className={[
        'sg contacto-block contacto-block-column',
        props.className,
        props.align ? `contacto-block-column--${props.align}` : '',
      ].join(' ')}
      ref={columnRef}
    >
      {props.children}
    </div>
  )
}

const Scrollable = ({ className, fullHeight, ...props }) => (
  <SimpleBar
    className={[
      'sg contacto-block contacto-block-scroll',
      fullHeight ? 'contacto-block-scroll--full-height' : '',
      className,
    ].join(' ')}
    {...props}
  />
)

/**
 * A block element which provides spacing options like margin-bottom and margin-top.
 * This helps in accurate spacing.
 */
export const Block = ({
  className = '',
  spacing,
  style,
  display,
  justifyContent,
  alignItems,
  horizontalSpacing,
  padding,
  gap,
  ...props
}) => {
  return (
    <div
      className={['sg contacto-block', className].join(' ')}
      style={{
        ...style,
        marginTop: spacing?.[1],
        marginBottom: spacing?.[0],
        marginLeft: horizontalSpacing?.[0],
        marginRight:
          horizontalSpacing?.length === 1 ? horizontalSpacing?.[0] : horizontalSpacing?.[1],
        padding,
        display,
        justifyContent,
        alignItems,
        gap,
      }}
      {...props}
    />
  )
}

Block.Column = Column
Block.Scrollable = Scrollable

Block.propTypes = {
  /**
   * Class name to be added
   */
  className: PropTypes.string,
  /**
   * The [margin-bototm, margin-top] value specified as an array
   */
  spacing: PropTypes.array,
  /**
   * CSS Style object
   */
  style: PropTypes.object,
  horizontalSpacing: PropTypes.array,
  display: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  padding: PropTypes.any,
  gap: PropTypes.any,
}

Block.defaultProps = {}
