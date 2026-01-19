import type { Meta, StoryObj } from '@storybook/react'
import { Button, Text as ChakraText } from '@chakra-ui/react'
import BasicModal from './BasicModal'

const meta = {
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
      description: '모달 본문에 들어갈 내용입니다.',
      table: { category: 'Main', type: { summary: 'ReactNode' } },
      control: false,
    },

    // 2. Trigger 그룹 (설명 보강)
    trigger: {
      description: '모달을 여는 방식을 설정합니다.<br/><br/>1) 비제어형: { triggerButton, triggerProps }<br/>2) 제어형(open/setOpen): { open, setOpen }<br/>3) 제어형(onOpen/onClose): { open, onOpen, onClose }',
      table: {
        category: 'Trigger',
        control: false,
      },
    },

    // 3. Footer 그룹
    footer: {
      description: '푸터 영역 옵션입니다.<br/><br/>1) isHide: 푸터 영역을 완전히 숨길지 여부<br/>2) align: 버튼 정렬 방식 end | between<br/>3) infoText: 푸터 좌측에 표시될 안내 문구<br/>4) saveButton: 저장 버튼 옵션<br/> - label, isHide, onClick, disabled ... <br/>5) cancelButton: 취소 버튼 옵션<br/>- label, isHide, onClick, disabled ... ',
      table: {
        category: 'Footer',
        control: false,
      },
    },

    // 4. 크기 그룹
    size: {
      description: '모달 크기를 설정합니다.<br/><br/> -1월 21일 이후 쥴리가 사이즈종류 정해줄 예정-',
      table: {
        category: 'Size',
        control: false,
      },
    },
  },
  args: {
    title: '기본 모달 제목',
    footer: {
      infoText: '추가 안내 문구를 표시할 수 있습니다.',
      saveButton: { label: '저장' },
      cancelButton: { label: '취소' },
    },
    trigger: {
      triggerButton: <Button>모달 열기</Button>,
    },
    children: <ChakraText>모달 본문 내용이 들어갑니다.</ChakraText>,
  },
} satisfies Meta<typeof BasicModal>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  
  render: (args) => <BasicModal {...args}  />,
}
