import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Stepper, { buildSteps } from "./Stepper";

type StepValue = "info" | "group" | "data" | "ai" | "edit";

const defaultSteps = buildSteps<StepValue>([
  { value: "info", label: "기본 정보 설정", to: "/info" },
  { value: "group", label: "그룹 구성", to: "/group" },
  { value: "data", label: "자료 및 활동 입력", to: "/data" },
  {
    value: "ai",
    label: "AI 기록 생성",
    to: "/ai",
  },
  {
    value: "edit",
    label: "기록 편집",
    to: "/edit",
    disabled: true,
    tooltipMessage: "disabled 사유를 알려주는 메시지(툴팁은 옵셔널)",
  },
]);

const meta: Meta<typeof Stepper> = {
  title: "Molcules/Stepper/Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
현재 진행 단계와 이동 가능한 단계를 보여주는 스텝퍼 컴포넌트입니다.

#### \`steps\` 아이템(\`StepperStep\`) 필드 설명

<div style="width: 100%; overflow-x: auto;">
<table width="100%">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>value</code></td>
      <td><code>TValue</code></td>
      <td>선택</td>
      <td><code>activeValue</code>와 매칭해 현재 활성 스텝을 판단할 때 사용</td>
    </tr>
    <tr>
      <td><code>label</code></td>
      <td><code>string</code></td>
      <td>필수</td>
      <td>스텝 라벨 텍스트</td>
    </tr>
    <tr>
      <td><code>icon</code></td>
      <td><code>ElementType</code></td>
      <td>선택</td>
      <td>뱃지 영역에서 숫자 대신 렌더링할 아이콘</td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td><code>boolean</code></td>
      <td>선택</td>
      <td>비활성화 여부</td>
    </tr>
    <tr>
      <td><code>tooltipMessage</code></td>
      <td><code>ReactNode</code></td>
      <td>선택</td>
      <td><code>disabled</code> 상태에서 hover 시 표시할 툴팁 메시지</td>
    </tr>
    <tr>
      <td><code>to</code></td>
      <td><code>string</code></td>
      <td>조건부 필수</td>
      <td>클릭 시 이동할 경로 (<code>onClick</code>과 상호 배타)</td>
    </tr>
    <tr>
      <td><code>onClick</code></td>
      <td><code>() => void</code></td>
      <td>조건부 필수</td>
      <td>클릭 핸들러 (<code>to</code>와 상호 배타)</td>
    </tr>
  </tbody>
</table>
</div>
`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    activeValue: {
      description: "활성화된 스텝 value",
      control: { type: "select" },
      options: ["info", "group", "data", "ai", "edit"],
    },
    steps: {
      description: "렌더링할 스텝 목록",
      table: {
        type: {
          summary: "StepperStep[]",
          detail:
            "{ value?: TValue; label: string; icon?: ElementType; disabled?: boolean; tooltipMessage?: ReactNode; } & ({ to: string } | { onClick: () => void })",
        },
      },
      control: false,
    },
  },
  args: {
    steps: defaultSteps,
    activeValue: "info",
  },
  decorators: [
    (Story) => (
      <Box minW="760px">
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [activeValue, setActiveValue] = useState<StepValue>("info");

    const clickableSteps = buildSteps<StepValue>([
      {
        value: "info",
        label: "기본 정보 설정",
        onClick: () => setActiveValue("info"),
      },
      {
        value: "group",
        label: "그룹 구성",
        onClick: () => setActiveValue("group"),
      },
      {
        value: "data",
        label: "자료 및 활동 입력",
        onClick: () => setActiveValue("data"),
      },
      {
        value: "ai",
        label: "AI 기록 생성",
        onClick: () => setActiveValue("ai"),
        disabled: true,
        tooltipMessage: "disabled 사유를 알려주는 메시지(툴팁은 옵셔널)",
      },
      {
        value: "edit",
        label: "기록 편집",
        onClick: () => setActiveValue("edit"),
        disabled: true,
        tooltipMessage: "disabled 사유를 알려주는 메시지(툴팁은 옵셔널)",
      },
    ]);

    return <Stepper steps={clickableSteps} activeValue={activeValue} />;
  },
};
