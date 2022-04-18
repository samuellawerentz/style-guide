import { AsYouType } from 'libphonenumber-js'
import React, { useEffect, useState } from 'react'
import { Block } from '../Block'
import { Icon } from '../Icon'
import { TextField } from '../Textfield'
import { Text } from '../Typography'

const CountryDropdown = ({ visible, setVisible, onChange, textFieldRef, countryISO, value }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const clickAwayListener = (e) => {
    if (document.querySelector('.sg.contacto-country-input')?.contains(e.target) === false)
      setVisible(false)
  }
  useEffect(() => {
    document.body.addEventListener('click', clickAwayListener)
    return () => document.body.removeEventListener('click', clickAwayListener)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const countriesList = window.contactoCountryData.filter(
    (country) => country[0].toLowerCase().indexOf(searchTerm) !== -1,
  )
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
      <Block className="sg-country-list-holder">
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
                asYouType.input(value)
                countryISO.current = country[1]
                onChange({ target: { value: `+${country[2]} ${asYouType.getNationalNumber()}` } })
                textFieldRef?.current.focus({ cursor: 'end' })
              }}
            >
              <Icon.Flag iso={country[1]} url="/symbol-defs.svg" circle size={20} />
              <Text ellipsis type="caption">
                {country[0]} (+{country[2]})
              </Text>
            </Block>
          ))
        ) : (
          <Block className="sg-country-list-item">No Countries found</Block>
        )}
      </Block>
    </div>
  )
}

export default CountryDropdown
