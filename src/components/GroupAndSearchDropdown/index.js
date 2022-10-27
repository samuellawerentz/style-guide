/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react'
import _debounce from 'lodash/debounce'
import { Dropdown } from 'antd'
import PropTypes from 'prop-types'
import { Icon } from '../Icon'
import { Text } from '../Typography'
import { TextField } from '../Textfield/index'
import './groupAndSearchDropdown.scss'

export const GroupAndSearchDropdown = ({
  options,
  value = '',
  setValue = () => {},
  className,
  ...props
}) => {
  const [searchString, setSearchString] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)

  const handleSearchDebounce = useCallback(
    _debounce((value) => {
      setSearchString(value)
    }, 400),
    [],
  )

  function onSearchChange(value) {
    handleSearchDebounce(value)
  }

  const OptionsDropdown = ({ displayString }) => {
    const [dStr, setDStr] = useState(displayString)
    return (
      <div className="options-dropdown">
        <div className="search-box">
          <TextField
            type="search-box"
            placeholder="Search"
            value={dStr}
            onChange={(e) => {
              setDStr(e.target.value)
              onSearchChange(e.target.value)
            }}
          />
        </div>
        {options?.map((option, index) => (
          <>
            <div className="group-header" key={index}>
              <Text type="captions_bold" color="gray-2">
                {option?.title}
              </Text>
            </div>
            {option?.children
              ?.filter((item) => item?.value?.includes(searchString))
              .map((child, childIndex) => (
                <div
                  className="group-option"
                  key={childIndex}
                  onClick={() => {
                    setValue(value + child?.value)
                    setShowDropdown(false)
                    setSearchString('')
                  }}
                >
                  <Text type="caption">{child?.label}</Text>
                </div>
              ))}
          </>
        ))}
      </div>
    )
  }

  useEffect(() => {
    if (value.includes('{{')) setShowDropdown(true)
  }, [value])

  return (
    <>
      <Dropdown
        overlay={<OptionsDropdown displayString={searchString} />}
        trigger={['click']}
        visible={showDropdown}
      >
        <div className={`sg contacto-input-wrapper `}>
          <TextField
            type={'text'}
            className={className}
            suffix={
              <div
                onClick={() => {
                  if (showDropdown) setSearchString('')
                  setShowDropdown(!showDropdown)
                }}
                className="contacto-icon--input-suffix-variable-dropdown"
              >
                <Icon name="data_object" />
              </div>
            }
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            {...props}
          />
        </div>
      </Dropdown>
    </>
  )
}

GroupAndSearchDropdown.propTypes = {
  className: PropTypes.string,
  /**
   * Dropdown options
   */
  options: PropTypes.object,
  value: PropTypes.string,
  setValue: PropTypes.func,
}
