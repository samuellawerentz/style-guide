import { AsYouType } from 'libphonenumber-js'
import React, { useEffect, useState, useRef } from 'react'
import { Block } from '../Block/index'
import { Icon } from '../Icon/index'
import { TextField } from '../Textfield/index'
import { Text } from '../Typography/index'

const CountryDropdown = ({
  visible,
  setVisible,
  onChange,
  textFieldRef,
  countryISO,
  value,
  flagURL,
  wrapperRef,
}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const listHolderRef = useRef()

  // Add a clickaway listener to close the dropdown while clicking outside
  useEffect(() => {
    const clickAwayListener = (e) => {
      if (wrapperRef.current?.contains(e.target) === false) setVisible(false)
    }
    document.body.addEventListener('click', clickAwayListener)
    return () => document.body.removeEventListener('click', clickAwayListener)
  }, [setVisible, wrapperRef])

  // Filter countries based on search Term
  const countriesList = window.contactoCountryData.filter(
    (country) => country[0].toLowerCase().indexOf(searchTerm) !== -1,
  )

  // Scroll to the selected country
  useEffect(() => {
    setSearchTerm('')
    setTimeout(() => {
      const position = listHolderRef.current.querySelector('.selected')
      if (visible && position?.offsetTop)
        listHolderRef.current?.scrollTo({ top: position.offsetTop - 150 })
    }, 50)
  }, [visible])

  return (
    <div>
      <Block className="sg-country-search">
        <TextField
          type="search-box"
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          value={searchTerm}
          allowClear
        />
      </Block>
      <div className="sg-country-list-holder" ref={listHolderRef}>
        {countriesList.length ? (
          countriesList.map((country, i) => (
            <Block
              key={i}
              className={`sg-country-list-item ${
                country[1] === countryISO.current ? 'selected' : ''
              }`}
              gap={8}
              onClick={() => {
                const asYouType = new AsYouType(country[1])
                value && asYouType.input(value)
                countryISO.current = country[1]
                onChange({ target: { value: `+${country[2]} ${asYouType.getNationalNumber()}` } })
                textFieldRef?.current.focus({ cursor: 'end' })
              }}
            >
              <Icon.Flag
                iso={country[1]}
                url={flagURL || '/style-guide/symbol-defs.svg'}
                circle
                size={20}
              />
              <Text ellipsis type="caption">
                {country[0]} (+{country[2]})
              </Text>
            </Block>
          ))
        ) : (
          <Block className="sg-country-list-item">No Countries found</Block>
        )}
      </div>
    </div>
  )
}

export default CountryDropdown
