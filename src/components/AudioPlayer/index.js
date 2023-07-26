import React from 'react'
import Text from 'antd/lib/typography/Text'
import { forwardRef } from 'react'
import PlayPauseIcon from './components/PlayPauseIcon'
import useWaveSurfer from './helpers/useWaveSurfer'
import PlaybackSpeed from './components/PlaybackSpeed'
import { Button } from '../Button/index'
import { Icon } from '../Icon/index'
import { getDisplayTime } from './helpers/utils'
import './styles.scss'

// TODO: @Ritik Add Error Boundaries
const AudioPlayer = forwardRef((props, ref) => {
  const { className, url } = props
  const { waveSurfer, playerConfig, durationConfig } = useWaveSurfer(url)

  const { isPlaying, loading } = playerConfig
  const { totalDuration, currentDuration } = durationConfig

  return (
    <div
      className={`contacto-audio-player ${className ?? ''} ${loading ? 'loading' : ''}`}
      ref={ref}
    >
      <div className="audio-controls">
        <Button
          className="audio-controls-play-pause"
          type="default"
          icon={loading ? <Icon.Loading size={30} /> : <PlayPauseIcon isPlaying={isPlaying} />}
          onClick={() => !loading && waveSurfer?.playPause()}
        />
        <div className="audio-controls-time left">
          <Text type="caption">{getDisplayTime(currentDuration)}</Text>
        </div>
        <div id={playerConfig?.id} className="audio-controls-wave-bar" />
        <div className="audio-controls-time right">
          <Text type="caption">{getDisplayTime(totalDuration)}</Text>
        </div>
        <PlaybackSpeed waveSurfer={waveSurfer} />
      </div>
    </div>
  )
})

AudioPlayer.displayName = 'AudioPlayer'
export { AudioPlayer }