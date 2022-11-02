/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import { Dropdown } from 'antd'
import PropTypes from 'prop-types'
import { Icon } from '../Icon/index'
import { Text } from '../Typography/index'
import { TextField } from '../Textfield/index'
import './groupAndSearchDropdown.scss'

export const GroupAndSearchDropdown = ({
  options,
  value = '',
  onValueSelect,
  className,
  ...props
}) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const textFieldRef = useRef()

  const OptionsDropdown = () => {
    const [searchString, setSearchString] = useState('')

    return (
      <div className="options-dropdown">
        <div className="search-box">
          <TextField
            type="search-box"
            placeholder="Search"
            onChange={({ target }) => {
              setSearchString(target.value)
            }}
          />
        </div>
        {options?.map((option, index) => {
          const filteredOptions = option?.children?.filter((item) =>
            item?.value?.toLowerCase().includes(searchString.toLowerCase()),
          )
          if (filteredOptions.length === 0) return null
          return (
            <>
              <div className="group-header" key={index}>
                <Text type="captions_bold" color="gray-2">
                  {option?.title}
                </Text>
              </div>
              {filteredOptions?.map((child, childIndex) => (
                <div
                  className="group-option"
                  key={childIndex}
                  onClick={() => {
                    const finalValue = `{{${child?.value}}}`
                    onValueSelect(finalValue)
                    setShowDropdown(false)
                    setSearchString('')
                  }}
                >
                  <Text type="caption">{child?.label}</Text>
                </div>
              ))}
            </>
          )
        })}
      </div>
    )
  }

  useEffect(() => {
    if (value[0] === '{' && value[1] === '{' && value?.length === 2) {
      setShowDropdown(true)
    } else setShowDropdown(false)
  }, [value])

  return (
    <>
      <Dropdown overlay={<OptionsDropdown />} trigger={['click']} visible={showDropdown}>
        <div className={`group-dropdown`}>
          <TextField
            type={'text'}
            ref={textFieldRef}
            className={className}
            suffix={
              <div
                onClick={() => {
                  setShowDropdown(!showDropdown)
                }}
                className="contacto-icon--input-suffix-variable-dropdown"
              >
                <Icon name="data_object" />
              </div>
            }
            value={value}
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
  onValueSelect: PropTypes.func,
}
