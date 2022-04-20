import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const Loading = ({
  size = 32,
  color = 'primary-color',
  strokeWidth = 3,
  trackColor = 'primary-color-4',
}) => {
  return (
    <span
      className="sg contacto-loader"
      style={{
        width: size,
        height: size,
        borderWidth: `${strokeWidth}px`,
        borderStyle: 'solid',
        borderColor: `var(--${color}) var(--${trackColor}) var(--${trackColor})`,
      }}
    ></span>
  )
}

const Flag = ({ url, iso, size = 30, circle }) => {
  const shouldClip = circle && iso !== 'unknown'
  const renderSize = shouldClip ? (size * 3) / 2 : size
  const dimensions = {
    size,
    radius: renderSize / 3,
    center: renderSize / 2,
    margin: shouldClip ? `0 -${renderSize / 6}px` : '',
  }
  return (
    <div
      style={{
        display: 'inline-flex',
        margin: dimensions.margin,
      }}
    >
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={renderSize} height={renderSize}>
        {shouldClip && (
          <clipPath id="clipCircle">
            <circle r={dimensions.radius} cx={dimensions.center} cy={dimensions.center} />
          </clipPath>
        )}
        <use
          href={`${url}#flag-${iso.toLowerCase()}`}
          clipPath={shouldClip ? 'url(#clipCircle)' : ''}
        />
      </svg>
    </div>
  )
}

/**
 * Google Icons that are used in the application.
 *
 * Please visit https://fonts.google.com/icons to find different icons and their names
 */
export const Icon = ({ className = '', name, size, color, style, hoverColor, svg, ...props }) => {
  const [iconColor, setIconColor] = useState(color ? `var(--${color})` : undefined)
  let iconEventProps = {}
  const SvgIcon = svg

  if (color && hoverColor) {
    iconEventProps = {
      onMouseEnter: () => setIconColor(`var(--${hoverColor})`),
      onMouseLeave: () => setIconColor(`var(--${color})`),
    }
  }

  // Effect to update color if the prop chages dynamically
  useEffect(() => {
    setIconColor(`var(--${color})`)
  }, [color])

  return (
    <span
      className={[
        'sg contacto-icon',
        !svg ? 'material-icons-round' : 'contacto-icon-custom',
        className,
      ].join(' ')}
      style={{
        ...style,
        color: iconColor,
        fontSize: size,
        cursor: hoverColor && 'pointer',
        overflow: 'hidden',
        lineHeight: 1,
        width: size,
        height: size,
      }}
      {...props}
      {...iconEventProps}
    >
      {svg ? <SvgIcon /> : name}
    </span>
  )
}

Icon.Loading = Loading
Icon.Flag = Flag

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
  svg: PropTypes.any,
}

Icon.defaultProps = {
  name: 'emoji_emotions',
}
