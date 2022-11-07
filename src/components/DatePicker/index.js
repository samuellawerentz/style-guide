import React, { forwardRef } from 'react'
import { DatePicker as AntDatePicker } from 'antd'
import moment from 'moment'
import PropTypes from 'prop-types'
import './datepicker.scss'
import { Text } from '../Typography/index'

export const DatePicker = forwardRef(function DatePicker(
  { className = '', size, label, showToday, rangePicker, ...props },
  ref,
) {
  moment.updateLocale('en', {
    weekdaysMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  })
  const Component = rangePicker ? AntDatePicker.RangePicker : AntDatePicker
  return (
    <div className={['contacto-date-picker-field-wrapper', className].join(' ')}>
      {label && (
        <Text className="contacto-date-picker-label" type="caption-bold">
          {label}
        </Text>
      )}
      <Component
        className={['contacto-date-picker-field', 'contacto-date-picker-field--' + size].join(' ')}
        dropdownClassName={[
          'contacto-date-picker-popup',
          showToday ? 'contacto-date-picker-popup--showToday' : '',
        ].join(' ')}
        {...props}
      />
    </div>
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
   * Show Label
   */
  label: PropTypes.string,
  /**
   * Highlight today's date
   */
  showToday: PropTypes.bool,
}

DatePicker.defaultProps = {
  size: 'default',
  label: null,
  showToday: false,
}
