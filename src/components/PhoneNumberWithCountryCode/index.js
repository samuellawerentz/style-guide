import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { TextField } from '../Textfield/index'
import { Select } from '../Select/index'
import { Icon } from '../Icon/index'
import { isValidPhoneNumber } from 'libphonenumber-js'
import { Block } from '../Block/index'
const { Option } = Select

export const PhoneNumberWithCodeInput = React.forwardRef(function PhoneNumberWithCodeInput({
  inputType = 'text',
  label,
  placeholder,
  className = '',
  defaultCode,
  defaultNumber,
  onChange,
  fieldGap,
  iconUrl,
  codeLabel,
  phoneNumberLabel,
  ...props
}) {
  const [countryCode, setCountryCode] = useState(defaultCode || '+1')
  const [phoneNumber, setPhoneNumber] = useState(defaultNumber)

  const handleChange = (event, type) => {
    if (type === 'countryCode') {
      setCountryCode(event)
    } else {
      const value = event?.target?.value
      if (Number(value) || value === '') setPhoneNumber(value)
    }
  }

  useEffect(() => {
    const checkNumberValidity = isValidPhoneNumber(`${countryCode}${phoneNumber}`)

    onChange({
      showError: checkNumberValidity || false,
      phoneNumber: phoneNumber,
      countryCode: countryCode,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phoneNumber, countryCode])

  return (
    <div className="flex-direction" style={{ gap: fieldGap || '12px' }}>
      <Select
        suffixIcon={null}
        dropdownMatchSelectWidth={240}
        showSearch
        label={codeLabel}
        {...props}
        style={{ width: '100px' }}
        value={countryCode}
        optionLabelProp="selectionLabel"
        onChange={(event) => handleChange(event, 'countryCode')}
      >
        {window.contactoCountryData.map((country) => {
          return (
            <Option
              key={`+${country[0]}`}
              value={`+${country[2]}`}
              selectionLabel={
                <>
                  <Icon.Flag
                    url={iconUrl || '/symbol-defs.svg'}
                    iso={country[1] || 'unknown'}
                    circle
                    size={20}
                  />
                  <span>+{country[2]}</span>
                </>
              }
            >
              {
                <Block display="flex" alignItems="center" gap={8}>
                  <Icon.Flag
                    url={iconUrl || '/symbol-defs.svg'}
                    iso={country[1] || 'unknown'}
                    circle
                    size={20}
                  />
                  <span>+{country[2]}</span>
                </Block>
              }
            </Option>
          )
        })}
      </Select>

      <TextField
        {...props}
        value={phoneNumber}
        label={phoneNumberLabel}
        onChange={(event) => handleChange(event, 'phoneNumber')}
      />
    </div>
  )
})

PhoneNumberWithCodeInput.propTypes = {
  /**
   * This indicates the type of input, i.e., password, text etc.
   */
  inputType: PropTypes.string,
  className: PropTypes.string,
  /**
   * How large should the PhoneNumberWithCodeInput be?
   */
  size: PropTypes.oneOf(['small', 'default', 'large']),
  /**
   * Placeholder Text
   */
  placeholder: PropTypes.string,
  /**
   * Enter maximum length input should hold
   */
  maxLength: PropTypes.number,
  /**
   * Label for the Input
   */
  label: PropTypes.string,
  /**
   * Material UI icon name taken from https://fonts.google.com/icons
   */

  disabled: PropTypes.bool,
  /**
   * Show the value as readonly
   */
  readOnly: PropTypes.bool,
  /**
   * Set to true, if you don't want the TextArea.
   */
  defaultCode: PropTypes.string || PropTypes.number,
  /**
   * Set default number
   */
  defaultNumber: PropTypes.string || PropTypes.number,
  /**
   * Set value and error on change
   */
  onChange: PropTypes.any,
  /**
   * Set gap between fields
   */
  fieldGap: PropTypes.string,
  /**
   * Set URL for flag icon
   */
  iconUrl: PropTypes.any,
  /**
   * Set Lable for Phone Number input
   */
  phoneNumberLabel: PropTypes.string,
  /**
   * Set Label for Country Code input
   */
  codeLabel: PropTypes.string,
}

PhoneNumberWithCodeInput.defaultProps = {
  size: 'default',
  type: 'input',
}
