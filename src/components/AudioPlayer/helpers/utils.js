import React from 'react'
import { Button } from '../../Button/index'

export const getDisplayTime = (seconds) => {
  const int = +seconds / 60
  let minutes = parseInt(int)
  seconds = seconds % 60
  minutes = (minutes < 10 ? '0' : '') + minutes
  seconds = (seconds < 10 ? '0' : '') + seconds
  return minutes + ':' + seconds
}

export const generateId = (prefix) => {
  return `${prefix}${Math.random().toString(36).slice(2)}`
}

export const handleSpeedChange = (speed, waveSurfer, setSpeed) => {
  setSpeed(speed)
  waveSurfer?.setPlaybackRate(speed)
}

export const getType = (speed, waveSurfer) => {
  return speed === waveSurfer?.getPlaybackRate() ? 'secondary' : 'table-action-link'
}

export const RenderButtons = ({
  speeds,
  waveSurfer,
  setSpeed,
  parentClassName,
  buttonClassName,
}) => {
  return (
    <div className={parentClassName}>
      {speeds.map((speed) => (
        <Button
          key={speed}
          className={buttonClassName}
          type={getType(speed, waveSurfer)}
          onClick={() => handleSpeedChange(speed, waveSurfer, setSpeed)}
        >
          {speed}x
        </Button>
      ))}
    </div>
  )
}
