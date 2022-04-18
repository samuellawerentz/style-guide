import React, { useState } from 'react'
import { TextField } from '../components/Textfield'
// import Radio from './components/Radio/index'

const colors = {
  'primary-color': '#0040E4',
  'primary-color-1': '#2461FF',
  'primary-color-2': '#628EFF',
  'primary-color-3': '#A1BBFF',
  'primary-color-4': '#E0E8FF',
  'primary-color-5': '#022FC6',
  'primary-color-6': '#000FB2',
  'primary-color-7': '#002072',
  'primary-color-8': '#001344',

  'secondary-color': '#8214F0',
  'secondary-color-1': '#9B43F3',
  'secondary-color-2': '#B472F6',
  'secondary-color-3': '#CDA1F9',
  'secondary-color-4': '#F3E7FE',

  'tertiary-color': '#2AD5EF',
  'tertiary-color-1': '#55DDF2',
  'tertiary-color-2': '#7FE6F5',
  'tertiary-color-3': '#AAEEF9',
  'tertiary-color-4': '#EAFBFD',

  'success-color': '#0CC857',
  'success-color-1': '#26D96E',
  'success-color-2': '#33E77B',
  'success-color-3': '#9EF7C2',
  'success-color-4': '#E3FDED',
  'success-color-5': '#E3FDED',

  'warning-color': '#FAA005',
  'warning-color-1': '#FBB337',
  'warning-color-2': '#FCC669',
  'warning-color-3': '#FDD99B',
  'warning-color-4': '#FEF5E6',
  'warning-color-5': '#FEF5E6',

  'danger-color': '#FF4747',
  'danger-color-1': '#FF6C6C',
  'danger-color-2': '#FF9191',
  'danger-color-3': '#FFB5B5',
  'danger-color-4': '#FFEDED',
  'danger-color-5': '#FF4747',
  'danger-color-6': '#FFEDED',

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
