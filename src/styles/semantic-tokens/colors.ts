import { defineSemanticTokens } from '@chakra-ui/react'

export const colors = defineSemanticTokens.colors({
  bg: {
    DEFAULT: {
      value: '{colors.gray.50}',
    },
    bg: {
      value: '{colors.gray.50}',
    },
    subtle: {
      value: '{colors.gray.50}',
    },
    muted: {
      value: '{colors.gray.100}',
    },
    emphasized: {
      value: '{colors.gray.200}',
    },
    inverted: {
      value: '{colors.black}',
    },
    panel: {
      value: '{colors.white}',
    },
    error: {
      value: '{colors.red.50}',
    },
    warning: {
      value: '{colors.orange.50}',
    },
    success: {
      value: '{colors.green.50}',
    },
    info: {
      value: '{colors.blue.50}',
    },
    tooltip_light: {
      value: '{colors.blue.200}',
    },
  },
  fg: {
    DEFAULT: {
      value: '{colors.gray.800}',
    },
    fg: {
      value: '{colors.gray.800}',
    },
    muted: {
      value: '{colors.gray.600}',
    },
    subtle: {
      value: '{colors.gray.400}',
    },
    inverted: {
      value: '{colors.gray.50}',
    },
    error: {
      value: '{colors.red.600}',
    },
    warning: {
      value: '{colors.orange.600}',
    },
    success: {
      value: '{colors.green.600}',
    },
    info: {
      value: '{colors.blue.600}',
    },
  },
  border: {
    DEFAULT: {
      value: '{colors.gray.200}',
    },
    border: {
      value: '{colors.gray.200}',
    },
    muted: {
      value: '{colors.gray.100}',
    },
    subtle: {
      value: '{colors.gray.50}',
    },
    emphasized: {
      value: '{colors.gray.300}',
    },
    inverted: {
      value: '{colors.gray.800}',
    },
    purple: {
      value: '{colors.purple.800}',
    },
    error: {
      value: 'var(--chakra-colors-status-error_fg)',
    },
    warning: {
      value: '{colors.orange.500}',
    },
    success: {
      value: 'var(--chakra-colors-status-green_fg)',
    },
    info: {
      value: '{colors.blue.500}',
    },
  },
  gray: {
    contrast: {
      value: '{colors.white}',
    },
    fg: {
      value: '{colors.gray.900}',
    },
    subtle: {
      value: '{colors.gray.100}',
    },
    muted: {
      value: '{colors.gray.200}',
    },
    emphasized: {
      value: '{colors.gray.300}',
    },
    solid: {
      value: '{colors.gray.900}',
    },
    focusRing: {
      value: '{colors.gray.400}',
    },
  },
  red: {
    contrast: {
      value: '{colors.white}',
    },
    fg: {
      value: '{colors.red.700}',
    },
    subtle: {
      value: '{colors.red.100}',
    },
    muted: {
      value: '{colors.red.200}',
    },
    emphasized: {
      value: '{colors.red.300}',
    },
    solid: {
      value: '{colors.red.600}',
    },
    focusRing: {
      value: '{colors.red.500}',
    },
  },
  orange: {
    contrast: {
      value: '{colors.white}',
    },
    fg: {
      value: '{colors.orange.700}',
    },
    subtle: {
      value: '{colors.orange.100}',
    },
    muted: {
      value: '{colors.orange.200}',
    },
    emphasized: {
      value: '{colors.orange.300}',
    },
    solid: {
      value: '{colors.orange.600}',
    },
    focusRing: {
      value: '{colors.orange.500}',
    },
  },
  green: {
    contrast: {
      value: '{colors.white}',
    },
    fg: {
      value: '{colors.green.700}',
    },
    subtle: {
      value: '{colors.green.100}',
    },
    muted: {
      value: '{colors.green.200}',
    },
    emphasized: {
      value: '{colors.green.300}',
    },
    solid: {
      value: '{colors.green.600}',
    },
    focusRing: {
      value: '{colors.green.500}',
    },
  },
  blue: {
    contrast: {
      value: '{colors.white}',
    },
    fg: {
      value: '{colors.blue.700}',
    },
    subtle: {
      value: '{colors.blue.100}',
    },
    muted: {
      value: '{colors.blue.200}',
    },
    emphasized: {
      value: '{colors.blue.300}',
    },
    solid: {
      value: '{colors.blue.600}',
    },
    focusRing: {
      value: '{colors.blue.500}',
    },
  },
  yellow: {
    contrast: {
      value: '{colors.white}',
    },
    fg: {
      value: '{colors.yellow.800}',
    },
    subtle: {
      value: '{colors.yellow.100}',
    },
    muted: {
      value: '{colors.yellow.200}',
    },
    emphasized: {
      value: '{colors.yellow.300}',
    },
    solid: {
      value: '{colors.yellow.300}',
    },
    focusRing: {
      value: '{colors.yellow.500}',
    },
  },
  purple: {
    contrast: {
      value: '{colors.white}',
    },
    fg: {
      value: '{colors.purple.700}',
    },
    subtle: {
      value: '{colors.purple.100}',
    },
    muted: {
      value: '{colors.purple.200}',
    },
    emphasized: {
      value: '{colors.purple.300}',
    },
    solid: {
      value: '{colors.purple.600}',
    },
    focusRing: {
      value: '{colors.purple.500}',
    },
    menuTab: {
      value: '#CBD6F4',
    },
  },
  teal: {
    contrast: {
      value: '{colors.white}',
    },
    fg: {
      value: '{colors.teal.700}',
    },
    subtle: {
      value: '{colors.teal.100}',
    },
    muted: {
      value: '{colors.teal.200}',
    },
    emphasized: {
      value: '{colors.teal.300}',
    },
    solid: {
      value: '{colors.teal.600}',
    },
    focusRing: {
      value: '{colors.teal.500}',
    },
  },
  shadow: {
    panel: {
      value: 'rgba(95,102,178,0.16)',
    },
  },
  status: {
    error_bg: {
      value: 'rgba(255, 235, 235, 0.4)',
    },
    error_fg: {
      value: '{colors.red.500}',
    },
    green_bg: {
      value: 'rgba(230, 248, 231, 0.4)',
    },
    green_fg: {
      value: '{colors.green.500}',
    },
  },
})
