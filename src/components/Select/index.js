import React, { useEffect, useState } from 'react'
import { Select as AntSelect } from 'antd'
import { Text } from '../Typography/index'
import PropTypes from 'prop-types'
import { Icon } from '../Icon/index'
import { Tag } from '../Tag/index'
import { Modal } from '../Modal/index'
import './select.scss'

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
    mode,
    maxTagCount,
    maxTagModalTitle,
    value,
    onChange,
    showCloseTag = true,
    ...props
  },
  ref,
) {
  const [open, setOpen] = useState(false)
  const [localValue, setLocalValue] = useState()
  const [showMaxTagModal, setShowMaxTagModal] = useState(false)
  const onMaxTagClick = (event) => {
    event.stopPropagation()
    setOpen(false)
    setShowMaxTagModal(true)
  }
  const onValueChange = (...params) => {
    onChange && onChange(...params)
    setLocalValue(params[0])
  }

  useEffect(() => {
    setLocalValue(value)
  }, [value])

  return (
    <div className={'sg contacto-select-wrapper ' + className}>
      {label && (
        <div className="contacto-select-label-wrapper">
          <Text type="caption-bold">{label}</Text>
        </div>
      )}
      {mode !== 'multiple' ? (
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
          value={localValue}
          onChange={onValueChange}
          {...props}
        />
      ) : (
        <>
          <AntSelect
            className={['contacto-multi-select', `contacto-multi-select--${size}`]}
            showArrow={false}
            ref={ref}
            disabled={readOnly || disabled}
            listHeight={listHeight || 220}
            placeholder={placeholder}
            dropdownClassName={['sg contacto-select-listbox', dropdownClassName].join(' ')}
            mode="multiple"
            maxTagCount={maxTagCount}
            tagRender={(tagProps) => (
              <Tag
                type="select"
                disableUppercase
                {...tagProps}
                closeIcon={showCloseTag}
                closable={showCloseTag}
              />
            )}
            maxTagPlaceholder={(values) => (
              <Text className="max-tag-placeholder" onClick={onMaxTagClick} type="caption">
                +{values.length} more
              </Text>
            )}
            open={open}
            onBlur={() => setOpen(false)}
            onClick={() => setOpen(true)}
            value={localValue}
            onChange={onValueChange}
            {...props}
          />
          <Modal
            className={[
              'contacto-multi-select-modal',
              maxTagModalTitle ? '' : 'contacto-multi-select-modal--no-title',
            ].join(' ')}
            title={maxTagModalTitle}
            visible={showMaxTagModal}
            onCancel={() => setShowMaxTagModal(false)}
            cancelButtonProps={null}
          >
            <div className="contacto-multi-select-wrapper">
              <AntSelect
                size="large"
                className="contacto-multi-select"
                showArrow={false}
                listHeight={listHeight || 220}
                placeholder={placeholder}
                tagRender={(tagProps) => (
                  <Tag
                    type="select"
                    disableUppercase
                    {...tagProps}
                    closeIcon={showCloseTag}
                    closable={showCloseTag}
                  />
                )}
                dropdownClassName={['sg contacto-select-listbox', dropdownClassName].join(' ')}
                mode="multiple"
                value={localValue}
                onChange={onValueChange}
                {...props}
                getPopupContainer={undefined}
                maxTagCount={null}
              />
            </div>
          </Modal>
        </>
      )}
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
  /**
   * Set it to multiple to get multiple box
   */
  mode: PropTypes.string,
  /**
   * Set Max tag count before getting ellipsis
   */
  maxTagCount: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf(['responsive'])]),
  /**
   * Title for max tag dialog
   */
  maxTagModalTitle: PropTypes.string,
  /**
   * Value of the select
   */
  value: PropTypes.any,
  /**
   * onChange handler for the select
   */
  onChange: PropTypes.func,
  /**
   * showCloseTag diable close icon on tags
   */
  showCloseTag: PropTypes.bool,
}

Select.defaultProps = {
  size: 'default',
  maxTagCount: null,
  maxTagModalTitle: 'Select items',
}
