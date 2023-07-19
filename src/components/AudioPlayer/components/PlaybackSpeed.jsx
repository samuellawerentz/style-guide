import React, { useEffect, useState } from 'react'
import { Popover } from 'antd'
import { Button } from '../../Button'

export default function PlaybackSpeed({ waveSurfer }) {
  const speeds = [0.5, 1, 1.5, 2, 2.5, 3]
  const [speed, setSpeed] = useState(waveSurfer?.getPlaybackRate())

  const handleSpeedChange = (speed) => {
    setSpeed(speed)
    waveSurfer?.setPlaybackRate(speed)
  }

  useEffect(() => {
    setSpeed(waveSurfer?.getPlaybackRate())
  }, [waveSurfer])

  return (
    <Popover
      overlayClassName="contacto-player-speed"
      title="Playback Speed"
      content={() => (
        <div>
          {speeds.map((speed) => (
            <Button
              key={speed}
              className="contacto-player-speed-button"
              type={speed === waveSurfer?.getPlaybackRate() ? 'primary' : 'table-action-link'}
              onClick={() => handleSpeedChange(speed)}
            >
              {speed}x
            </Button>
          ))}
        </div>
      )}
    >
      <Button type="link">{speed}x</Button>
    </Popover>
  )
}
