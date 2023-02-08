import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc'

import { Collapse as AntCollapse } from 'antd'
import { Icon } from '../Icon/index'

const { Panel } = AntCollapse
const DragHandle = SortableHandle(() => <Icon name="drag_indicator" size={24} color="gray-2" />)

/**
 * A wrapper on Antd collapse
 */
const SGCollapse = SortableContainer(({ className = '', ...props }) => (
  <AntCollapse
    {...props}
    className={['sg contacto-collapse', className].join(' ')}
    expandIcon={({ isActive }) => (
      <Icon
        name="expand_more"
        size={24}
        color="gray-1"
        style={{
          transform: `translateY(-50%) rotate(${isActive ? '180deg' : '0deg'})`,
        }}
      />
    )}
    expandIconPosition="right"
  ></AntCollapse>
))

export const Collapse = (props) => (
  <SGCollapse shouldCancelStart={() => {}} distance={5} useDragHandle lockAxis={true} {...props} />
)

const SortablePanel = SortableElement((props) => <Panel {...props} />)

const SGPanel = ({ className = '', sortable, disabled, header, ...props }) => {
  const panelProps = {
    className: ['sg contacto-panel', className].join(' '),
    header: (
      <div className="panel-header">
        {sortable && <DragHandle />}
        {header}
      </div>
    ),
    ...props,
  }
  if (sortable) return <SortablePanel {...panelProps} />
  return <Panel {...panelProps} />
}

Collapse.Panel = SGPanel

Collapse.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
}

Collapse.defaultProps = {}
