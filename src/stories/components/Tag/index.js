import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'

/**
 * Description
 */
export const Tag = ({className, ...props}) => {
  return <div className={[className].join(' ')} {...props} />
}

Tag.propTypes = {
  /**
   * Class to be added
   */
   className: PropTypes.string,
}

Tag.defaultProps = {
  className: 'sg contacto-'
}
