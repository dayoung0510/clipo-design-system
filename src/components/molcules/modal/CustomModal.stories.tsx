import type { Meta, StoryObj } from "@storybook/react";
import { Button, HStack, Text } from "@chakra-ui/react";
import CustomModal from "./CustomModal";

const meta: Meta<typeof CustomModal> = {
  title: "Molcules/Modal/CustomModal",
  component: CustomModal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "커스텀 header/footer/본문을 자유롭게 구성할 수 있는 모달. 특수한 경우에만 사용을 권장합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // 기본 콘텐츠
    header: {
      description: "모달 상단에 표시할 커스텀 헤더(ReactNode).",
      table: { category: "Main", type: { summary: "ReactNode" } },
      control: false,
    },
    children: {
      description: "모달 본문에 렌더될 콘텐츠(ReactNode).",
      table: { category: "Main", type: { summary: "ReactNode" } },
      control: false,
    },
    footer: {
      description: "모달 하단에 표시할 커스텀 푸터(ReactNode).",
      table: { category: "Main", type: { summary: "ReactNode" } },
      control: false,
    },

    // 트리거
    trigger: {
      description:
        "모달을 여는 방식을 설정합니다. 비제어형: { triggerButton, triggerProps } / 제어형: { open, setOpen } 또는 { open, onOpen, onClose }",
      table: { category: "Trigger", disable: true },
      control: false,
    },

    // 레이아웃
    size: {
      description: "모달 크기",
      table: { category: "Layout", type: { summary: "sm | md | lg" } },
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "cover", "full"],
    },
    modalContentProps: {
      description: "모달 콘텐츠 영역에 전달할 추가 props",
      table: { category: "Layout", type: { summary: "DialogContentProps" } },
      control: false,
    },
    closeOnInteractOutside: {
      description: "모달 바깥영역 클릭 시 모달 닫기 여부",
      table: { category: "Layout", type: { summary: "boolean" } },
      control: { type: "boolean" },
    },
    showCloseIconButton: {
      description: "상단 X버튼 렌더링 여부",
      table: { category: "Layout", type: { summary: "boolean" } },
      control: { type: "boolean" },
    },
  },
  args: {
    header: <Text textStyle="t4-semibold-compact">커스텀 헤더</Text>,
    children: (
      <Text>
        자유롭게 커스텀할 수 있는 모달 본문 영역입니다. 이미지, 폼, 버튼 등
        원하는 요소를 배치하세요.
      </Text>
    ),
    footer: (
      <HStack w="full" justifyContent="flex-end" gap={3}>
        <Button variant="outline" colorPalette="gray">
          취소
        </Button>
        <Button colorPalette="blue">확인</Button>
      </HStack>
    ),
    trigger: {
      triggerButton: <Button colorPalette="blue">모달 열기</Button>,
    },
    size: "md",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
