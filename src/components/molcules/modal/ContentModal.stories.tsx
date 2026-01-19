import type { Meta, StoryObj } from '@storybook/react'
import { Button, VStack } from '@chakra-ui/react'
import { LuCrown } from 'react-icons/lu'
import ContentModal from './ContentModal'

const meta = {
  title: 'Molcules/Modal/ContentModal',
  component: ContentModal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '특성: 상단에 아이콘, 하단 버튼이 세로방향 full size로 배치됨<br/>의미: 가입 인사 같은 가벼운 안내 콘텐츠에 사용',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Main
    title: {
      description: '모달 제목입니다. string만 가능합니다.',
      table: { category: 'Main', type: { summary: 'string' } },
    },
    description: {
      description: '제목 아래 설명 문구입니다. string만 가능합니다.',
      table: { category: 'Main', type: { summary: 'string' } },
    },
    buttons: {
      description: '세로로 배치될 버튼 영역입니다.',
      table: { category: 'Main', type: { summary: 'ReactNode' } },
      control: false,
    },

    // Trigger
    trigger: {
      description:
        '모달을 여는 방식을 설정합니다.<br/><br/>1) 비제어형: { triggerButton, triggerProps }<br/>2) 제어형(open/setOpen): { open, setOpen }<br/>3) 제어형(onOpen/onClose): { open, onOpen, onClose }',
      table: { category: 'Trigger' },
      control: false,
    },

    // Visuals
    icon: {
      description: '상단에 표시할 아이콘(기본: LuCrown)',
      table: { category: 'Visual', type: { summary: 'IconType' } },
      control: false,
    },
    colorPalette: {
      description: '아이콘/버튼에 사용될 컬러 팔레트 (기본: blue)',
      table: { category: 'Visual', type: { summary: 'ColorPalette' } },
    },

    // Layout / Footer
    modalContentProps: {
      description: '모달 컨텐츠 영역 추가 props',
      table: { category: 'Layout', type: { summary: 'DialogContentProps' } },
      control: false,
    },
    footerDescription: {
      description: '버튼 아래에 표시되는 설명 문구',
      table: { category: 'Footer', type: { summary: 'string | ReactNode' } },
      control: false,
    },
  },
  args: {
    title: '어서오세요! 가입을 환영합니다 🎉',
    description: '아래 버튼을 눌러 다음 단계를 진행해주세요.',
    trigger: {
      triggerButton: <Button colorPalette="blue">모달 열기</Button>,
    },
    buttons: (
      <VStack w="full" >
        <Button>
          시작하기
        </Button>
        <Button colorPalette="gray" variant="outline">
          나중에 할게요
        </Button>
      </VStack>
    ),
    footerDescription: '추후 설정에서 언제든 다시 진행할 수 있습니다.',
    icon: LuCrown,
    colorPalette: 'blue',
  },
} satisfies Meta<typeof ContentModal>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <ContentModal {...args} />,
}
