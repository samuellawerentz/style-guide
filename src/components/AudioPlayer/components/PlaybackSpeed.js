/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Button } from '../../Button/index'

const speeds = [0.5, 1, 1.5, 2]
export default function PlaybackSpeed({ waveSurfer }) {
  const [speed, setSpeed] = useState(waveSurfer?.getPlaybackRate())

  const handleSpeedChange = (speed) => {
    setSpeed(speed)
    waveSurfer?.setPlaybackRate(speed)
  }

  useEffect(() => {
    setSpeed(waveSurfer?.getPlaybackRate())
  }, [waveSurfer])

  return (
    <div className="contacto-player-speed">
      {speeds.map((speed) => (
        <Button
          key={speed}
          className="contacto-player-speed-buttons"
          type={speed === waveSurfer?.getPlaybackRate() ? 'secondary' : 'table-action-link'}
          onClick={() => handleSpeedChange(speed)}
        >
          {speed}x
        </Button>
      ))}
    </div>
  )
}
