import React, { useEffect, useState } from 'react'
import { Dropdown } from 'antd'
import PropTypes from 'prop-types'
import { Icon } from '../Icon'
import { Text } from '../Typography'
import { TextField } from '../Textfield/index'
import './groupAndSearchDropdown.scss'

export const GroupAndSearchDropdown = ({ options, onSearchChange, className, ...props }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [value, setValue] = useState('')

  const OptionsDropdown = () => {
    return (
      <div className="options-dropdown">
        <div className="search-box">
          <TextField type="search-box" placeholder="Search" onChange={onSearchChange} />
        </div>
        {options.map((option, index) => (
          <>
            <div className="group-header" key={index}>
              <Text type="captions_bold" color="gray-2">
                {option?.title}
              </Text>
            </div>
            {option?.children?.map((child, childIndex) => (
              <div
                className="group-option"
                key={childIndex}
                onClick={() => {
                  setValue(child)
                  setShowDropdown(false)
                }}
              >
                <Text type="caption">{child}</Text>
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
      <Dropdown overlay={OptionsDropdown} trigger={['click']} visible={showDropdown}>
        <div className={`sg contacto-input-wrapper `}>
          <TextField
            type={'text'}
            className={className}
            suffix={
              <div
                onClick={() => setShowDropdown(!showDropdown)}
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
  /**
   * To handle the search textbox change
   */
  onSearchChange: PropTypes.func,
}
