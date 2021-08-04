import React from 'react'
import './styles.scss'
import { Radio as AntRadio } from 'antd'
import PropTypes from 'prop-types'
/**
 * Primary Radio Component.
 *  Has the same properties that are used in antd.
 *  Visit https://ant.design/components/radio/#API for options
 */
export const Radio = ({ className = '', ...props }) => {
  return <AntRadio className={['sg contacto-radio-input', className].join(' ')} {...props} />
}
Radio.Group = AntRadio.Group
Radio.Button = AntRadio.Button

Radio.propTypes = {
  className: PropTypes.string,
}
