export const getDisplayTime = (seconds) => {
  const int = +seconds / 60
  let minutes = parseInt(int)
  seconds = seconds % 60
  minutes = (minutes < 10 ? '0' : '') + minutes
  seconds = (seconds < 10 ? '0' : '') + seconds
  return minutes + ':' + seconds
}
