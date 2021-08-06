import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

/**
 * Material Icons that are used in the application.
 *
 * Please visit https://fonts.google.com/icons to find different icons and their names
 */
export const Icon = ({ className = '', name, size, color, style, hoverColor, ...props }) => {
  const [iconColor, setIconColor] = useState(color ? `var(--${color})` : undefined)
  let iconEventProps = {}
  if (color && hoverColor) {
    iconEventProps = {
      onMouseEnter: () => setIconColor(`var(--${hoverColor})`),
      onMouseLeave: () => setIconColor(`var(--${color})`),
    }
  }
  return (
    <span
      className={['sg contacto-icon', 'material-icons', className].join(' ')}
      style={{
        ...style,
        color: iconColor,
        fontSize: size,
        cursor: hoverColor && 'pointer',
        overflow: 'hidden',
        maxHeight: size,
        maxWidth: size,
        lineHeight: 1,
      }}
      {...props}
      {...iconEventProps}
    >
      {name}
    </span>
  )
}

Icon.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  /**
   * Name of the icon taken from https://fonts.google.com/icons
   */
  name: PropTypes.string,
  /**
   * Size of the icon in pixels. If its 24x24 enter 24.
   */
  size: PropTypes.number,
  /**
   * Color is usuall inherited from the parent.
   * If you want specific color, enter the variable name of the color.
   *
   * The variable names can be found here -
   * https://samuellawerentz.github.io/style-guide/?path=/docs/colors-color-palette--page
   */
  color: PropTypes.string,
  /**
   * Color to be applied when the icon is hovered. It should be a variable name.
   */
  hoverColor: PropTypes.string,
  style: PropTypes.object,
}

Icon.defaultProps = {
  name: 'emoji_emotions',
}
