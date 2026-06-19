import { Button, type ButtonProps } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Tooltip, type TooltipProps } from "../../ui/tooltip";

type Props = {
  children?: ReactNode;
  tooltipProps?: Omit<TooltipProps, "children">;
} & ButtonProps;

const ButtonWithTooltip = ({
  children,
  tooltipProps,
  ...buttonProps
}: Props) => {
  // tooltip의 disabled가 undefined이고 버튼의 disabled가 있으면 not 모드로 사용
  const tooltipDisabled =
    tooltipProps?.disabled ??
    (buttonProps.disabled !== undefined ? !buttonProps.disabled : undefined);

  return (
    <Tooltip
      disabled={tooltipDisabled}
      content={tooltipProps?.content ?? ""}
      showArrow={true}
      {...tooltipProps}
    >
      <Button {...buttonProps}>{children}</Button>
    </Tooltip>
  );
};

export default ButtonWithTooltip;
