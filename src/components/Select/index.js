import React from 'react'
import { Select as AntSelect } from 'antd'
import { Text } from '../Typography/index'
import PropTypes from 'prop-types'
import './select.scss'
import { Icon } from '../Icon/index'
/**
 * This is used to select a value from the list of options
 */
export const Select = React.forwardRef(function Select(
  {
    label,
    icon,
    disabled,
    placeholder,
    readOnly,
    className,
    dropdownClassName,
    listHeight,
    size,
    onIconClick,
    loading,
    noShadow,
    ...props
  },
  ref,
) {
  return (
    <div className={'sg contacto-select-wrapper ' + className}>
      {label && (
        <div className="contacto-select-label-wrapper">
          <Text type="caption-bold">{label}</Text>
        </div>
      )}
      <AntSelect
        className={[
          'contacto-select',
          readOnly ? 'contacto-select--readonly' : '',
          noShadow ? 'contacto-select--no-shadow' : '',
          `contacto-select--${size}`,
        ]}
        ref={ref}
        disabled={readOnly || disabled}
        listHeight={listHeight || 220}
        placeholder={placeholder}
        dropdownClassName={['sg contacto-select-listbox', dropdownClassName].join(' ')}
        suffixIcon={
          loading ? (
            <Icon.Loading size={24} strokeWidth={2} />
          ) : (
            <span
              className="material-icons-round contacto-icon--select-caret"
              onClick={onIconClick}
            >
              expand_more
            </span>
          )
        }
        {...props}
      />
    </div>
  )
})

Select.Option = AntSelect.Option

Select.propTypes = {
  /**
   * How large should the textfield be?
   */
  size: PropTypes.oneOf(['small', 'default', 'large']),
  /**
   * Placeholder Text
   */
  placeholder: PropTypes.string,
  /**
   * Label for the Input
   */
  label: PropTypes.string,
  /**
   * Material UI icon name taken from https://fonts.google.com/icons
   */
  icon: PropTypes.string,
  /**
   * Disable the textfield
   */
  disabled: PropTypes.bool,
  /**
   * Show the value as readonly
   */
  readOnly: PropTypes.bool,
  /**
   * Class name to be added
   */
  className: PropTypes.string,
  /**
   * Class name to be added for the list-box
   */
  dropdownClassName: PropTypes.string,
  /**
   * Height of the dropdown listbox
   */
  listHeight: PropTypes.number,
  /**
   * Show the loader
   */
  loading: PropTypes.bool,
  /**
   * Click handler for the icon
   */
  onIconClick: PropTypes.func,
  /**
   * Set it to true to remove shadow
   */
  noShadow: PropTypes.bool,
}

Select.defaultProps = {
  size: 'default',
}
