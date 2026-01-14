import type { CSSProperties } from "react";

type TagVariant = "solid" | "outline" | "ghost";

export type TagProps = {
  label: string;
  variant?: TagVariant;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  onClick?: () => void;
};

const baseStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 4,
  padding: "2px 10px",
  borderRadius: 9999,
  fontSize: 12,
  fontWeight: 600,
  lineHeight: 1.4,
  userSelect: "none",
  transition: "filter 120ms ease",
};

const Tag = ({
  label,
  variant = "solid",
  color = "#1a202c",
  backgroundColor = "#e2e8f0",
  borderColor = "#cbd5e0",
  onClick,
}: TagProps) => {
  const resolvedStyle: CSSProperties = {
    ...baseStyle,
    color,
    backgroundColor: variant === "solid" ? backgroundColor : "transparent",
    border:
      variant === "outline"
        ? `1px solid ${borderColor}`
        : "1px solid transparent",
    cursor: onClick ? "pointer" : "default",
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <span
      style={resolvedStyle}
      onClick={handleClick}
      role={onClick ? "button" : undefined}
      aria-label={label}
    >
      {label}
    </span>
  );
};

export default Tag;
