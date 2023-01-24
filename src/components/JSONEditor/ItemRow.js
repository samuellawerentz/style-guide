import { Checkbox } from '../Checkbox/index'
import { Icon } from '../Icon/index'
import { Select } from '../Select/index'
import { TextField } from '../Textfield/index'

import React from 'react'
import { Block } from '../Block/index'
import { DATA_TYPES, MODES } from './constants'
import { Text } from '../Typography/index'
import { GroupAndSearchDropdown } from '../GroupAndSearchDropdown/index'
import { arrayMove, SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc'
import { useRef } from 'react'

const DragHandle = SortableHandle((props) => (
  <Icon
    name="drag_indicator"
    size={20}
    color="gray-2"
    className={`remove ${props.className || ''}`}
  />
))

const SortableValue = SortableElement(
  ({ arr, valueArray, i, dropdownIcon, valueItem, updateValue, item, options, ...props }) => (
    <Block display="flex" className="value-group" gap={8} {...props}>
      <GroupAndSearchDropdown
        dropdownIcon={dropdownIcon}
        key={i}
        options={options}
        defaultValue={valueItem}
        onChange={(e) => {
          const value = e.target.value
          valueArray[i] = value
          updateValue(item, valueArray.join('|'))
        }}
        className="textfield-width"
        placeholder="Value"
      />
      <DragHandle className={`${arr.length > 1 ? '' : 'no-drag'}`} />
    </Block>
  ),
)

const SortableGroup = SortableContainer(
  ({ options, item, updateValue, valueArray, valueChangeRef, dropdownIcon }) => {
    return (
      <div>
        {valueArray.map((valueItem, index, arr) => {
          if (valueItem === 'null') return null

          return (
            <SortableValue
              key={index}
              index={index}
              arr={arr}
              i={index}
              valueArray={valueArray}
              dropdownIcon={dropdownIcon}
              valueItem={valueItem}
              updateValue={updateValue}
              item={item}
              options
            />
          )
        })}
      </div>
    )
  },
)

const ValueGroup = (props) => {
  const valueArray = props.item.response_value.split('|')
  return (
    <SortableGroup
      onSortEnd={({ oldIndex, newIndex }) => {
        const newArr = arrayMove(valueArray, oldIndex, newIndex)
        props.updateValue(props.item, newArr.join('|'))
      }}
      shouldCancelStart={() => {}}
      distance={5}
      useDragHandle
      lockAxis={true}
      valueArray={valueArray}
      valueChangeRef={props.valueChangeRef}
      {...props}
    />
  )
}

const KEY_WIDTH = 250

function ItemRow({
  item,
  siblings,
  idx,
  updateSelection,
  addItem,
  updateNodeType,
  removeNode,
  updateKey,
  updateValue,
  mode,
  dropdownIcon,
  options,
}) {
  const valueChangeRef = useRef(false)
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
            <ValueGroup
              options={options}
              item={item}
              updateValue={updateValue}
              valueChangeRef={valueChangeRef}
              dropdownIcon={dropdownIcon}
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
            <option value="string">String</option>
            <option value="number">Number</option>
            <option value="boolean">Boolean</option>
            <option value="object" disabled>
              Object
            </option>
            <option value="list" disabled>
              List
            </option>
            <option value="list of strings">List of Strings</option>
            <option value="list of booleans">List of Booleans</option>
            <option value="list of numbers">List of Numbers</option>
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
      {mode !== MODES.schema && (
        <>
          <Block
            className="add-value"
            display="flex"
            alignItems="center"
            gap={4}
            onClick={() => {
              setTimeout(() => {
                const hasNull = !!/\|?null\|?/g.exec(item.response_value)
                const isNullInBetween = item.response_value.split(/\|?null\|?/g).every(Boolean)
                const stringValue = String(
                  item.response_value.replace(/\|?null\|?/g, `${isNullInBetween ? '|' : ''}`),
                )

                valueChangeRef.current = false
                updateValue(item, `${hasNull ? stringValue + '||null' : item.response_value + '|'}`)
              }, 50)
            }}
          >
            <Icon name="add" size={20} color="primary-color" />
            <Text variant="primary">Add Value</Text>
          </Block>
          <Block className="remove">
            <Checkbox
              style={{ marginLeft: 16 }}
              checked={!!/\|?null\|?/g.exec(item.response_value)}
              onChange={(e) => {
                valueChangeRef.current = false
                if (e.target.checked) updateValue(item, item.response_value + '|null')
                else updateValue(item, item.response_value.replace(/\|?null\|?/g, ''))
              }}
            >
              Pass null value
            </Checkbox>
          </Block>
        </>
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
