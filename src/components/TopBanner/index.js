import React from 'react'
import { Block } from '../Block/index'
import { Icon } from '../Icon/index'
import { Text } from '../Typography/index'
import './topbanner.scss'

export const BannerType = ['warning', 'danger', 'success', 'default']
export const TopBanner = ({
  type = 'default',
  content,
  buttons,
  loading,
  visible,
  loadingText = 'Loading',
}) => {
  return visible ? (
    <Block
      className={`top-banner ${type}`}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {loading && (
        <Block>
          <Icon.Loading size={16} trackColor="white" />
        </Block>
      )}
      <Text color="white">{loading ? loadingText : content}</Text>
      {!loading && buttons && (
        <Block display="flex" className="top-banner-buttons-container">
          {buttons.map((button) => button)}
        </Block>
      )}
    </Block>
  ) : null
}
