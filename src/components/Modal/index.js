import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Modal as AntModal } from 'antd'
import { Block } from '../Block/index'
import { Button } from '../Button/index'
import { Text } from '../Typography/index'

export const FooterBlock = (props) => {
  return (
    <Block
      className="contacto-modal-footer-block"
      display="flex"
      justifyContent={'space-between'}
      {...props}
    >
      {props.children}
    </Block>
  )
}

/**
 * Used to display a modal on the UI
 */
export const Modal = ({
  className = '',
  title,
  footerButtons,
  okButtonProps,
  cancelButtonProps,
  width,
  footerProps = {},
  ...props
}) => {
  return (
    <AntModal
      className={['sg contacto-modal', className].join(' ')}
      title={<Text type="title-3">{title}</Text>}
      width={width}
      footer={
        footerButtons?.length ? (
          <FooterBlock {...footerProps}>{footerButtons.map((button) => button)}</FooterBlock>
        ) : (
          (okButtonProps || cancelButtonProps) && (
            <FooterBlock {...footerProps}>
              <Button
                {...cancelButtonProps}
                label={cancelButtonProps?.label || 'Cancel'}
                type={cancelButtonProps?.type || 'secondary'}
              />
              <Button {...okButtonProps} label={okButtonProps?.label || 'Okay'} />
            </FooterBlock>
          )
        )
      }
      {...props}
    />
  )
}

Modal.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  /**
   * Footer Buttons Array, if not specified the default footer buttons will appear
   *
   * To Remove the footer, pass null values to both okButtonProps and cancelButtonProps
   */
  footerButtons: PropTypes.array,
  /**
   * Props for the footer, default to {}
   */
  footerProps: PropTypes.object,
  /**
   * Props for the default Okay button
   */
  okButtonProps: PropTypes.object,
  /**
   * Props for the cancel button
   */
  cancelButtonProps: PropTypes.object,
  /**
   * Title of the Modal
   */
  title: PropTypes.any,
  /**
   * Width of the Modal
   */
  width: PropTypes.number,
}

Modal.defaultProps = {
  closable: false,
  width: 430,
  title: 'Simple Modal',
  cancelButtonProps: {
    type: 'secondary',
  },
}
