import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Block } from '../Block/index'
import { Checkbox } from '../Checkbox/index'
import { Text } from '../Typography/index'
import { Icon } from '../Icon/index'
import { TextField } from '../Textfield/index'
import { Button } from '../Button/index'
import { arrayMove, SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc'
import { GroupAndSearchDropdown } from '../GroupAndSearchDropdown/index'
// import { arrayMove, SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc'
//import { Component } from 'antd'
//import { Text } from '../Typography/index'

/**
 * This component helps to generate a key value pair
 */

const ValueGroup = (props) => {
  return (
    <SortableGroup
      onSortEnd={({ oldIndex, newIndex }) => {
        props.item.value = arrayMove(props.item.value, oldIndex, newIndex)
        props.onChange?.(props.data)
      }}
      shouldCancelStart={() => {}}
      distance={5}
      useDragHandle
      lockAxis={true}
      {...props}
    />
  )
}

const DragHandle = SortableHandle((props) => (
  <Icon
    name="drag_indicator"
    size={20}
    color="gray-2"
    className={`remove ${props.className || ''}`}
  />
))

const SortableValue = SortableElement(
  ({ options, valueItem, item, onChange, data, i, ...props }) => (
    <Block display="flex" className="value-group" gap={8} {...props}>
      <GroupAndSearchDropdown
        dropdownIcon={props.dropdownIcon}
        options={options}
        className="textfield-width"
        value={valueItem}
        placeholder="Value"
        onChange={(e) => {
          item.value[i] = e.target.value
          onChange?.(data)
        }}
      />
      <DragHandle className={`${item.value.length > 1 ? '' : 'hide'}`} />
    </Block>
  ),
)

const SortableGroup = SortableContainer(({ item, ...props }) => {
  return (
    <div className="value-items">
      {item.value.map((valueItem, i) => {
        return (
          <SortableValue key={i} index={i} i={i} item={item} {...props} valueItem={valueItem} />
        )
      })}
    </div>
  )
})

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
                  onChange?.(data)
                }}
              />
              <ValueGroup
                item={item}
                onChange={onChange}
                data={data}
                options={options}
                dropdownIcon={dropdownIcon}
              />
            </Block>
            {/* <ValueGroup options={options} item={item} /> */}
            <Block display="flex" gap={12} className="key-controls">
              <Icon
                name="delete"
                className={`remove ${data.length > 1 ? '' : 'hide'}`}
                color="gray-2"
                onClick={() => {
                  data.splice(i, 1)
                  onChange?.(data)
                }}
              />
              <Block
                className="add-value"
                display="flex"
                gap={4}
                onClick={() => {
                  item.value.push('')
                  onChange?.(data)
                }}
              >
                <Icon name="add" size={20} color="primary-color" />
                <Text variant="primary">Add Value</Text>
              </Block>
              <div>
                <Checkbox style={{ marginLeft: 16 }}>Pass null value</Checkbox>
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
          onClick={() => {
            data.push({ key: '', value: [''] })
            onChange?.(data)
          }}
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
