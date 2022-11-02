import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Cascader as AntCascader } from 'antd'
import { Icon } from '../Icon/index'
//import { Text } from '../Typography/index'

/**
 * A dropdown component but with sub-menus.
 * Check https://ant.design/components/cascader/#API for options
 */
export const Cascader = ({ className = '', ...props }) => {
  return (
    <div className={['sg contacto-cascader', className].join(' ')}>
      <AntCascader
        displayRender={(label) => label.at(-1)}
        popupClassName="sg contacto-cascader-menu"
        expandIcon={<Icon name="chevron_right" size={20} color="gray-1" />}
        suffixIcon={<Icon name="expand_more" size={20} color="gray-1" />}
        {...props}
      />
    </div>
  )
}

Cascader.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
}

Cascader.defaultProps = {}
