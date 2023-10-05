import React from 'react'
import { AudioPlayer } from './'

export default {
  title: 'Components/Audio Player',
  component: AudioPlayer,
}

const Template = (args) => <AudioPlayer {...args} />

export const Default = Template.bind({})
Default.args = {
  url: 'https://wavesurfer-js.org/wavesurfer-code/examples/audio/mono.mp3',
}

export const WithSpeed = Template.bind({})
WithSpeed.args = {
  url: 'https://wavesurfer-js.org/wavesurfer-code/examples/audio/mono.mp3',
  showSpeedInPopup: false,
}
