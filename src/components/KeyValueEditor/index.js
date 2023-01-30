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
import { outputAdapter, inputAdapter } from './adapters'

/**
 * This component helps to generate a key value pair
 */

const ValueGroup = (props) => {
  return (
    <SortableGroup
      onSortEnd={({ oldIndex, newIndex }) =>
        props.changeHandler(
          () =>
            (props.item.value.valueArray = arrayMove(
              props.item.value.valueArray,
              oldIndex,
              newIndex,
            )),
        )
      }
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
  ({ options, valueItem, item, changeHandler, data, i, ...props }) => (
    <Block display="flex" className="value-group" gap={8} {...props}>
      <GroupAndSearchDropdown
        dropdownIcon={props.dropdownIcon}
        options={options}
        className="textfield-width"
        value={valueItem}
        mode="replacer"
        openOnTextboxClick={item.value.hasVariable}
        placeholder="Value"
        onChange={(e) =>
          changeHandler(() => {
            const shouldClear =
              !e.target.value && item.value.valueArray.filter(Boolean).length === 1
            item.value.valueArray[i] = e.target.value
            if (shouldClear) {
              item.value.hasVariable = false
              item.value.valueArray = []
            }
          })
        }
      />
      <DragHandle className={`${item.value.valueArray.length > 1 ? '' : 'hidden'}`} />
    </Block>
  ),
)

const SortableGroup = SortableContainer(({ item, ...props }) => {
  return (
    <div className="value-items">
      {item.value.valueArray.map((valueItem, i) => {
        return (
          <SortableValue key={i} index={i} i={i} item={item} {...props} valueItem={valueItem} />
        )
      })}
    </div>
  )
})

export const KeyValueEditor = ({ className = '', data, onChange, options, dropdownIcon }) => {
  if (!data && !data?.length) return null

  const transformedData = inputAdapter(JSON.parse(JSON.stringify(data)))

  const changeHandler = (fn) => {
    fn()
    onChange && onChange(outputAdapter(transformedData))
  }
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
      {transformedData.map((item, i) => {
        return (
          <Block key={i} gap={8} display="flex">
            <Block display="flex" gap={16}>
              <TextField
                className="textfield-width"
                value={item.key}
                placeholder="Key"
                onChange={(e) => changeHandler(() => (item.key = e.target.value))}
              />
              <ValueGroup
                item={item}
                changeHandler={changeHandler}
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
                onClick={() => changeHandler(() => transformedData.splice(i, 1))}
              />
              <Block
                className={`add-value ${item.value.hasVariable ? '' : 'disabled-btn'}`}
                display="flex"
                gap={4}
                onClick={() => changeHandler(() => item.value.valueArray.push(''))}
              >
                <Icon name="add" size={20} color="primary-color" />
                <Text variant="primary">Add Value</Text>
              </Block>
              <div>
                <Checkbox
                  style={{ marginLeft: 16 }}
                  checked={item.value.hasNull}
                  disabled={!item.value.hasVariable}
                  onChange={(e) => changeHandler(() => (item.value.hasNull = e.target.checked))}
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
            changeHandler(() =>
              transformedData.push({
                key: '',
                value: { valueArray: [''], hasNull: false, hasVariable: false },
              }),
            )
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
