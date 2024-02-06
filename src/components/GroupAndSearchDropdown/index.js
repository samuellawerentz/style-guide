/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import { Dropdown } from 'antd'
import PropTypes from 'prop-types'
import { Icon } from '../Icon/index'
import { Text } from '../Typography/index'
import { TextField } from '../Textfield/index'
import './groupAndSearchDropdown.scss'

function insertText(newText, e) {
  let cursorPosition = e.selectionStart
  let textBeforeCursorPosition = e.value.substring(0, cursorPosition)
  let textAfterCursorPosition = e.value.substring(cursorPosition, e.value.length)

  const shouldIncludeBraces = textBeforeCursorPosition?.split('')?.at(-1) !== '|'
  if (!shouldIncludeBraces) newText = newText.replace(/[{}]/g, '')

  return textBeforeCursorPosition.replace(/{{$/, '') + newText + textAfterCursorPosition
}

export const GroupAndSearchDropdown = ({
  options,
  onValueSelect,
  className,
  mode,
  onChange,
  dropdownIcon,
  openOnTextboxClick,
  ...props
}) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const textFieldRef = useRef()
  const searchRef = useRef()

  //To autofocus the search bar whenever the dropdown opens
  useEffect(() => {
    if (showDropdown) {
      setTimeout(() => searchRef.current.focus(), 100)
    }
  }, [showDropdown])

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
            autoFocus={true}
            ref={searchRef}
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
                <Text type="caption-bold" color="gray-2">
                  {option?.title}
                </Text>
              </div>
              {filteredOptions?.map((child, childIndex) => (
                <div
                  className="group-option"
                  key={childIndex}
                  onClick={() => {
                    const finalValue = `{{${child?.value}}}`
                    textFieldRef.current.focus()
                    onChange({
                      target: {
                        value:
                          mode === 'replacer'
                            ? finalValue
                            : insertText(finalValue, document.activeElement),
                      },
                      isSelection: true,
                    })
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

  return (
    <>
      <Dropdown
        overlay={<OptionsDropdown />}
        trigger={['click']}
        visible={showDropdown}
        placement="bottomRight"
        onVisibleChange={(visible) => setShowDropdown(visible)}
      >
        <div className={`group-dropdown`}>
          <TextField
            type={'text'}
            ref={textFieldRef}
            className={className}
            suffix={
              <div
                onClick={(e) => {
                  e.stopPropagation()
                  setShowDropdown(!showDropdown)
                }}
                className="contacto-icon--input-suffix-variable-dropdown"
              >
                <Icon svg={dropdownIcon} size={20} />
              </div>
            }
            onClick={(e) => !openOnTextboxClick && e.stopPropagation()}
            onKeyUp={(e) => {
              e.persist()
              const value = e.target.value
              // const keyPressed = String.fromCharCode(e.keyCode)
              const caretEnd = e.target.selectionEnd
              const keyPressed = value[caretEnd - 1]
              const openDropdown =
                value.slice(-2) === '{{' ||
                (keyPressed === '|' && /\{\{[\w|]+\|$/g.test(value.substring(0, caretEnd)))
              setShowDropdown(openDropdown)
            }}
            onChange={(e) => {
              // So that the event is not lost
              e.persist()
              const caretStart = e.target.selectionStart
              const caretEnd = e.target.selectionEnd
              onChange(e)

              // To preserve the caret position
              setTimeout(() => e.target.setSelectionRange?.(caretStart, caretEnd), 0)
            }}
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
  mode: PropTypes.string,
  onChange: PropTypes.func,
  dropdownIcon: PropTypes.any,
  openOnTextboxClick: PropTypes.bool,
}
