import React, { useState, useEffect } from 'react'
import { Progress } from 'antd'
import PropTypes from 'prop-types'

export const TimeLeftBar = ({
  duration,
  colorOne,
  colorTwo,
  colorThreshold,
  className,
  ...props
}) => {
  const [progressPercent, setProgressPercent] = useState(100)
  useEffect(() => {
    let startTime = new Date().getTime()

    const interval = setInterval(() => {
      const currentTime = new Date().getTime()
      const elapsedTime = currentTime - startTime

      if (elapsedTime >= duration) {
        clearInterval(interval)
      }
      // calculating the percentage of time left
      const percentage = 100 - (elapsedTime / duration) * 100

      if (percentage < 0) clearInterval(interval)
      setProgressPercent(percentage)
    }, 100) // Update every 100 milliseconds

    return () => clearInterval(interval)
  }, [])

  let progressBarColor
  if (colorThreshold !== undefined)
    progressBarColor = progressPercent <= colorThreshold ? colorTwo : colorOne
  else progressBarColor = colorOne

  return (
    <Progress
      className={className}
      percent={progressPercent}
      showInfo={false}
      strokeColor={`var(--${progressBarColor})`}
      reverse
      {...props}
    />
  )
}

TimeLeftBar.propTypes = {
  className: PropTypes.string,
  /**
   * This indicates how much time is left
   */
  duration: PropTypes.string,
  /**
   * This indicates initial color of the bar
   */
  colorOne: PropTypes.string,
  /**
   * This indicates color that changes after color one threshold
   */
  colorTwo: PropTypes.string,
  /**
   * This indicates when at what percentage the color one changes
   */
  colorThreshold: PropTypes.string,
}
