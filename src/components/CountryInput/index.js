import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import { TextField } from '../Textfield/index'
import { Metadata, AsYouType, getCountryCallingCode } from 'libphonenumber-js'
import { Icon } from '../Icon'
import './styles.scss'
import { Popover } from 'antd'
import CountryDropdown from './country-dropdown'
/**
 * This is used to get text input from the user
 */
const dialCodeMap = new Metadata().metadata.country_calling_codes
const regionNames = new Intl.DisplayNames(['en'], { type: 'region' })
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
const stripSpecialChars = (a, b) => {
  const regex = /[(-)\s+]/g
  const str = a?.replace(regex, '')
  if (str?.length < 6 && str === b?.replace(regex, '')) return str?.substr(0, str.length - 1)
  return str
}
export const CountryInput = ({ value, onChange, className, ...props }) => {
  const ref = useRef()
  const textFieldRef = useRef()
  const [visible, setVisible] = useState(false)
  const [number, setNumber] = useState(value)
  const countryRef = useRef()
  useEffect(() => {
    setVisible(false)
    let newValue = stripSpecialChars(value, ref.current)
    const countryFromDialMap = dialCodeMap[newValue]?.[0]
    countryRef.current = countryFromDialMap || countryRef.current
    if (newValue && newValue[0] !== '+') newValue = '+' + newValue
    let finalNumber = newValue
    if (finalNumber.length < 1) countryRef.current = null
    if (newValue && newValue.length > 4) {
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
      content={
        <CountryDropdown
          visible={visible}
          setVisible={setVisible}
          onChange={onChange}
          textFieldRef={textFieldRef}
          countryISO={countryRef}
          value={number}
        />
      }
      overlayClassName="sg country-dropdown"
      getPopupContainer={() => document.querySelector('.contacto-country-input')}
    >
      <TextField
        ref={textFieldRef}
        {...props}
        value={number}
        className={[className, 'sg', 'contacto-country-input'].join(' ')}
        icon={
          <span className="country-flag-icon" onClick={() => setVisible(!visible)}>
            {countryRef.current ? (
              <Icon.Flag url="/symbol-defs.svg" iso={countryRef.current} circle size={20} />
            ) : (
              'flag_circle'
            )}
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
    </Popover>
  )
}

CountryInput.propTypes = {
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
   * Label for the Input
   */
  label: PropTypes.string,
  /**
   * Material UI icon name taken from https://fonts.google.com/icons
   */
  icon: PropTypes.any,
  /**
   * Disable the textfield
   */
  disabled: PropTypes.bool,
  /**
   * Show the value as readonly
   */
  readOnly: PropTypes.bool,
  /**
   * Set to true, if you don't want the shadow.
   */
  onChange: PropTypes.any,
  /**
   * Is it a password field?
   */
  password: PropTypes.bool,
}

CountryInput.defaultProps = {
  size: 'default',
  type: 'input',
}
