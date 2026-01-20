import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@chakra-ui/react'
import { LuCrown, LuSparkles, LuBell, LuSmile, LuAirplay } from 'react-icons/lu'
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
      description: '모달 제목입니다. string만 가능합니다(링크, 아이콘, 뱃지 포함 불가❌)',
      table: { category: 'Main', type: { summary: 'string' } },
    },
    description: {
      description: '설명 문구입니다. string만 가능합니다(링크, 아이콘, 뱃지 포함 불가❌).',
      table: { category: 'Main', type: { summary: 'string' } },
    },
    buttons: {
      description:
        '세로로 배치될 버튼 영역입니다.<br/><br/>버튼 2개 이상일 때는 아래와 같은 형태 권장`[<Button key="first" />, <Button key="second" />]`',
      table: { category: 'Main', type: { summary: 'ReactNode | ReactNode[]' } },
      control: { type: 'radio' },
      options: ['버튼 1개', '버튼 2개'],
      mapping: {
        '버튼 1개': [<Button key="primary">확인</Button>],
        '버튼 2개': [
          <Button key="primary">확인</Button>,
          <Button key="secondary" colorPalette="gray" variant="outline">
            취소
          </Button>,
        ],
      },
    },

    // Visuals
    icon: {
      description: '상단에 표시할 아이콘을 선택합니다.',
      table: { category: 'Visual', type: { summary: 'IconType' } },
      control: { type: 'select' },
      options: ['LuCrown', 'LuSparkles', 'LuBell', 'LuSmile', 'LuAirplay'],
      mapping: {
        LuCrown,
        LuSparkles,
        LuBell,
        LuSmile,
        LuAirplay
      },
    },

    // Layout / Footer
    modalContentProps: {
      description: '모달 컨텐츠 영역 추가 props<br /><br />특수한 경우가 아니면 css는 건드리지 않습니다.',
      table: { category: 'Layout', type: { summary: 'DialogContentProps' } },
      control: false,
    },
    footerDescription: {
      description: '버튼 아래에 표시되는 설명 문구(링크, 아이콘, 뱃지 포함 가능✅)',
      table: { category: 'Footer', type: { summary: 'string | ReactNode' } },
      control: { type: 'radio' },
      options: ['미지정', '기본 안내 문구'],
      mapping: {
        미지정: undefined,
        '기본 안내 문구': '이 부분은 옵셔널이고, footer description 영역입니다.',
      },
    },

    // Trigger
    trigger: {
      description:
        '모달을 여는 방식을 설정합니다.<br/><br/>1) 비제어형: { triggerButton, triggerProps }<br/>2) 제어형(open/setOpen): { open, setOpen }<br/>3) 제어형(onOpen/onClose): { open, onOpen, onClose }',
      table: { category: 'Trigger' },
      control: false,
    },
  },
  args: {
    title: '이 부분은 title 영역입니다.',
    description: '이 부분은 description 영역입니다.',
    trigger: {
      triggerButton: <Button colorPalette="blue">모달 열기</Button>,
    },
    buttons: '버튼 1개',
    footerDescription: '기본 안내 문구',
    icon: LuCrown,

  },
} satisfies Meta<typeof ContentModal>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <ContentModal {...args} />,
}
