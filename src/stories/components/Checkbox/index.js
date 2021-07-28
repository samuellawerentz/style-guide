import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Checkbox as AntCheckbox } from 'antd'

/**
 * Primary Checkbox Component.
 *  Has the same properties that are used in antd.
 *  Visit https://ant.design/components/checkbox/#API for options
 */
export const Checkbox = ({ className = '', ...props }) => {
  return <AntCheckbox className={['sg contacto-checkbox', className].join(' ')} {...props} />
}

const CheckboxGroup = ({ className, ...props }) => (
  <AntCheckbox.Group
    className={[className, 'sg', 'contacto-checkbox-group'].join(' ')}
    {...props}
  />
)

Checkbox.Group = CheckboxGroup

Checkbox.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
}
