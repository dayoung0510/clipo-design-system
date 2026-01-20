import { CloseButton } from '../../atoms/close-button/close-button'
import { Button, Dialog, Portal, Spacer, Text } from '@chakra-ui/react'
import type {
  ButtonProps,
  DialogContentProps,
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
  modalContentProps?: DialogContentProps
  footer: {
    isHide?: boolean
    align?: 'end' | 'between'
    description?: string | ReactNode
    saveButton?:
      | ReactNode
      | (ButtonProps & { label?: string; isHide?: boolean; onSave?: () => void })
    cancelButton?:
      | ReactNode
      | (ButtonProps & { label?: string; isHide?: boolean; onCancel?: () => void })
  }
  trigger: TriggerProps
  size?: 'sm' | 'md' | 'lg'
} & Omit<DialogRootProps, 'open'>

type CancelButtonConfig = ButtonProps & {
  label?: string
  isHide?: boolean
  onCancel?: () => void
}

type SaveButtonConfig = ButtonProps & {
  label?: string
  isHide?: boolean
  onSave?: () => void
}

const BasicModal = ({
  trigger,
  footer,
  modalContentProps,
  children,
  size = 'md',
  ...props
}: BasicModalProps) => {
  const isControlled = 'open' in trigger
  const footerAlign = footer.align === 'between' ? 'space-between' : 'flex-end'

  const titles = Array.isArray(props.title) ? props.title : [props.title]
  const ariaLabels = titles.join(' ')
  const testIdPrefix = titles.join(' ').replace(/\s+/g, '-').replace(/--+/g, '-').toLowerCase()

  const renderCancelButton = () => {
    if (!footer.cancelButton) return null
    if (React.isValidElement(footer.cancelButton)) {
      return footer.cancelButton
    }
    const cancelCfg = footer.cancelButton as CancelButtonConfig
    if (cancelCfg.isHide) return null
    return (
      <Dialog.ActionTrigger
        asChild={!cancelCfg.onCancel} // onCancel 없으면 기본 닫기 동작
        onClick={() => {
          cancelCfg.onCancel?.()
        }}
      >
        <Button
          variant="outline"
          data-testid={`${testIdPrefix}-modal-cancel-button`}
          {...cancelCfg}
        >
          {cancelCfg.label || '취소'}
        </Button>
      </Dialog.ActionTrigger>
    )
  }

  const renderSaveButton = () => {
    if (!footer.saveButton) return null
    if (React.isValidElement(footer.saveButton)) {
      return footer.saveButton
    }
    const saveCfg = footer.saveButton as SaveButtonConfig
    if (saveCfg.isHide) return null
    return (
      <Button
        data-testid={`${testIdPrefix}-modal-save-button`}
        {...saveCfg}
        onClick={() => {
          saveCfg.onSave?.()
        }}
      >
        {saveCfg.label || '저장'}
      </Button>
    )
  }

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
          <Dialog.Content data-testid={`${testIdPrefix}-modal-content`} {...modalContentProps}>
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
            <Dialog.Body
              data-testid={`${testIdPrefix}-modal-body`}
              whiteSpace="pre-wrap"
              maxH="80dvh"
              overflow="auto"
            >
              {children}
            </Dialog.Body>

            {/* 푸터 */}
            {!footer.isHide && (
              <Dialog.Footer
                data-testid={`${testIdPrefix}-modal-footer`}
                justifyContent={footerAlign}
              >
                {/* 푸터 좌측 설명문구 */}
                {footer.description && (
                  <React.Fragment>
                    <Text textStyle="b2-medium-compact" color="fg.muted">
                      {footer.description}
                    </Text>
                    <Spacer />
                  </React.Fragment>
                )}
                {renderCancelButton()}
                {renderSaveButton()}
              </Dialog.Footer>
            )}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

export default BasicModal
