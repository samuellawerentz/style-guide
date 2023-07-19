import React from 'react'
import Text from 'antd/lib/typography/Text'

import { Button, Progress } from 'antd'
import { forwardRef } from 'react'
import PlayPauseIcon from './utils/PlayPauseIcon'
import { useWaveSurfer } from './utils/useWaveSurfer'
import { getDisplayTime } from './utils/getDisplayTime'
import './styles.scss'

const AudioPlayer = forwardRef((props, ref) => {
  const { className, url, size } = props
  const { waveSurfer, playerConfig, durationConfig } = useWaveSurfer(url)

  const { isPlaying, loading } = playerConfig
  const { totalDuration, currentDuration, loadingPercent } = durationConfig

  return (
    <div className={`contacto-audio-player ${className ?? ''}`} ref={ref}>
      {loading && (
        <div className="progress">
          <Text className={'loadText'}>Loading ({loadingPercent}%)</Text>
          <Progress
            strokeLinecap="butt"
            percent={loadingPercent}
            strokeColor={{ '0%': '#344', '100%': '#344' }}
          />
        </div>
      )}
      <div className="audio-controls">
        <Button
          className="audio-controls-play-pause"
          onClick={() => waveSurfer?.playPause()}
          icon={<PlayPauseIcon isPlaying={isPlaying} />}
        />
        <div className="audio-controls-time left">
          <span>
            <Text type="caption" className="timer">
              {getDisplayTime(currentDuration)}
            </Text>
          </span>
        </div>
        <div
          id={playerConfig.id}
          className={`audio-controls-wave-bar ${size === 'small' ? 'small-audio-surfer' : ''}`}
        />
        <div className="audio-controls-time right">
          <span>
            <Text type="caption" className="timer">
              {getDisplayTime(totalDuration)}
            </Text>
          </span>
        </div>
      </div>
    </div>
  )
})

AudioPlayer.displayName = 'AudioPlayer'
export default AudioPlayer
