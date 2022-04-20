import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import { TextField } from '../Textfield/index'
import { Metadata, AsYouType, getCountryCallingCode } from 'libphonenumber-js'
import { Icon } from '../Icon/index'
import './styles.scss'
import { Popover } from 'antd'
import CountryDropdown from './country-dropdown'
/**
 * This is used to get phone number input
 */
const dialCodeMap = new Metadata().metadata.country_calling_codes
const regionNames = new Intl.DisplayNames(['en'], { type: 'region' })

// Store the countries data in window object, so that it can be used elsewhere
window.contactoCountryData = Array.from(
  new Set([
    'US',
    'GB',
    'FR',
    ...Object.values(dialCodeMap)
      .map((code) => code[0])
      .sort(),
  ]),
).map((iso) => [regionNames.of(iso), iso, getCountryCallingCode(iso)])

// Used to strip the numbers from the special characters
// If the comparision is equal, we remove the last string - this helps in backspace functionality
const stripSpecialChars = (a, b) => {
  const regex = /[(-)\s+]/g
  const str = a?.replace(regex, '')
  if (str?.length < 6 && str === b?.replace(regex, '')) return str?.substr(0, str.length - 1)
  return str
}

// Component
export const PhoneNumberInput = ({ value, onChange, className, flagURL, ...props }) => {
  const ref = useRef()
  const textFieldRef = useRef()
  const wrapperRef = useRef()
  const [visible, setVisible] = useState(false)
  const [number, setNumber] = useState(value)
  const countryRef = useRef()

  // Effect that handles the value change and formats the number accordingly
  useEffect(() => {
    setVisible(false)
    let newValue = stripSpecialChars(value, ref.current)
    const countryFromDialMap = dialCodeMap[newValue]?.[0]
    countryRef.current = countryFromDialMap || countryRef.current
    if (newValue && newValue[0] !== '+') newValue = '+' + newValue
    let finalNumber = newValue
    if (finalNumber?.length < 1) countryRef.current = null
    if (newValue && newValue.length > 3) {
      const a = new AsYouType(countryRef.current)
      a.input(newValue)
      countryRef.current = a.getCountry() || countryRef.current
      const nationalNumber = a.getNationalNumber()
      finalNumber =
        newValue &&
        `+${a.getCallingCode() || ''} ${new AsYouType(countryRef.current).input(nationalNumber)}`
    }
    ref.current = finalNumber
    setNumber(finalNumber)
  }, [value])
  return (
    <Popover
      placement="bottomLeft"
      trigger="click"
      visible={visible}
      zIndex={1000}
      content={
        <CountryDropdown
          visible={visible}
          setVisible={setVisible}
          onChange={onChange}
          textFieldRef={textFieldRef}
          countryISO={countryRef}
          value={number}
          flagURL={flagURL}
          wrapperRef={wrapperRef}
        />
      }
      overlayClassName="sg country-dropdown"
      getPopupContainer={() => wrapperRef.current}
    >
      <div ref={wrapperRef}>
        <TextField
          ref={textFieldRef}
          {...props}
          value={number}
          className={[
            className,
            'sg',
            'contacto-country-input',
            visible ? 'dropdown-open' : '',
          ].join(' ')}
          icon={
            <span className="country-flag-icon" onClick={() => setVisible(!visible)}>
              <Icon.Flag
                url={flagURL || '/style-guide/symbol-defs.svg'}
                iso={countryRef.current || 'unknown'}
                circle
                size={20}
              />
            </span>
          }
          onChange={({ target: { value } }) => {
            if (value.length > 8) {
              const a = new AsYouType()
              a.input(value)
              const isValidFormat = !!a.formatter.matchingFormats.length
              if (!isValidFormat) value = value.substr(0, value.length - 1)
            }
            onChange({ target: { value } })
          }}
        />
      </div>
    </Popover>
  )
}

PhoneNumberInput.propTypes = {
  className: PropTypes.string,
  /**
   * How large should the textfield be?
   */
  value: PropTypes.string,
  /**
   * Placeholder Text
   */
  placeholder: PropTypes.string,
  /**
   * Set to true, if you don't want the shadow.
   */
  onChange: PropTypes.any,
  flagURL: PropTypes.any,
}

PhoneNumberInput.defaultProps = {
  size: 'default',
  type: 'input',
}
