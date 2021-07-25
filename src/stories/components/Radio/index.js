import React from 'react'
import './styles.scss'
import { Radio as AntRadio } from 'antd'
import PropTypes from 'prop-types'
/**
 * Primary Radio Component.
 *  Has the same properties that are used in antd.
 *  Visit https://ant.design/components/radio/#API for options
 */
const Radio = ({ className, ...props }) => {
  return <AntRadio className={[className].join(' ')} {...props} />
}
Radio.Group = AntRadio.Group
Radio.Button = AntRadio.Button

Radio.propTypes = {
  className: PropTypes.string,
}

Radio.defaultProps = {
  className: 'sg contacto-radio-input',
}
export default Radio
