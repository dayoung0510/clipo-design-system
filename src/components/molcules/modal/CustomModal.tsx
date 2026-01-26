import { Dialog, Portal } from "@chakra-ui/react";
import type {
  DialogContentProps,
  DialogRootProps,
  DialogTriggerProps,
  UseDisclosureReturn,
} from "@chakra-ui/react";
import type { ReactNode } from "react";
import { CloseButton } from "../../atoms/close-button/close-button";

/**
 *
 * * 커스텀 요소가 강한 모달을 자유롭게 구현할 때 사용합니다.
 * * 특수한 경우가 아니라면 사용을 지양합니다.
 *
 */

type TriggerProps =
  | {
      triggerProps?: DialogTriggerProps;
      triggerButton: ReactNode;
    }
  | Pick<UseDisclosureReturn, "open" | "setOpen">
  | Pick<UseDisclosureReturn, "open" | "onClose" | "onOpen">;

type CustomModalProps = {
  trigger: TriggerProps;
  header?: ReactNode;
  footer?: ReactNode;
  modalContentProps?: DialogContentProps;
  showCloseIconButton?: boolean; // 상단 x아이콘 렌더링 여부
} & Omit<DialogRootProps, "open">;

const CustomModal = ({
  trigger,
  header,
  children,
  footer,
  size = "md",
  showCloseIconButton = true,
  ...props
}: CustomModalProps) => {
  const isControlled = "open" in trigger;

  return (
    <Dialog.Root
      role="dialog"
      placement="center"
      unmountOnExit={false}
      size={size}
      {...props}
      {...(isControlled && {
        open: trigger.open,
        onOpenChange: (e) => {
          if ("onOpen" in trigger && "onClose" in trigger) {
            e.open ? trigger.onOpen() : trigger.onClose();
          } else if ("setOpen" in trigger) {
            trigger.setOpen(e.open);
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
          <Dialog.Content {...props.modalContentProps}>
            {/* 상단 X버튼 */}
            {showCloseIconButton && (
              <Dialog.CloseTrigger asChild={true}>
                <CloseButton colorPalette="gray" size="sm" />
              </Dialog.CloseTrigger>
            )}

            {header && <Dialog.Header>{header}</Dialog.Header>}
            <Dialog.Body
              maxH="80dvh"
              overflow="auto"
              {...(!header && { pt: 6 })}
            >
              {children}
            </Dialog.Body>
            {footer && <Dialog.Footer>{footer}</Dialog.Footer>}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default CustomModal;
