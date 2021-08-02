import React, { useEffect, useRef } from 'react'
import './styles.scss'
import PropTypes from 'prop-types'

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
    <div className="sg contacto-block contacto-block-column" ref={columnRef}>
      {props.children}
    </div>
  )
}
/**
 * Description
 */
export const Block = ({ className = '', spacing, style, ...props }) => {
  return (
    <div
      className={['sg contacto-block', className].join(' ')}
      style={{ ...style, marginTop: spacing?.[1], marginBottom: spacing?.[0] }}
      {...props}
    />
  )
}

Block.Column = Column

Block.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  spacing: PropTypes.array,
  style: PropTypes.object,
}

Block.defaultProps = {}
