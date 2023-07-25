import React from 'react'
import { AudioPlayer } from './'

export default {
  title: 'Components/Audio Player',
  component: AudioPlayer,
}

const Template = (args) => <AudioPlayer {...args} />

export const Default = Template.bind({})
Default.args = {
  url: '/sample-audio.mp3',
}
