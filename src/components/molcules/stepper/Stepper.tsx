import { Circle, HStack, Icon, Text } from "@chakra-ui/react";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { LuChevronRight } from "react-icons/lu";
import ButtonWithTooltip from "../buttonWithTooltip/ButtonWithTooltip";

type StepperNavigation =
  | { to: string; onClick?: never } // 클릭 시 이동할 경로
  | { onClick: () => void; to?: never }; // 직접 navigate 를 호출하는 경우에 사용

export type StepperStep<TValue extends string = string> = {
  value?: TValue; // activeValue 와 매칭해 활성 스텝을 판단하고, 콜백에서 어떤 스텝인지 구분할 때도 사용
  label: string;
  /**
   * 뱃지 영역에 순번 숫자 대신 표시할 아이콘. 미지정 시 1부터 시작하는 순번 숫자 표시
   */
  icon?: ElementType; // 뱃지 영역에 순번 숫자 대신 표시할 아이콘. 미지정 시 1부터 시작하는 순번 숫자 표시
  disabled?: boolean;
  tooltipMessage?: ReactNode; // disabled 상태에서만 노출할 툴팁 메시지
} & StepperNavigation;

type StepperProps<TValue extends string> = {
  steps: StepperStep<TValue>[];
  activeValue: TValue; // 현재 활성화된 스텝의 value. 내부에서 해당 인덱스를 찾아 활성 표시
} & Omit<ComponentPropsWithoutRef<typeof HStack>, "children">;

const ACTIVE_BOX_SHADOW = "0 0 0 1px var(--chakra-colors-blue-500, #365eef)";

const interactiveCss = {
  "&:hover [data-badge]": {
    background: "blue.subtle",
    color: "blue.solid",
  },
  "&:hover [data-label]": {
    color: "blue.solid",
  },
} as const;

const Stepper = <TValue extends string>({
  steps,
  activeValue,
  ...rest
}: StepperProps<TValue>) => {
  const matchedIndex = steps.findIndex((step) => step.value === activeValue);
  const activeIndex = matchedIndex < 0 ? 0 : matchedIndex; // 매칭 실패 시 첫 스텝 활성화

  return (
    <HStack role="tablist" gap={0} {...rest}>
      {steps.map((step, idx) => {
        const isActive = idx === activeIndex;
        const isInteractive =
          !isActive && !step.disabled && (!!step.to || !!step.onClick);

        const linkProps = isInteractive
          ? step.to
            ? { as: "a" as const, to: step.to }
            : {
                as: "button" as const,
                type: "button" as const,
                onClick: step.onClick,
              }
          : { as: "div" as const };

        const stepContent = (
          <HStack
            {...linkProps}
            role="tab"
            aria-selected={isActive}
            aria-disabled={step.disabled || undefined}
            opacity={step.disabled ? 0.5 : 1}
            columnGap={2}
            py={3}
            pl={3}
            pr={4}
            borderRadius="lg"
            border="1px solid"
            borderColor={isActive ? "blue.solid" : "border.emphasized"}
            boxShadow={isActive ? ACTIVE_BOX_SHADOW : "none"}
            bg="white"
            cursor={
              step.disabled
                ? "not-allowed"
                : isInteractive
                ? "pointer"
                : "default"
            }
            transition="all 0.15s"
            textDecoration="none"
            css={isInteractive ? interactiveCss : undefined}
          >
            <Circle
              data-badge
              w={5}
              h={5}
              flexShrink={0}
              bg={isActive ? "fg.info" : "bg.muted"}
              color={isActive ? "white" : "fg.muted"}
              fontSize="12px"
              fontWeight="semibold"
              lineHeight="125%"
              transition="all 0.15s"
              aria-hidden="true"
            >
              {idx + 1}
            </Circle>
            <Text
              data-label
              textStyle="b2-semibold-compact"
              color={isActive ? "fg.info" : "fg.muted"}
              whiteSpace="nowrap"
              transition="color 0.15s"
            >
              {step.label}
            </Text>
          </HStack>
        );

        const wrappedStepContent =
          step.disabled && step.tooltipMessage ? (
            <ButtonWithTooltip
              disabled
              unstyled
              as="div"
              tooltipProps={{ content: step.tooltipMessage }}
            >
              {stepContent}
            </ButtonWithTooltip>
          ) : (
            stepContent
          );

        return (
          <HStack key={step.value ?? step.label} columnGap={0}>
            {idx > 0 && (
              <Icon
                as={LuChevronRight}
                mx={2}
                boxSize={4}
                color="fg.muted"
                aria-hidden="true"
              />
            )}
            {wrappedStepContent}
          </HStack>
        );
      })}
    </HStack>
  );
};

export default Stepper;

// eslint-disable-next-line react-refresh/only-export-components
export const buildSteps = <const TValue extends string>(
  steps: StepperStep<TValue>[]
): StepperStep<TValue>[] => steps;
