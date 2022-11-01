import React, { forwardRef } from 'react'
import { DatePicker as AntDatePicker } from 'antd'
import moment from 'moment'
import PropTypes from 'prop-types'
import './datepicker.scss'

export const DatePicker = forwardRef(function DatePicker(
  { className = '', size, rangePicker, ...props },
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
   * Class name to be added
   */
  rangePicker: PropTypes.bool,
}

DatePicker.defaultProps = {}
