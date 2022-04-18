import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Spin } from 'antd'
import { Icon } from '../Icon/index'
import { Block } from '../Block/index'
import { Text } from '../Typography/index'

/**
 * This is a backdrop container, that can be used to show loaders and other components with a backdrop.
 *
 * It internally uses Ant Spin component.
 *
 * This renders a loading screen by default, pass content to customize the content
 *
 * Please visit ant Spin docs for more props and details - https://ant.design/components/spin/#API
 */
export const Backdrop = ({
  className = '',
  content,
  visible,
  spinning,
  size,
  tip,
  loaderColor,
  blur,
  ...props
}) => {
  return (
    <Spin
      wrapperClassName={['sg contacto-backdrop', blur ? 'contacto-backdrop-blur' : '', className]
        .join(' ')
        .trim()}
      spinning={visible}
      indicator={<ContentBlock {...{ content, size, loaderColor, tip }} />}
      {...props}
    />
  )
}

const ContentBlock = (props) => (
  <Block className="contacto-backdrop-block" display="flex">
    {props.content || (
      <Block.Column className="contacto-backdrop-block-loader">
        <Icon.Loading size={props.size} color={props.loaderColor} />
        {props.tip && (
          <Text.Block type="title-2" spacing={[0, 16]}>
            {props.tip}
          </Text.Block>
        )}
      </Block.Column>
    )}
  </Block>
)

Backdrop.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  /**
   * Content that needs to be displayed on the center
   */
  content: PropTypes.any,
  /**
   * Is the backdrop activated?
   */
  visible: PropTypes.bool,
  /**
   * Size of the loading icon
   */
  size: PropTypes.number,
  /**
   * Help text that needs to be shown beneath the loader
   */
  tip: PropTypes.string,
  /**
   * Color of the loading Icon
   */
  loaderColor: PropTypes.string,
  spinning: PropTypes.bool,
  /**
   * Should the background be blurred?
   */
  blur: PropTypes.bool,
}

Backdrop.defaultProps = {
  size: 36,
  visible: false,
}
