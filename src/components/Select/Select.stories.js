import React from 'react'
import { Select } from '.'

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    size: {
      options: ['small', 'default', 'large'],
      control: { type: 'select' },
    },
  },
  decorators: [(story) => <div style={{ width: '280px' }}>{story()}</div>],
}

const Template = (args) => {
  return <Select {...args} />
}

export const Default = Template.bind({})
Default.args = {
  type: 'input',
  size: 'default',
  placeholder: 'A simple text field',
  options: [
    { value: 'Apple' },
    { value: 'Ball' },
    { value: 'Cat' },
    { value: 'Duck' },
    { value: 'Egg' },
    { value: 'Fish' },
    { value: 'Goat' },
    { value: 'Hen' },
  ],
}

export const LoadingState = Template.bind({})
LoadingState.args = {
  type: 'input',
  size: 'default',
  loading: true,
  placeholder: 'A simple text field',
  options: [
    { value: 'Apple' },
    { value: 'Ball' },
    { value: 'Cat' },
    { value: 'Duck' },
    { value: 'Egg' },
    { value: 'Fish' },
    { value: 'Goat' },
    { value: 'Hen' },
  ],
}

export const WithSearch = Template.bind({})
WithSearch.args = {
  type: 'input',
  size: 'default',
  placeholder: 'A simple text field',
  showSearch: true,
  options: [
    { value: 'Apple' },
    { value: 'Ball' },
    { value: 'Cat' },
    { value: 'Duck' },
    { value: 'Egg' },
    { value: 'Fish' },
    { value: 'Goat' },
    { value: 'Hen' },
  ],
}

export const SearchWithClear = Template.bind({})
SearchWithClear.args = {
  type: 'input',
  size: 'default',
  placeholder: 'A simple text field',
  showSearch: true,
  allowClear: true,
  options: [
    { value: 'Apple' },
    { value: 'Ball' },
    { value: 'Cat' },
    { value: 'Duck' },
    { value: 'Egg' },
    { value: 'Fish' },
    { value: 'Goat' },
    { value: 'Hen' },
  ],
}

export const SmallSize = Template.bind({})
SmallSize.args = {
  size: 'small',
  placeholder: 'A small select',
  showSearch: true,
  allowClear: true,
  options: [
    { value: 'Apple' },
    { value: 'Ball' },
    { value: 'Cat' },
    { value: 'Duck' },
    { value: 'Egg' },
    { value: 'Fish' },
    { value: 'Goat' },
    { value: 'Hen' },
  ],
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  type: 'input',
  size: 'default',
  placeholder: 'A textfield with an icon',
  icon: 'search',
  label: 'An example label',
}

export const Disabled = Template.bind({})
Disabled.args = {
  type: 'input',
  size: 'default',
  placeholder: 'An disabled textfield',
  disabled: true,
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  type: 'input',
  size: 'default',
  placeholder: 'A read-only textfield',
  value: 'Read only',
  readOnly: true,
}

export const MultipleSelect = Template.bind({})
MultipleSelect.args = {
  type: 'input',
  size: 'default',
  placeholder: 'A multi select textfield',
  mode: 'multiple',
  maxTagCount: 'responsive',
  maxTagModalTitle: 'Select items',
  showCloseTag: true,
  options: [
    { value: 'Apple' },
    { value: 'Ball' },
    { value: 'Cat' },
    { value: 'Duck' },
    { value: 'Tea' },
    { value: 'Coffee' },
    { value: 'Milk' },
    { value: 'Butter' },
  ],
}
