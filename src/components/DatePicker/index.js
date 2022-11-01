import React, { forwardRef } from 'react'
import { DatePicker as AntDatePicker } from 'antd'
import moment from 'moment'
import PropTypes from 'prop-types'
import './datepicker.scss'

export const DatePicker = forwardRef(function DatePicker(
  { className = '', rangePicker, ...props },
  ref,
) {
  moment.updateLocale('en', {
    weekdaysMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  })
  const Component = rangePicker ? AntDatePicker.RangePicker : AntDatePicker
  return <Component className={'contacto-date-picker-field ' + className} {...props} />
})

DatePicker.Option = AntDatePicker.Option

DatePicker.propTypes = {
  /**
   * Class name to be added
   */
  className: PropTypes.string,
  /**
   * Class name to be added
   */
  rangePicker: PropTypes.bool,
}

DatePicker.defaultProps = {}
