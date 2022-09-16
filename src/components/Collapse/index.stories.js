import React from 'react'
import { Collapse } from './'

export default {
  title: 'Components/Collapse',
  component: Collapse,
  // argTypes: {
  //  type: {
  //    options:
  //    control: { type: 'select' },
  //  },
  // },
}

const Template = (args) => (
  <div className="yo">
    <Collapse defaultActiveKey="1" accordion>
      <Collapse.Panel key="1" header="API 1" sortable index={1}>
        Panel 1
      </Collapse.Panel>
      <Collapse.Panel key="2" header="API 2" sortable index={2}>
        Panel 2
      </Collapse.Panel>
    </Collapse>
  </div>
)

export const Default = Template
Default.args = {}
