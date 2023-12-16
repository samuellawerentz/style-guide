import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

export const ChatLoader = ({ height, width, color, dotRadius, dotPositions, className }) => {
  return (
    <svg height={height} width={width} className={className}>
      {dotPositions.map((pos, index) => (
        <circle
          key={index}
          className="dot"
          cx={pos.cx}
          cy={pos.cy}
          r={dotRadius}
          style={{ fill: color }}
        />
      ))}
    </svg>
  )
}

// Prop types for type checking (optional)
ChatLoader.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  /**
   * This indicates height of the chat loader
   */
  height: PropTypes.string,
  /**
   * This indicates width of the chat loader
   */
  width: PropTypes.string,
  /**
   * This indicates color of the cirlce
   */
  color: PropTypes.string,
  /**
   * This indicates radius of the circle
   */
  dotRadius: PropTypes.string,
  /**
   * This indicates dotPositions , cx and cy denoted x and y coordinated of the circle
   */
  dotPositions: PropTypes.arrayOf(
    PropTypes.shape({
      cx: PropTypes.string.isRequired,
      cy: PropTypes.string.isRequired,
    }),
  ),
}
