import { Button, ButtonGroup, Center, Dialog, Icon, Portal, Text, VStack } from '@chakra-ui/react'
import type {
  ButtonProps,
  ColorPalette,
  DialogContentProps,
  DialogRootProps,
  DialogTriggerProps,
  UseDisclosureReturn,
} from '@chakra-ui/react'
import { Children, type ReactNode } from 'react'
import type { IconType } from 'react-icons'
import { LuCircleCheckBig, LuTrash2 } from 'react-icons/lu'

/**
 *
 * * 특성: 상단에 아이콘이 있고, 하단버튼이 가로방향으로 배치됨
 * * 의미: 삭제, 저장, 변경 등 되돌릴 수 없는 액션에 대해 사용자의 의사를 재확인
 *
 * 선택 가능한 타입은 check, trash, custom(아이콘 및 컬러 커스텀)
 * custom 타입은 customColorPalette와 customIcon props 필수
 *
 */


type TriggerProps =
  | {
      triggerProps?: DialogTriggerProps
      triggerButton: ReactNode
    }
  | Pick<UseDisclosureReturn, 'open' | 'setOpen'>
  | Pick<UseDisclosureReturn, 'open' | 'onClose' | 'onOpen'>

type BaseConfirmModalProps = {
  modalType?: 'positive' | 'negative'
  customIcon?: IconType
  title: string
  description?: string
  cancelButton?: { label?: string; buttonProps?: ButtonProps }
  confirmButton?: { label?: string; onConfirm?: () => void; buttonProps?: ButtonProps }
  customButtons?: ReactNode[]
  modalContentProps?: DialogContentProps
  footerDescription?: string | ReactNode
  trigger: TriggerProps
} & Omit<DialogRootProps, 'open' | 'children'>

const iconColorSet = {
  positive: { colorPalette: 'blue', icon: LuCircleCheckBig },
  negative: { colorPalette: 'red', icon: LuTrash2 },
}

const ConfirmModal = ({ trigger, modalType = 'positive', ...props }: BaseConfirmModalProps) => {
  const isControlled = 'open' in trigger

  const colorPalette = iconColorSet[modalType].colorPalette
  const icon = props.customIcon ?? iconColorSet[modalType].icon

  const cancelText = props.cancelButton?.label ?? '취소'
  const confirmText = props.confirmButton?.label ?? '확인'

  return (
    <Dialog.Root
      role="dialog"
      placement="center"
      unmountOnExit={false}
      {...props}
      size="xs"
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
          <Dialog.Content px={5} py={7} {...props.modalContentProps}>
            <VStack w="full" rowGap={5}>
              {/* 아이콘 */}
              <Center bg={`${colorPalette}.subtle`} borderRadius="full" p={3}>
                <Icon as={icon} boxSize={5} color={`${colorPalette}.solid`} />
              </Center>

              <VStack w="full" rowGap={3} maxH="60dvh" overflow="auto">
                {/* 타이틀 */}
                <Text textStyle="t4-semibold" textAlign="center" whiteSpace="pre-wrap">
                  {props.title}
                </Text>

                {/* 설명 */}
                {props.description && (
                  <Text textStyle="b2-regular" textAlign="center" whiteSpace="pre-wrap">
                    {props.description}
                  </Text>
                )}
              </VStack>

              {/**
               *
               * 버튼영역
               *
               */}
              {!(props.customButtons ?? []).length && (
                <ButtonGroup w="full" columnGap={3} colorPalette={colorPalette}>
                  {/* 취소버튼 */}
                  <Dialog.ActionTrigger asChild>
                    <Button variant="outline" flex={1} {...props.cancelButton?.buttonProps}>
                      {cancelText}
                    </Button>
                  </Dialog.ActionTrigger>

                  {/* 확인버튼 */}
                  <Button
                    flex={1}
                    {...props.confirmButton?.buttonProps}
                    onClick={() => {
                      props.confirmButton?.onConfirm?.()
                    }}
                  >
                    {confirmText}
                  </Button>
                </ButtonGroup>
              )}

              {/* 커스텀 버튼들을 넘겨받은 경우 */}
              {!!(props.customButtons ?? []).length && (
                <ButtonGroup
                  w="full"
                  columnGap={3}
                  colorPalette={colorPalette}
                  css={{ '& button': { flex: 1 } }}
                >
                  {Children.toArray(props.customButtons)}
                </ButtonGroup>
              )}

              {/* 버튼 아래 설명 */}
              {props.footerDescription &&
                (typeof props.footerDescription === 'string' ? (
                  <Text textStyle="c-medium" color="fg.muted" textAlign="center">
                    {props.footerDescription}
                  </Text>
                ) : (
                  props.footerDescription
                ))}
            </VStack>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

export default ConfirmModal