import { Checkbox } from '../Checkbox/index'
import { Select } from '../Select/index'

import React from 'react'
import { Text } from '../Typography/index'
import { Icon } from '../Icon/index'
import { Block } from '../Block/index'

const KEY_WIDTH = 200

const SelectDataType = ({ item, updateNodeType }) => {
  return (
    <Select value={item.data_type} onChange={(e) => updateNodeType(item, e)}>
      <option value="string">String</option>
      <option value="number">Number</option>
      <option value="boolean">Boolean</option>
      <option value="object" disabled>
        Object
      </option>
      <option value="list" disabled={item.data_type !== 'static list'}>
        List
      </option>
      <option value="static list" disabled={item.data_type !== 'list'}>
        Static List
      </option>
      <option value="list of strings">List of Strings</option>
      <option value="list of booleans">List of Booleans</option>
      <option value="list of numbers">List of Numbers</option>
    </Select>
  )
}

function ItemRow({ item, siblings, idx, updateSelection, updateNodeType, updateNode, options }) {
  return (
    <>
      <Block display="flex" alignItems="center" gap={16} style={{ width: '100%' }}>
        <div className="checkbox" style={{ transform: `translateX(-${32 * item.level}px)` }}>
          <Checkbox
            type="checkbox"
            checked={item.selected}
            onChange={(e) => updateSelection(siblings?.[idx], e.target.checked)}
          />
        </div>
        <div className="key" style={{ width: `${KEY_WIDTH - 32 * item.level}px` }}>
          <Text type="headline" ellipsis>
            {item.key}
          </Text>
          {item.parent?.parent?.data_type === 'static list' && !!item.response_value && (
            <Text type="caption" variant="secondary" ellipsis>
              {item.response_value}
            </Text>
          )}
        </div>
        <Block display="flex" gap={16} className="select-boxes">
          <SelectDataType item={item} updateNodeType={updateNodeType} />
          {!item.transformation ? (
            <>
              <div
                className="add-related-info"
                onClick={() =>
                  updateNode(item, {
                    transformation: {
                      api: null,
                      path: null,
                      search_key: null,
                      related_value: {
                        key: null,
                        data_type: null,
                        selected: item.selected,
                        transformation: null,
                        sub_object: null,
                      },
                    },
                  })
                }
              >
                {item.data_type !== 'object' &&
                  item.data_type !== 'list' &&
                  item.data_type !== 'static list' && (
                    <Icon
                      name="add_circle_outline"
                      size={20}
                      color="gray-1"
                      style={{ flexShrink: 0 }}
                    />
                  )}
              </div>
              <div></div>
              <span style={{ width: 20 }}></span>
            </>
          ) : (
            <>
              <Select
                options={options}
                placeholder="Select"
                value={
                  item.transformation.path
                    ? `${item.transformation.path}.${item.transformation.search_key}`
                    : null
                }
                onChange={(value, opt) => {
                  updateNode(item, {
                    transformation: {
                      ...item.transformation,
                      api: opt.api,
                      path: value.split('.').slice(0, -1).join('.'),
                      search_key: value.split('.').slice(-1).join(),
                    },
                  })
                }}
              />
              <Select
                placeholder="Select"
                options={options.reduce((acc, optItem) => {
                  acc.push(
                    ...optItem.options.filter((i) =>
                      i.value?.startsWith(item?.transformation?.path),
                    ),
                  )
                  return acc
                }, [])}
                disabled={!item.transformation.path}
                value={item.transformation.related_value.key}
                onChange={(value, opt) => {
                  updateNode(item, {
                    transformation: {
                      ...item.transformation,
                      related_value: {
                        ...item.transformation.related_value,
                        key: value,
                        data_type: opt.data_type,
                      },
                    },
                  })
                }}
              />
              <Icon
                name="playlist_remove"
                size={20}
                color="gray-1"
                hoverColor="danger-color"
                onClick={() => updateNode(item, { transformation: null })}
              />
            </>
          )}
        </Block>
      </Block>
      {item.transformation && item.transformation.related_value.key && (
        <Block className="item related-value" style={{ width: '100%' }}>
          <Block display="flex" alignItems="center" gap={16} style={{ width: '100%' }}>
            <div className="checkbox" style={{ transform: `translateX(-${32 * item.level}px)` }}>
              <Checkbox
                type="checkbox"
                checked={item.transformation.related_value.selected}
                onChange={(e) =>
                  updateSelection(item.transformation.related_value, e.target.checked)
                }
              />
            </div>
            <div className="key" style={{ width: `${KEY_WIDTH - 32 * item.level}px` }}>
              <Block display="flex" gap={4}>
                <Text type="headline" ellipsis style={{ width: 'auto' }}>
                  {item.transformation.related_value.key}
                </Text>
                <Icon
                  size={20}
                  name="link"
                  style={{ transform: 'rotate(90deg)' }}
                  color="secondary-color"
                />
              </Block>
            </div>
            <Block display="flex" gap={16} className="select-boxes">
              <SelectDataType
                item={item.transformation.related_value}
                updateNodeType={updateNodeType}
              />
              {/* Empty divs for the dynamic width */}
              <div></div>
              <div></div>
              <span style={{ width: 20 }}></span>
            </Block>
          </Block>
        </Block>
      )}
    </>
  )
}

export default ItemRow
