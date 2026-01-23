import { CloseButton } from '../../atoms/close-button/close-button'
import { ButtonGroup, Center, Dialog, Icon, Portal, Text, VStack } from '@chakra-ui/react'
import type {
  DialogContentProps,
  DialogRootProps,
  DialogTriggerProps,
  UseDisclosureReturn,
} from '@chakra-ui/react'
import { Children, type ReactNode } from 'react'
import type { IconType } from 'react-icons'
import { LuCrown } from 'react-icons/lu'

/**
 *
 * * 특성: 상단에 아이콘이 있고, 하단버튼이 세로방향 full size로 배치됨
 * * 의미: 가입 인사와 같은 가벼운 안내 콘텐츠
 *
 */

type TriggerProps =
  | {
      triggerProps?: DialogTriggerProps
      triggerButton: ReactNode
    }
  | Pick<UseDisclosureReturn, 'open' | 'setOpen'>
  | Pick<UseDisclosureReturn, 'open' | 'onClose' | 'onOpen'>

type StatusModalProps = {
  title: string
  description?: string
  buttons: ReactNode | ReactNode[]
  customIcon?: IconType
  modalContentProps?: DialogContentProps
  footerDescription?: string | ReactNode
  trigger: TriggerProps
} & Omit<DialogRootProps, 'open' | 'children'>

const StatusModal = ({ trigger, customIcon = LuCrown, ...props }: StatusModalProps) => {
  const isControlled = 'open' in trigger
  const colorPalette = 'blue'

  return (
    <Dialog.Root
      role="dialog"
      placement="center"
      unmountOnExit={false}
      {...props}
      size="sm"
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
          {/* 상단 X버튼 */}
          <Dialog.Content px={7} py={8} {...props.modalContentProps}>
            <Dialog.CloseTrigger asChild={true}>
              <CloseButton colorPalette="gray" size="sm" />
            </Dialog.CloseTrigger>

            <VStack w="full" rowGap={5}>
              {/* 아이콘 */}
              <Center
                bg={`${colorPalette}.solid`}
                borderWidth="6px"
                borderColor={`${colorPalette}.subtle`}
                borderRadius="full"
                w="60px"
                h="60px"
              >
                <Icon as={customIcon} boxSize={5} color={`${colorPalette}.contrast`} />
              </Center>

              <VStack w="full" rowGap={3} maxH="60dvh" overflow="auto">
                {/* 타이틀 */}
                <Text textStyle="t2-semibold-compact" textAlign="center" whiteSpace="pre-wrap">
                  {props.title}
                </Text>

                {/* 설명 */}
                {props.description && (
                  <Text textStyle="b1-regular" textAlign="center" whiteSpace="pre-wrap">
                    {props.description}
                  </Text>
                )}
              </VStack>

              {/* 하단버튼 */}
              <ButtonGroup
                w="full"
                size="lg"
                flexDirection="column"
                rowGap={3}
                colorPalette={colorPalette}
                css={{
                  '& button': {
                    alignSelf: 'stretch',
                    borderRadius: 'full',
                  },
                }}
              >
                {Children.toArray(props.buttons)}
              </ButtonGroup>

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

export default StatusModal