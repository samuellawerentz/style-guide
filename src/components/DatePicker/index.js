import React, { forwardRef } from 'react'
import { DatePicker as AntDatePicker } from 'antd'
import moment from 'moment'
import PropTypes from 'prop-types'
import './datepicker.scss'

export const DatePicker = forwardRef(function DatePicker(
  { className = '', size, showToday, rangePicker, ...props },
  ref,
) {
  moment.updateLocale('en', {
    weekdaysMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  })
  const Component = rangePicker ? AntDatePicker.RangePicker : AntDatePicker
  return (
    <Component
      className={[
        'contacto-date-picker-field',
        'contacto-date-picker-field--' + size,
        className,
      ].join(' ')}
      {...props}
      dropdownClassName={[
        'contacto-date-picker-popup',
        showToday ? 'contacto-date-picker-popup--showToday' : '',
      ].join(' ')}
    />
  )
})

DatePicker.Option = AntDatePicker.Option

DatePicker.propTypes = {
  /**
   * Class name to be added
   */
  className: PropTypes.string,
  /**
   * How large should the input field be?
   */
  size: PropTypes.oneOf(['small', 'default', 'large']),
  /**
   * Show range picker
   */
  rangePicker: PropTypes.bool,
  /**
   * Highlight today's date
   */
  showToday: PropTypes.bool,
}

DatePicker.defaultProps = {
  size: 'default',
  showToday: false,
}
