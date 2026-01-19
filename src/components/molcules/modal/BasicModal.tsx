import { CloseButton } from '../../atoms/close-button/close-button'
import { Button, Dialog, Portal, Spacer, Text } from '@chakra-ui/react'
import type {
  ButtonProps,
  DialogRootProps,
  DialogTriggerProps,
  UseDisclosureReturn,
} from '@chakra-ui/react'
import React from 'react'
import type { ReactNode } from 'react'

type TriggerProps =
  | {
      triggerProps?: DialogTriggerProps
      triggerButton: ReactNode
    }
  | Pick<UseDisclosureReturn, 'open' | 'setOpen'>
  | Pick<UseDisclosureReturn, 'open' | 'onClose' | 'onOpen'>

type BasicModalProps = {
  title: string | ReactNode
  footer: {
    isHide?: boolean
    align?: 'end' | 'between'
    infoText?: string | ReactNode
    saveButton?: ButtonProps & { label?: string; isHide?: boolean }
    cancelButton?: ButtonProps & { label?: string; isHide?: boolean }
  }
  trigger: TriggerProps
} & Omit<DialogRootProps, 'open'>

const BasicModal = ({ trigger, footer, children, size = 'md', ...props }: BasicModalProps) => {
  const isControlled = 'open' in trigger
  const footerAlign = footer.align === 'between' ? 'space-between' : 'flex-end'

  const titles = Array.isArray(props.title) ? props.title : [props.title]
  const ariaLabels = titles.join(' ')
  const testIdPrefix = titles.join(' ').replace(/\s+/g, '-').replace(/--+/g, '-').toLowerCase()

  return (
    <Dialog.Root
      role="dialog"
      placement="center"
      aria-label={ariaLabels} // 테스트시 dialog name 설정
      unmountOnExit={false}
      size={size}
      {...props}
      {...(isControlled && {
        open: trigger.open,
        onOpenChange: (e) => {
          if ('onOpen' in trigger && 'onClose' in trigger) {
            e.open ? trigger.onOpen() : trigger.onClose()
          } else if ('setOpen' in trigger) {
            trigger.setOpen(e.open)
          }
        },
      })}
    >
      {!isControlled && (
        <Dialog.Trigger asChild {...trigger.triggerProps}>
          {trigger.triggerButton}
        </Dialog.Trigger>
      )}
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content data-testid={`${testIdPrefix}-modal-content`}>
            {/* 상단 X버튼 */}
            <Dialog.CloseTrigger asChild={true}>
              <CloseButton colorPalette="gray" size="sm" />
            </Dialog.CloseTrigger>

            {/* 헤더 */}
            <Dialog.Header>
              {typeof props.title === 'string' ? (
                <Text textStyle="t4-semibold-compact">{props.title}</Text>
              ) : (
                props.title
              )}
            </Dialog.Header>

            {/* 바디 */}
            <Dialog.Body data-testid={`${testIdPrefix}-modal-body`}>{children}</Dialog.Body>

            {/* 푸터 */}
            {!footer.isHide && (
              <Dialog.Footer
                data-testid={`${testIdPrefix}-modal-footer`}
                justifyContent={footerAlign}
              >
                {/* 푸터 좌측 설명문구 */}
                {footer.infoText && (
                  <React.Fragment>
                    <Text textStyle="b2-medium-compact" color="fg.muted">
                      {footer.infoText}
                    </Text>
                    <Spacer />
                  </React.Fragment>
                )}
                {!footer.cancelButton?.isHide && (
                  <Dialog.ActionTrigger asChild>
                    <Button
                      variant="outline"
                      data-testid={`${testIdPrefix}-modal-cancel-button`}
                      {...footer.cancelButton}
                    >
                      {footer.cancelButton?.label || '취소'}
                    </Button>
                  </Dialog.ActionTrigger>
                )}
                {!footer.saveButton?.isHide && (
                  <Button data-testid={`${testIdPrefix}-modal-save-button`} {...footer.saveButton}>
                    {footer.saveButton?.label || '저장'}
                  </Button>
                )}
              </Dialog.Footer>
            )}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

export default BasicModal
