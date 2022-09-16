import { Checkbox } from '../Checkbox/index'
import { Icon } from '../Icon/index'
import { Select } from '../Select/index'
import { TextField } from '../Textfield/index'

import React, { useState } from 'react'
import { Dropdown, Menu } from 'antd'
import { Block } from '../Block/index'
import { MODES } from './constants'

const KeyMenu = ({ addItem, addSubItem }) => {
  return (
    <Menu>
      <div className="menu-container">
        <Block display="flex" gap={8} alignItems="center" onClick={addItem}>
          <Icon name="add" color="gray-1" />
          <div>Add key</div>
        </Block>
        <Block display="flex" gap={8} alignItems="center" onClick={addSubItem}>
          <Icon name="add" color="gray-1" />
          <div>Add Sub Key</div>
        </Block>
      </div>
    </Menu>
  )
}

function ItemRow({
  item,
  dataRef,
  idx,
  updateSelection,
  addSubItem,
  addItem,
  updateNodeType,
  removeNode,
  updateKey,
  updateValue,
  mode,
}) {
  //   const sub_object = dataRef[idx].sub_object
  const [dropdownVisible, setdropdownVisible] = useState(false)
  return (
    <>
      {mode === MODES.schema && (
        <div className="checkbox" style={{ transform: `translateX(-${32 * item.level}px)` }}>
          <Checkbox
            type="checkbox"
            checked={item.selected}
            onChange={(e) => updateSelection(dataRef?.[idx], e.target.checked)}
          />
        </div>
      )}
      {mode !== MODES.noChildren && (
        <Dropdown
          visible={dropdownVisible}
          onVisibleChange={(visible) => setdropdownVisible(visible)}
          trigger={['click']}
          overlay={
            <KeyMenu
              addItem={() => {
                setdropdownVisible(false)
                addItem(dataRef, dataRef[idx].parent)
              }}
              addSubItem={() => {
                addSubItem(dataRef, idx)
                setdropdownVisible(false)
              }}
            />
          }
          overlayClassName="key-menu"
        >
          <div className="add-item">
            <Icon name="add" size={20} color="primary-color" />
          </div>
        </Dropdown>
      )}
      <div className="key">
        <TextField value={item.key} onChange={(e) => updateKey(item, e.target.value)} />
      </div>
      {(mode === MODES.keyvalue || MODES.noChildren) && (
        <div className="value">
          <TextField
            disabled={item.display_format === 'object'}
            value={item.response_value}
            onChange={(e) => updateValue(item, e.target.value)}
          />
        </div>
      )}
      {mode === MODES.schema && (
        <div className="type">
          <Select
            value={item.display_format}
            style={{ width: 180 }}
            onChange={(e) => {
              updateNodeType(item, e)
            }}
          >
            <option value="array">Array</option>
            <option value="string">String</option>
            <option value="object">Object</option>
            <option value="number">Number</option>
            <option value="boolean">Boolean</option>
          </Select>
        </div>
      )}
      <div
        className="remove"
        onClick={() => {
          removeNode(dataRef, idx)
        }}
      >
        <Icon name="delete" size={20} color="gray-3" hoverColor="danger-color" />
      </div>
      {mode === MODES.noChildren && idx === dataRef.length - 1 && (
        <Block className="add-item-container" spacing={[0, 16]}>
          <div className="add-item" onClick={() => addItem(dataRef, dataRef[idx].parent)}>
            <Icon name="add" size={20} color="primary-color" />
          </div>
        </Block>
      )}
    </>
  )
}

export default ItemRow