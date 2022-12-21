import { Checkbox } from '../Checkbox/index'
import { Icon } from '../Icon/index'
import { Select } from '../Select/index'
import { TextField } from '../Textfield/index'

import React from 'react'
import { Block } from '../Block/index'
import { DATA_TYPES, MODES } from './constants'
import { Text } from '../Typography/index'
import { GroupAndSearchDropdown } from '../GroupAndSearchDropdown/index'

const KEY_WIDTH = 250

function ItemRow({
  item,
  siblings,
  idx,
  updateSelection,
  addSubItem,
  addItem,
  updateNodeType,
  removeNode,
  updateKey,
  updateValue,
  mode,
  options,
}) {
  return (
    <>
      {mode === MODES.schema && (
        <div className="checkbox" style={{ transform: `translateX(-${32 * item.level}px)` }}>
          <Checkbox
            type="checkbox"
            checked={item.selected}
            onChange={(e) => updateSelection(siblings?.[idx], e.target.checked)}
          />
        </div>
      )}
      <div
        className="key"
        style={{ width: mode === MODES.schema ? `${KEY_WIDTH - 32 * item.level}px` : undefined }}
      >
        {mode !== MODES.schema ? (
          <TextField
            className="textfield-width"
            value={item.key}
            placeholder="Key"
            onChange={(e) => updateKey(item, e.target.value)}
          />
        ) : (
          <Text type="headline" ellipsis>
            {item.key}
          </Text>
        )}
      </div>
      {mode !== MODES.schema && (
        <div className="value">
          {item.data_type === DATA_TYPES.object || item.data_type === DATA_TYPES.list ? (
            <TextField className="textfield-width" disabled />
          ) : (
            <GroupAndSearchDropdown
              options={options}
              value={item.response_value ? String(item.response_value) : ''}
              onChange={(e) => updateValue(item, e.target.value)}
              onValueSelect={(value) => updateValue(item, value)}
              className="textfield-width"
              placeholder="Value"
            />
          )}
        </div>
      )}
      {mode === MODES.schema && (
        <div className="type">
          <Select
            value={item.data_type}
            style={{ width: 180 }}
            onChange={(e) => {
              updateNodeType(item, e)
            }}
          >
            <option value="list">List</option>
            <option value="string">String</option>
            <option value="object">Object</option>
            <option value="number">Number</option>
            <option value="boolean">Boolean</option>
          </Select>
        </div>
      )}
      {mode !== MODES.schema && siblings?.length > 1 && (
        <div
          className="remove"
          onClick={() => {
            removeNode(siblings, idx)
          }}
        >
          <Icon name="delete" size={20} color="gray-3" hoverColor="danger-color" />
        </div>
      )}
      {mode === MODES.noChildren && idx === siblings.length - 1 && (
        <Block className="add-item-container" spacing={[0, 16]}>
          <div className="add-item" onClick={() => addItem(siblings)}>
            <Icon name="add" size={20} color="primary-color" />
          </div>
        </Block>
      )}
    </>
  )
}

export default ItemRow
