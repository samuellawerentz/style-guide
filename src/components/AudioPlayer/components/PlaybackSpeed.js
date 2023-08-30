/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { RenderButtons } from '../helpers/utils'

const speeds = [0.5, 1, 1.5, 2]

export default function PlaybackSpeed({ waveSurfer }) {
  const [speed, setSpeed] = useState(waveSurfer?.getPlaybackRate())

  useEffect(() => {
    setSpeed(waveSurfer?.getPlaybackRate())
  }, [waveSurfer])

  return (
    <RenderButtons
      speeds={speeds}
      waveSurfer={waveSurfer}
      setSpeed={setSpeed}
      parentClassName="contacto-player-speed"
      buttonClassName="contacto-player-speed-buttons"
    />
  )
}
