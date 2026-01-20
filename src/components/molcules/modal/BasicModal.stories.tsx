import type { Meta, StoryObj } from '@storybook/react'
import { Button, Text as ChakraText } from '@chakra-ui/react'
import React from 'react'
import BasicModal from './BasicModal'

const meta: Meta<typeof BasicModal> = {
  title: 'Molcules/Modal/BasicModal',
  component: BasicModal,
  parameters: {
    layout: 'centered',
    docs:{
      description: {
        component:
          '특성: 상단에 X버튼, 하단 버튼 가로 배치<br/>의미: 기본적인 모달 컴포넌트',
      },
    }
  },
  tags: ['autodocs'],
  argTypes: {
    // 1. 기본 설정 그룹
    title: {
      description:
        '모달 상단에 표시될 제목입니다.<br/><br/>ReactNode는 타이틀 옆에 badge 등이 들어가는 특수한 경우에만 사용을 권장합니다.',
      table: {
        category: 'Main',
        type: { summary: "string | ReactNode" },
      },
    },
    children: {
      description: 'body에 들어갈 내용입니다.',
      table: { category: 'Main', type: { summary: 'ReactNode' } },
      control: false,
    },

    // 2. Trigger 그룹
    trigger: {
      description: '모달을 여는 방식을 설정합니다.<br/><br/>1) 비제어형: { triggerButton, triggerProps }<br/>2) 제어형(open/setOpen): { open, setOpen }<br/>3) 제어형(onOpen/onClose): { open, onOpen, onClose }',
      table: { category: 'Trigger'},
      control: false,
    },

    // 3. Footer 그룹
    footer: {
      description: '푸터 영역 옵션입니다.', // disabled
      table: { category: 'Footer', disable: true },
    },
    'footer.saveButton': {
      name: 'footer > saveButton',
      description: '저장 버튼 설정 (ReactNode 또는 ButtonProps 확장).',
      table: {
        category: 'Footer',
        type: {
          summary: 'ReactNode | ButtonProps & { label?: string; isHide?: boolean; onSave?: () => void }',
        },
        disable: true,
      },
      control: false,
    },
    'footer.isHide': {
      name: 'footer > isHide',
      description: '푸터 영역을 완전히 숨길지 여부',
      table: { category: 'Footer', type: { summary: 'boolean' } },
      control: { type: 'boolean' },
    },
    'footer.align': {
      name: 'footer > align',
      description: '푸터 버튼 정렬 방식',
      table: { category: 'Footer', type: { summary: 'end | between' } },
      control: { type: 'select' },
      options: ['end', 'between'],
    },
    'footer.description': {
      name: 'footer > description',
      description: '푸터 좌측 안내 문구',
      table: { category: 'Footer', type: { summary: 'string | ReactNode' } },
      control: { type: 'text' },
    },
    'footer.saveButton.label': {
      name: '🟢 footer > saveButton > label',
      description: '저장 버튼 라벨',
      table: { category: 'Footer', type: { summary: 'string' } },
      control: { type: 'text' },
    },
    'footer.saveButton.isHide': {
      name: '🟢 footer > saveButton > isHide',
      description: '저장 버튼 숨김 여부',
      table: { category: 'Footer', type: { summary: 'boolean' } },
      control: { type: 'boolean' },
    },
    'footer.saveButton.onSave': {
      name: '🟢 footer > saveButton > onSave',
      description: '저장버튼 클릭 시 이벤트',
      table: { category: 'Footer', type: { summary: 'function' } },
      control: false,
    },
    'footer.saveButton.node': {
      name: '🟢 footer > saveButton > (custom node)',
      description: '저장 버튼 위치에 직접 렌더할 ReactNode (일반적인 상황에서는 사용 비권장❌)',
      table: { category: 'Footer', type: { summary: 'ReactNode' } },
      control: false,
    },
    'footer.cancelButton': { // disabled
      name: 'footer > cancelButton',
      description: '취소 버튼 설정 (ReactNode 또는 ButtonProps 확장).',
      table: { 
        category: 'Footer',
        disable: true,
      },
    },
    'footer.cancelButton.label': {
      name: '🟠 footer > cancelButton > label',
      description: '취소 버튼 라벨',
      table: { category: 'Footer', type: { summary: 'string' } },
      control: { type: 'text' },
    },
    'footer.cancelButton.onCancel': {
      name: '🟠 footer > cancelButton > onCancel',
      description: '취소 버튼 클릭 핸들러',
      table: { category: 'Footer', type: { summary: '() => void' } },
      control: false,
      action: 'onCancel',
    },
    'footer.cancelButton.isHide': {
      name: '🟠 footer > cancelButton > isHide',
      description: '취소 버튼 숨김 여부',
      table: { category: 'Footer', type: { summary: 'boolean' } },
      control: { type: 'boolean' },
    },
    'footer.cancelButton.node': {
      name: '🟠 footer > cancelButton > (custom node)',
      description: '취소 버튼 위치에 직접 렌더할 ReactNode (일반적인 상황에서는 사용 비권장❌)',
      table: { category: 'Footer', type: { summary: 'ReactNode' } },
      control: false,
    },
    size: {
      description: '모달 크기를 설정합니다.',
      table: {
        category: 'Layout',
        table: {type: {summary: 'sm | md | lg'}},
        control: {type:'radio'},
        options: ['sm', 'md', 'lg'],
      },
    },
    modalContentProps: {
      description: '모달 컨텐츠 영역의 추가 props<br /><br />특수한 경우가 아니면 css는 건드리지 않습니다.',
      table: { category: 'Layout', type: { summary: 'DialogContentProps' } },
      control: false,
    },
  } as any,
  args: {
    title: '기본 모달 제목',
    footer: {
      isHide: false,
      align: 'end',
      description: '추가 안내 문구를 표시할 수 있습니다.',
      saveButton: { label: '저장' },
      cancelButton: { label: '취소' },
    },
    'footer.isHide': false,
    'footer.align': 'end',
    'footer.description': '추가 안내 문구를 표시할 수 있습니다.',
    'footer.saveButton.label': '저장',
    'footer.saveButton.isHide': false,
    'footer.saveButton.onSave': undefined,
    'footer.saveButton.node': undefined,
    'footer.cancelButton.label': '취소',
    'footer.cancelButton.isHide': false,
    'footer.cancelButton.onCancel': undefined,
    'footer.cancelButton.node': undefined,
    trigger: {
      triggerButton: <Button>모달 열기</Button>,
    },
    children: <ChakraText>모달 본문 내용이 들어갑니다.</ChakraText>,
  } as any,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const a = args as any
    const baseSave = args.footer?.saveButton
    const baseCancel = args.footer?.cancelButton

    const customSaveNode = a['footer.saveButton.node']
    const customCancelNode = a['footer.cancelButton.node']

    const mergedSaveButton =
      customSaveNode ??
      (React.isValidElement(baseSave)
        ? baseSave
        : baseSave && typeof baseSave === 'object'
          ? {
              ...baseSave,
              label: a['footer.saveButton.label'] ?? (baseSave as any)?.label,
              isHide: a['footer.saveButton.isHide'] ?? (baseSave as any)?.isHide,
              onSave: a['footer.saveButton.onSave'] ?? (baseSave as any)?.onSave,
            }
          : {
              label: a['footer.saveButton.label'] ?? undefined,
              isHide: a['footer.saveButton.isHide'] ?? false,
              onSave: a['footer.saveButton.onSave'] ?? undefined,
            })

    const mergedCancelButton =
      customCancelNode ??
      (React.isValidElement(baseCancel)
        ? baseCancel
        : baseCancel && typeof baseCancel === 'object'
          ? {
              ...baseCancel,
              label: a['footer.cancelButton.label'] ?? (baseCancel as any)?.label,
              isHide: a['footer.cancelButton.isHide'] ?? (baseCancel as any)?.isHide,
              onCancel: a['footer.cancelButton.onCancel'] ?? (baseCancel as any)?.onCancel,
            }
          : {
              label: a['footer.cancelButton.label'] ?? undefined,
              isHide: a['footer.cancelButton.isHide'] ?? false,
              onCancel: a['footer.cancelButton.onCancel'] ?? undefined,
            })
    const mergedFooter = {
      ...(args.footer ?? {}),
      isHide: a['footer.isHide'] ?? args.footer?.isHide,
      align: a['footer.align'] ?? args.footer?.align,
      description: a['footer.description'] ?? args.footer?.description,
      saveButton: mergedSaveButton,
      cancelButton: mergedCancelButton,
    }

    return <BasicModal {...args} footer={mergedFooter} />
  },
}
