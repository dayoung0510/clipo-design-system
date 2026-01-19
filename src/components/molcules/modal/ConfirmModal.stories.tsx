import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@chakra-ui/react'
import ConfirmModal from './ConfirmModal'

const meta = {
  title: 'Molcules/Modal/ConfirmModal',
  component: ConfirmModal,
  parameters: {
    layout: 'centered',
    docs:{
      description: {
        component:
          '특성: 상단에 아이콘, 하단 버튼 가로 배치<br />의미: 삭제/저장 등 되돌릴 수 없는 액션 재확인',
      },
    }
  },
  tags: ['autodocs'],
  argTypes: {
    // 1) 메인 정보
    title: {
      description: '모달의 제목입니다. string만 가능합니다.',
      table: { category: 'Main', type: { summary: 'string' } },
    },
    description: {
      description: '제목 아래에 표시되는 설명입니다. string만 가능합니다.',
      table: { category: 'Main', type: { summary: 'string' } },
    },

    // 2) 트리거
    trigger: {
      description:
        '모달을 여는 방식을 설정합니다.<br/><br/>1) 비제어형: { triggerButton, triggerProps }<br/>2) 제어형(open/setOpen): { open, setOpen }<br/>3) 제어형(onOpen/onClose): { open, onOpen, onClose }',
      table: { category: 'Trigger' },
      control: false,
    },

    // 3) 변형 옵션
    modalType: {
      description: "모달 타입을 선택합니다.<br/><br/>- check: 체크아이콘+파랑<br/>- trash: 휴지통아이콘+빨강<br/>- custom: 커스텀 아이콘+커스텀 색상",
      table: { category: 'Variant', type: { summary: "check | trash | custom" } },
    },
    customColorPalette: {
      description: "modalType이 'custom'일 때 필요한 색상 팔레트",
      table: { category: 'Variant', type: { summary: 'ColorPalette' } },
    },
    customIcon: {
      description: "modalType이 'custom'일 때 필요한 아이콘",
      table: { category: 'Variant', type: { summary: 'IconType' } },
      control: false,
    },

    // 4) 버튼/푸터
    cancelButton: {
      description: '취소버튼 label, onClick, disabled...',
      table: { category: 'Footer', type: { summary: '{ label?: string; buttonProps?: ButtonProps }' } },
      control: false,
    },
    confirmButton: {
      description: '확인버튼 label, onClick, disabled...',
      table: { category: 'Footer', type: { summary: '{ label?: string; buttonProps?: ButtonProps }' } },
      control: false,
    },
    footerDescription: {
      description: '버튼 하단에 표시되는 설명 문구',
      table: { category: 'Footer', type: { summary: 'string | ReactNode' } },
      control: false,
    },
    modalContentProps: {
      description: '모달 컨텐츠 영역의 추가 props',
      table: { category: 'Layout', type: { summary: 'DialogContentProps' } },
      control: false,
    },
    size: {
      description: '모달 크기 (xs 사이즈 only)',
      table: { category: 'Layout' },
    },
  },
  args: {
    title: '정말로 삭제하시겠어요?',
    description: '이 작업은 되돌릴 수 없습니다.',
    modalType: 'check',
    trigger: {
      triggerButton: <Button colorPalette="blue">모달 열기</Button>,
    },
    cancelButton: { label: '취소' },
    confirmButton: { label: '확인' },
    footerDescription: '삭제 시 복구할 수 없습니다.',
  },
} satisfies Meta<typeof ConfirmModal>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <ConfirmModal {...args} />,
}
