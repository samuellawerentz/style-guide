// eslint-disable-next-line import/no-webpack-loader-syntax
import css from '!!raw-loader!../style/variables.scss'

const cssVars = (() => {
  return css.match(/(--.*):/g).map((variable) => variable.replace('--', '').replace(':', ''))
})()

export default cssVars
