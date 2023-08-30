import React, { useEffect, useState } from 'react'
import { Popover } from 'antd'
import { Button } from '../../Button/index'
import { RenderButtons } from '../helpers/utils'

const speeds = [0.8, 1, 1.2, 1.5, 1.7, 2, 2.5]
export default function PlaybackSpeedPopup({ waveSurfer }) {
  const [speed, setSpeed] = useState(waveSurfer?.getPlaybackRate())

  useEffect(() => {
    setSpeed(waveSurfer?.getPlaybackRate())
  }, [waveSurfer])

  return (
    <Popover
      overlayClassName="contacto-player-speed-popup"
      title="Playback Speed"
      content={() => (
        <RenderButtons
          speeds={speeds}
          waveSurfer={waveSurfer}
          setSpeed={setSpeed}
          parentClassName="contacto-player-speed-popup"
          buttonClassName="contacto-player-speed-popup"
        />
      )}
    >
      <Button className="contacto-player-speed-trigger" type="secondary">
        {speed}x
      </Button>
    </Popover>
  )
}
