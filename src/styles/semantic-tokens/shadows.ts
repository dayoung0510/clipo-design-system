import { defineSemanticTokens } from '@chakra-ui/react'

export const shadows = defineSemanticTokens.shadows({
  xs: {
    value: '0px 1px 2px {colors.gray.900/10}, 0px 0px 1px {colors.gray.900/20}',
  },
  sm: {
    value: '0px 2px 4px {colors.gray.900/10}, 0px 0px 1px {colors.gray.900/30}',
  },
  md: {
    value: '0px 4px 8px {colors.gray.900/10}, 0px 0px 1px {colors.gray.900/30}',
  },
  lg: {
    value: '0px 8px 16px {colors.gray.900/10}, 0px 0px 1px {colors.gray.900/30}',
  },
  xl: {
    value: '0px 16px 24px {colors.gray.900/10}, 0px 0px 1px {colors.gray.900/30}',
  },
  '2xl': {
    value: '0px 24px 40px {colors.gray.900/16}, 0px 0px 1px {colors.gray.900/30}',
  },
  inner: {
    value: 'inset 0 2px 4px 0 {black/5}',
  },
  inset: {
    value: 'inset 0 0 0 1px {black/5}',
  },
  /* --- custom --- */
  'core-action': {
    value: '0px 4px 4px 0px rgba(0, 0, 0, 0.15);',
  },
  box: {
    value: '0px 4px 12px 0px {colors.shadow.panel};', // rgba(95, 102, 178, 0.16)
  },
  tooltip: {
    value: '0px 0px 1px 0px {colors.border.inverted}, 0px 8px 32px 0px {colors.shadow.panel};', //  #494949,  rgba(95, 102, 178, 0.16)
  },
  panel: {
    value: '0px 4px 36px 0px {colors.shadow.panel}', // rgba(95, 102, 178, 0.16)
  },
  card: {
    value: '0px 8px 15px 0px rgba(0, 0, 0, 0.05)',
  },
  // Figma: shadow_MakeRubric_Input (0px 2px 4px blue.600 @ 15%)
  'make-rubric-input': {
    value: '0px 2px 4px {colors.blue.600/15}',
  },
  'make-rubric-md': {
    value: '0 3px 6px 3px rgba(54, 94, 239, 0.25)',
  },
})
