import { useLayoutEffect, useRef, useState } from 'react'

import WaveSurfer from 'wavesurfer.js'
import { generateId } from './utils'

const defaultPlayerConfig = (playerId) => ({
  id: playerId,
  isPlaying: false,
  loading: true,
})
const defaultDurationConfig = () => ({
  totalDuration: 0,
  currentDuration: 0,
})
export default function useWaveSurfer(url) {
  const playerId = useRef(generateId('contacto-player-wave-')).current
  const [playerConfig, setPlayerConfig] = useState(defaultPlayerConfig(playerId))
  const [durationConfig, setDurationConfig] = useState(defaultDurationConfig())
  const waveSurferRef = useRef(null)

  useLayoutEffect(() => {
    let wave = null
    if (url) {
      wave = WaveSurfer.create({
        container: `#${playerId}`,
        url: url,
        waveColor: '#C3D2FF',
        progressColor: '#0040E4',
        cursorColor: '#0040E4',
        responsive: true,
        height: 24,
        barHeight: 3,
        barMinHeight: 1,
        barWidth: 1,
        barGap: 4,
        hideScrollbar: true,
        closeAudioContext: true,
        partialRender: true,
      })
      wave.on('load', () => {
        setPlayerConfig((prevConfig) => ({ ...prevConfig, loading: true }))
      })
      wave.on('ready', () => {
        setDurationConfig((prevConfig) => ({
          ...prevConfig,
          totalDuration: parseInt(wave.getDuration()),
        }))
        setPlayerConfig((prevConfig) => ({ ...prevConfig, loading: false }))
      })
      wave.on('audioprocess', () => {
        const duration = parseInt(wave.getCurrentTime())
        if (durationConfig?.currentDuration !== duration) {
          setDurationConfig((prevConfig) => ({
            ...prevConfig,
            currentDuration: duration,
          }))
        }
      })
      wave.on('play', () => {
        setPlayerConfig((prevConfig) => ({ ...prevConfig, isPlaying: true }))
      })
      wave.on('pause', () => {
        setPlayerConfig((prevConfig) => ({ ...prevConfig, isPlaying: false }))
      })
      wave.on('finish', () => {
        setPlayerConfig((prevConfig) => ({ ...prevConfig, isPlaying: false }))
      })
      window.wavesurfers = window.wavesurfers || []
      window.wavesurfers.push(wave)
      waveSurferRef.current = wave
    }
    return () => {
      wave?.stop()
      wave?.destroy()
      if (window.wavesurfers?.length) {
        const index = window.wavesurfers.indexOf(wave)
        if (index !== -1) {
          window.wavesurfers.splice(index, 1)
        }
      }
      setPlayerConfig(defaultPlayerConfig(playerId))
      setDurationConfig(defaultDurationConfig())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerId, url])

  return { playerConfig, durationConfig, waveSurferRef }
}
