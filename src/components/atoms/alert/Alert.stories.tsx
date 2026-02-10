import type { Meta, StoryObj } from "@storybook/react";
import { HStack, Icon } from "@chakra-ui/react";
import { LuInfo } from "react-icons/lu";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Atoms/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "시스템, 기능 또는 페이지에 영향을 주는 상태를 사용자에게 전달할 때 사용합니다.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: 800 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: {
      description: "알림 제목. string 또는 ReactNode.",
      table: { category: "Main", type: { summary: "string | ReactNode" } },
    },
    children: {
      description: "본문/설명 영역. ReactNode.",
      table: { category: "Main", type: { summary: "ReactNode" } },
      control: false,
    },
    variant: {
      description: "스타일",
      table: {
        category: "Variant",
        type: { summary: "subtle | surface | outline | solid" },
      },
      control: { type: "select" },
      options: ["subtle", "surface", "solid"],
    },
    status: {
      description: "색상 팔레트",
      table: {
        category: "Variant",
      },
      control: { type: "select" },
      options: ["success", "error", "info", "warning", "default"],
    },
    colorPalette: {
      description: "내부 colorPalette (Docs/Controls 비노출)",
      table: { category: "Variant", disable: true },
      control: false,
    },
    icon: {
      description: "기본 Indicator 대신 사용할 아이콘.",
      table: { category: "Visual", type: { summary: "ReactElement" } },
      control: false,
    },
    startElement: {
      description: "아이콘 영역 전체를 대체할 노드.",
      table: { category: "Slots", type: { summary: "ReactNode" } },
      control: false,
    },
    endElement: {
      description: "우측 끝에 배치할 액션/버튼 등.",
      table: { category: "Slots", type: { summary: "ReactNode" } },
      control: false,
    },
  },
  args: {
    title: "알림 제목",
    children: "여기에 알림 상세 내용을 표시합니다.",
    icon: <Icon as={LuInfo} />,
    endElement: (
      <HStack gap={2}>
        <Icon as={LuInfo} />
      </HStack>
    ),
    colorPalette: "blue",
    variant: "surface",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
