import { CloseButton } from "../../atoms/close-button/close-button";
import { Button, Dialog, HStack, Portal, Spacer, Text } from "@chakra-ui/react";
import type {
  ButtonProps,
  DialogContentProps,
  DialogRootProps,
  DialogTriggerProps,
  UseDisclosureReturn,
} from "@chakra-ui/react";
import React from "react";
import type { ReactNode } from "react";

type TriggerProps =
  | {
      triggerProps?: DialogTriggerProps;
      triggerButton: ReactNode;
    }
  | Pick<UseDisclosureReturn, "open" | "setOpen">
  | Pick<UseDisclosureReturn, "open" | "onClose" | "onOpen">;

type BasicModalProps = {
  title: string | ReactNode;
  modalContentProps?: DialogContentProps;
  footer: {
    isHide?: boolean;
    align?: "end" | "between";
    description?: string | ReactNode;
    saveButton?:
      | ReactNode
      | (ButtonProps & {
          label?: string;
          isHide?: boolean;
          onSave?: () => void;
        });
    cancelButton?: ButtonProps & { label?: string; isHide?: boolean };
    customButton?:
      | ReactNode
      | (ButtonProps & {
          label?: string;
          isHide?: boolean;
          onClick?: () => void;
        });
  };
  trigger: TriggerProps;
  size?: "sm" | "md" | "lg";
} & Omit<DialogRootProps, "open">;

type CancelButtonConfig = ButtonProps & {
  label?: string;
  isHide?: boolean;
  onCancel?: () => void;
};

type SaveButtonConfig = ButtonProps & {
  label?: string;
  isHide?: boolean;
  onSave?: () => void;
};

type CustomButtonConfig = ButtonProps & {
  label?: string;
  isHide?: boolean;
  onClick?: () => void;
};

const BasicModal = ({
  trigger,
  footer,
  modalContentProps,
  children,
  size = "md",
  ...props
}: BasicModalProps) => {
  const isControlled = "open" in trigger;

  const titles = Array.isArray(props.title) ? props.title : [props.title];
  const ariaLabels = titles.join(" ");
  const testIdPrefix = titles
    .join(" ")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .toLowerCase();

  const renderCancelButton = () => {
    if (footer.cancelButton && React.isValidElement(footer.cancelButton)) {
      return footer.cancelButton;
    }

    const cancelCfg: CancelButtonConfig =
      footer.cancelButton && !React.isValidElement(footer.cancelButton)
        ? (footer.cancelButton as CancelButtonConfig)
        : {};

    // onCancel이 있으면 수동 처리(닫기 없음), 없으면 기본 닫힘 트리거
    if (cancelCfg.onCancel) {
      const { onCancel, ...rest } = cancelCfg;
      return (
        <Button
          variant="outline"
          hidden={cancelCfg.isHide}
          data-testid={`${testIdPrefix}-modal-cancel-button`}
          onClick={() => onCancel()}
          {...rest}
        >
          {cancelCfg.label || "취소"}
        </Button>
      );
    }

    return (
      <Dialog.ActionTrigger asChild>
        <Button
          variant="outline"
          hidden={cancelCfg.isHide}
          data-testid={`${testIdPrefix}-modal-cancel-button`}
          {...cancelCfg}
        >
          {cancelCfg.label || "취소"}
        </Button>
      </Dialog.ActionTrigger>
    );
  };

  const renderSaveButton = () => {
    if (footer.saveButton && React.isValidElement(footer.saveButton)) {
      return footer.saveButton;
    }

    const saveCfg: SaveButtonConfig =
      footer.saveButton && !React.isValidElement(footer.saveButton)
        ? (footer.saveButton as SaveButtonConfig)
        : {};

    return (
      <Button
        data-testid={`${testIdPrefix}-modal-save-button`}
        {...saveCfg}
        hidden={saveCfg.isHide}
        onClick={(e) => {
          saveCfg.onSave?.();
          saveCfg.onClick?.(e);
        }}
      >
        {saveCfg.label || "저장"}
      </Button>
    );
  };

  // footer.customButton이 있는 경우에는 cancelButton을 무시하고 customButton을 렌더링
  const renderCustomButton = () => {
    if (footer.customButton && React.isValidElement(footer.customButton)) {
      return footer.customButton;
    }

    const customCfg: CustomButtonConfig =
      footer.customButton && !React.isValidElement(footer.cancelButton)
        ? (footer.customButton as CustomButtonConfig)
        : {};

    return (
      <Button
        hidden={customCfg.isHide}
        data-testid={`${testIdPrefix}-modal-cancel-button`}
        {...customCfg}
      >
        {customCfg.label || "취소"}
      </Button>
    );
  };

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
          <Dialog.Content
            data-testid={`${testIdPrefix}-modal-content`}
            {...modalContentProps}
          >
            {/* 상단 X버튼 */}
            <Dialog.CloseTrigger asChild={true}>
              <CloseButton colorPalette="gray" size="sm" />
            </Dialog.CloseTrigger>

            {/* 헤더 */}
            <Dialog.Header>
              {typeof props.title === "string" ? (
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
              <Dialog.Footer data-testid={`${testIdPrefix}-modal-footer`}>
                {footer.description && (
                  <>
                    <Text textStyle="b2-medium-compact" color="fg.muted">
                      {footer.description}
                    </Text>
                    <Spacer />
                    <HStack columnGap={3}>
                      {footer.customButton
                        ? renderCustomButton()
                        : renderCancelButton()}
                      {renderSaveButton()}
                    </HStack>
                  </>
                )}

                {!footer.description && footer.align === "between" && (
                  <>
                    {footer.customButton
                      ? renderCustomButton()
                      : renderCancelButton()}
                    <Spacer />
                    {renderSaveButton()}
                  </>
                )}

                {!footer.description &&
                  (footer.align === "end" || !footer.align) && (
                    <>
                      <Spacer />
                      {footer.customButton
                        ? renderCustomButton()
                        : renderCancelButton()}
                      {renderSaveButton()}
                    </>
                  )}
              </Dialog.Footer>
            )}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default BasicModal;
