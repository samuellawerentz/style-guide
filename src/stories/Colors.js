import React, { useState } from 'react'
import { TextField } from './components/textfield/TextField'
// import Radio from './components/Radio/index'

const colors = {
  'primary-color': '#193fc2',
  'primary-color-1': '#375EE5',
  'primary-color-2': '#708CED',
  'primary-color-3': '#A9BAF4',
  'primary-color-4': '#E2E8FB',
  'primary-color-5': '#133197',
  'primary-color-6': '#0E236C',
  'primary-color-7': '#081541',
  'primary-color-8': '#030716',
  'secondary-color': '#9B51E0',
  'secondary-color-1': '#AF74E6',
  'secondary-color-2': '#C397EC',
  'secondary-color-3': '#D7B9F3',
  'secondary-color-4': '#F5EEFC',

  'tertiary-color': '#6FCFC9',
  'tertiary-color-1': '#8CD9D4',
  'tertiary-color-2': '#A9E2DF',
  'tertiary-color-3': '#C5ECE9',
  'tertiary-color-4': '#F1FAFA',

  'success-color': '#27AE7D',
  'success-color-1': '#3DD39D',
  'success-color-2': '#6DDEB5',
  'success-color-3': '#9EE9CE',
  'success-color-4': '#CEF4E6',

  'warning-color': '#EBA000',
  'warning-color-1': '#FFB923',
  'warning-color-2': '#FFCA5A',
  'warning-color-3': '#FFDC91',
  'warning-color-4': '#FFEDC8',

  'danger-color': '#EB5757',
  'danger-color-1': '#EF7979',
  'danger-color-2': '#F39A9A',
  'danger-color-3': '#F7BCBC',
  'danger-color-4': '#FBDDDD',
  'danger-color-5': '#E41D1D',

  'pale-grey': '#e7ecf2',
  'gray-1': '#6A6E80',
  'gray-2': '#9B9FAA',
  'gray-3': '#B4B7BF',
  'gray-4': '#CDCFD5',
  'gray-5': '#E6E7EA',
  'gray-6': '#f3f3f4',
  'gray-7': '#51566b',

  // Text colors
  'primary-text-color': '#060E2B',
  'secondary-text-color': '#51566b',
  'inactive-text-color': '#989faa',

  // Border colors
  'border-color': '#e7ecf2',
  'border-color-1': '#E6E7EA',
  'input-border-color': 'var(--gray-5)',

  // Utility colors
  'dark-bg': '#f8f8fe',
  'radio-color-primary': '#93a3b5',
  'select-hover-primary': '#3c61cf',
  'backgrounds-lightest-gray': '#f3f3f3',
  'color-btn-primary-hover': '#e41d1d',
  'background-highlight-color': '#f6f8fe',
  'blurred-loader-background': '#ffffffad',

  // Miscellaneous colors
  'colors-graybase-gray-2': '#ccd4dc',
  'colors-graybase-gray-3': '#b4bdca',
  'colors-graybase-gray-5': '#5f7188',
  'colors-graybase-gray-6': '#212933',
  'colors-accent-teal-blue': '#5ac8fa',
  'duck-egg-blue': '#e9f1fc',
  'active-green': '#cef4e6',
}

export const ColorBox = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  //   const [cssVar, setCssVar] = useState('css')
  return (
    <div>
      <div
        className="search-bar"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <TextField
          placeholder="Search by hex code/name"
          type="search-box"
          label="Search"
          style={{ width: 280 }}
          onChange={({ target }) => setSearchTerm(target.value)}
        />
        {/* <div className="var-type">
          <Radio.Group value={cssVar} onChange={(e) => setCssVar(e.target.value)}>
            <Radio value="css">CSS</Radio>
            <Radio value="scss">SCSS</Radio>
          </Radio.Group>
        </div> */}
      </div>
      <div className="color-grid">
        {Object.keys(colors)
          .filter(
            (color) =>
              ~`${color.toLowerCase()}|${colors[color].toLowerCase()}`.indexOf(
                searchTerm.toLowerCase(),
              ),
          )
          .map((color, i) => {
            return (
              <div className="color-box" key={i}>
                <div className="color" style={{ background: colors[color] }}></div>
                <div className="color-name">--{color}</div>
                <div className="color-code">{colors[color]}</div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
