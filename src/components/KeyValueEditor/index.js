import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Block } from '../Block/index'
import { Checkbox } from '../Checkbox/index'
import { Text } from '../Typography/index'
import { Icon } from '../Icon/index'
import { TextField } from '../Textfield/index'
import { Button } from '../Button/index'
import { GroupAndSearchDropdown } from '../GroupAndSearchDropdown/index'

/**
 * This component helps to generate a key value pair
 */

export const KeyValueEditor = ({ className = '', data, onChange, options, dropdownIcon }) => {
  if (!data && !data?.length) return null

  return (
    <div className={['sg contacto-keyvalueeditor', className].join(' ')}>
      <Block display="flex" gap={270} className="heading-item">
        <Text type="headline" variant="secondary">
          Key
        </Text>
        <Text type="headline" variant="secondary">
          Value
        </Text>
      </Block>
      {data.map((item, i) => {
        return (
          <Block key={i} gap={8} display="flex">
            <Block display="flex" gap={16}>
              <TextField
                className="textfield-width"
                value={item.key}
                placeholder="Key"
                onChange={(e) => {
                  item.key = e.target.value
                  onChange(data)
                }}
              />
              <GroupAndSearchDropdown
                dropdownIcon={dropdownIcon}
                value={item.value}
                options={options}
                className="textfield-width"
                placeholder="Value"
                onChange={(e) => {
                  item.value = e.target.value
                  onChange(data, e)
                }}
              />
            </Block>
            <Block display="flex" gap={24} className="key-controls">
              {data.length > 1 && (
                <Icon
                  name="delete"
                  className={`remove`}
                  color="gray-2"
                  onClick={() => {
                    data.splice(i, 1)
                    onChange(data)
                  }}
                />
              )}
              <div>
                <Checkbox
                  style={{ marginLeft: 4 }}
                  checked={/\|null}}/g.test(item.value)}
                  disabled={!/{{.+}}/g.test(item.value)}
                  onChange={(e) => {
                    if (e.target.checked)
                      item.value = item.value.replace(/{{(.+?)}}/g, '{{$1|null}}')
                    else item.value = item.value.replace(/\|null}}/g, '}}')
                    onChange(data)
                  }}
                >
                  Pass null value
                </Checkbox>
              </div>
            </Block>
          </Block>
        )
      })}
      <div>
        <Button
          icon="add"
          type="secondary"
          size="small"
          onClick={() =>
            data.push({
              key: '',
              value: '',
            }) && onChange(data)
          }
        />
      </div>
    </div>
  )
}

KeyValueEditor.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  data: PropTypes.array,
  options: PropTypes.array,
  onChange: PropTypes.func,
  dropdownIcon: PropTypes.any,
}

KeyValueEditor.defaultProps = {}
