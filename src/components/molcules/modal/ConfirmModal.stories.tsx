import type { Meta, StoryObj } from '@storybook/react'
import { Button, HStack } from '@chakra-ui/react'
import { LuCrown, LuSparkles, LuBell, LuSmile, LuInfo } from 'react-icons/lu'
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
      description: '모달 제목입니다. string만 가능합니다(링크, 아이콘, 뱃지 포함 불가❌).',
      table: { category: 'Main', type: { summary: 'string' } },
    },
    description: {
      description: '제목 아래에 표시되는 설명입니다. string만 가능합니다(링크, 아이콘, 뱃지 포함 불가❌).',
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
      description:
        '모달 타입을 선택합니다.<br/><br/>- positive: 파랑 컬러 + 체크 아이콘<br/>- negative: 빨강 컬러 + 휴지통 아이콘',
      table: { category: 'Variant', type: { summary: 'positive | negative' } },
      control: { type: 'select' },
      options: ['positive', 'negative'],
    },
    customIcon: {
      description: '아이콘을 교체합니다 (컬러는 modalType에 따라 결정됨).',
      table: { category: 'Variant', type: { summary: 'IconType' } },
      control: { type: 'select' },
      options: ['LuCrown', 'LuSparkles', 'LuBell', 'LuSmile'],
      mapping: {
        LuCrown,
        LuSparkles,
        LuBell,
        LuSmile,
      },
    },

    // 4) 버튼/푸터
    confirmButton: {
      description: '확인버튼', // disabled
      table: { category: 'Footer', disable: true },
    },
    'confirmButton.label':{
      name: '🟢 confirmButton > label',
      description: '확인버튼 라벨',
      table: { category: 'Footer', type: { summary: 'string' } },
      control: { type: 'text' },
    },
    'confirmButton.onConfirm': {
      name: '🟢 confirmButton > onConfirm',
      description: '확인 버튼 클릭 핸들러',
      table: { category: 'Footer', type: { summary: '() => void' } },
      control: false,
      action: 'onConfirm',
    },
    'confirmButton.buttonProps': {
      name: '🟢 confirmButton > buttonProps',
      description: '확인 버튼에 전달할 추가 ButtonProps',
      table: { category: 'Footer', type: { summary: 'ButtonProps' } },
      control: false,
    },
    cancelButton: { // disabled
      description: '취소버튼',
      table: { category: 'Footer', disable: true },
    },
    'cancelButton.label':
     {
      name: '🟠 cancelButton > label',
      description: '취소버튼 라벨',
      table: { category: 'Footer', type: { summary: 'string' } },
      control: { type: 'text' },
    },
    'cancelButton.buttonProps': {
      name: '🟠 cancelButton > buttonProps',
      description: '취소버튼에 전달할 추가 ButtonProps',
      table: { category: 'Footer', type: { summary: 'ButtonProps' } },
      control: false,
    },
    'confirmButton.onCancel': {
      name: '🟠 cancelButton > onCancel',
      description: '취소 버튼 클릭 핸들러(넘기지 않을 경우에는 기본 닫힘 트리거 적용)',
      table: { category: 'Footer', type: { summary: '() => void' } },
      control: false,
      action: 'onConfirm',
    },
    footerDescription: {
      name: '🟡 footerDescription',
      description:
        '버튼 하단에 표시되는 설명 문구<br/>링크, 아이콘 등을 포함할 수 있습니다.<br/><br/>컨트롤에서 "미지정"을 선택하면 props를 전달하지 않은 상태를 확인할 수 있습니다.',
      table: { category: 'Footer', type: { summary: 'string | ReactNode' } },
      control: { type: 'radio' },
      options: ['미지정', '안내 문구'],
      mapping: { 
        미지정: undefined,
        '안내 문구': <HStack><LuInfo />이 부분은 옵셔널이고, 아이콘/링크 등도 넣기 가능</HStack>,
      },
    },
    modalContentProps: {
      description: '모달 컨텐츠 영역의 추가 props<br /><br />특수한 경우가 아니면 css는 건드리지 않습니다.',
      table: { category: 'Layout', type: { summary: 'DialogContentProps' } },
      control: false,
    },
    closeOnInteractOutside : {
      description: '모달 바깥영역 클릭 시 모달 닫기 여부',
      table: { category: 'Layout', type: { summary: 'boolean' } },
      control: { type: 'boolean' },
    }
  } as any,
  args: {
    title: '정말로 삭제하시겠어요?',
    description: '이 작업은 되돌릴 수 없습니다.',
    modalType: 'positive',
    trigger: {
      triggerButton: <Button colorPalette="blue">모달 열기</Button>,
    },
    
    confirmButton: { label: '확인' },
    'confirmButton.label': '확인',
    'confirmButton.onConfirm': undefined,
    'confirmButton.buttonProps': undefined,
    cancelButton: { label: '취소' },
    'cancelButton.label': '취소',
    'cancelButton.onCancel': undefined,
    'cancelButton.buttonProps': undefined,
    footerDescription: '안내 문구',
  } as any,
} satisfies Meta<typeof ConfirmModal>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const a = args as any
    const mergedConfirmButton = {
      ...(args.confirmButton ?? {}),
      label: a['confirmButton.label'] ?? args.confirmButton?.label,
      onConfirm: a['confirmButton.onConfirm'] ?? args.confirmButton?.onConfirm,
      buttonProps: a['confirmButton.buttonProps'] ?? args.confirmButton?.buttonProps,
    }
    const mergedCancelButton = {
      ...(args.cancelButton ?? {}),
      label: a['cancelButton.label'] ?? args.cancelButton?.label,
      onCancel: a['cancelButton.onCancel'] ?? args.cancelButton?.onCancel,
      buttonProps: a['cancelButton.buttonProps'] ?? args.cancelButton?.buttonProps,
    }

    return (
      <ConfirmModal
        {...args}
        confirmButton={mergedConfirmButton}
        cancelButton={mergedCancelButton}
      />
    )
  },
}
