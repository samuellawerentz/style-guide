import React from 'react'
import { Button } from '../Button'
import { Modal } from './'
import { useArgs } from '@storybook/client-api'

export default {
  title: 'Components/Modal',
  component: Modal,
  decorators: [
    (story) => {
      const [args, updateArgs] = useArgs()
      return (
        <div>
          <Button label="Open Modal" onClick={() => updateArgs({ visible: true })} />
          {story(args)}
        </div>
      )
    },
  ],
  // argTypes: {
  //  type: {
  //    options:
  //    control: { type: 'select' },
  //  },
  // },
}

const Template = (args) => {
  // eslint-disable-next-line no-unused-vars
  const [{ visible }, updateArgs] = useArgs()
  return <Modal {...args} cancelButtonProps={{ onClick: () => updateArgs({ visible: false }) }} />
}

export const Default = Template.bind()
Default.args = {
  visible: false,
  title: 'Simple Modal',
  children: 'Hello this is a sample content',
}
