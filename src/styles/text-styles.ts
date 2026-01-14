import { defineTextStyles } from '@chakra-ui/react'

const fontSizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']
const fontWeights = [400, 500, 600, 700]

const commonStyleSet = fontSizes
  .flatMap((fontSize) => {
    return fontWeights.map((fontWeight) => ({
      fontSize,
      fontWeight,
    }))
  })
  .reduce(
    (acc, { fontSize, fontWeight }) => {
      acc[`${fontSize}-${fontWeight}`] = {
        fontSize,
        fontWeight,
      }
      return acc
    },
    {} as Record<
      string,
      {
        fontSize: string
        fontWeight: number
      }
    >
  )

export const textVariants = {
  ...commonStyleSet,

  // 새 텍스트 스타일 (2025.10)
  g1: {
    fontSize: '3.25rem', // 52px
    fontWeight: 600,
    lineHeight: '135%',
    letterSpacing: '-0.52px',
  },
  g2: {
    fontSize: '3rem', // 48px
    fontWeight: 600,
    lineHeight: '135%',
    letterSpacing: '-0.48px',
  },
  g3: {
    fontSize: '2.75rem', // 44px
    fontWeight: 600,
    lineHeight: '135%',
    letterSpacing: '-0.44px',
  },
  g4: {
    fontSize: '2.5rem', // 40px
    fontWeight: 600,
    lineHeight: '135%',
    letterSpacing: '-0.4px',
  },
  g5: {
    fontSize: '2.25rem', // 36px
    fontWeight: 600,
    lineHeight: '135%',
    letterSpacing: '-0.36px',
  },
  g6: {
    fontSize: '2rem', // 32px
    fontWeight: 600,
    lineHeight: '135%',
    letterSpacing: '-0.32px',
  },
  g7: {
    fontSize: '1.75rem', // 28px
    fontWeight: 600,
    lineHeight: '135%',
    letterSpacing: '-0.28px',
  },
  g8: {
    fontSize: '1.625rem', // 26px
    fontWeight: 600,
    lineHeight: '135%',
    letterSpacing: '-0.26px',
  },
  't1-semibold-compact': {
    fontSize: '1.5rem', // 24px
    fontWeight: 600,
    lineHeight: '125%',
  },
  't1-medium-compact': {
    fontSize: '1.5rem', // 24px
    fontWeight: 500,
    lineHeight: '125%',
  },
  't2-semibold-compact': {
    fontSize: '1.375rem', // 22px
    fontWeight: 600,
    lineHeight: '125%',
  },
  't2-medium-compact': {
    fontSize: '1.375rem', // 22px
    fontWeight: 500,
    lineHeight: '125%',
  },
  't3-semibold-compact': {
    fontSize: '1.25rem', // 20px
    fontWeight: 600,
    lineHeight: '125%',
  },
  't3-medium-compact': {
    fontSize: '1.25rem', // 20px
    fontWeight: 500,
    lineHeight: '125%',
  },
  't4-semibold-compact': {
    fontSize: '1.125rem', // 18px
    fontWeight: 600,
    lineHeight: '125%',
  },
  't4-medium-compact': {
    fontSize: '1.125rem', // 18px
    fontWeight: 500,
    lineHeight: '125%',
  },
  't1-semibold': {
    fontSize: '1.5rem', // 24px
    fontWeight: 600,
    lineHeight: '155%',
  },
  't1-medium': {
    fontSize: '1.5rem', // 24px
    fontWeight: 500,
    lineHeight: '155%',
  },
  't2-semibold': {
    fontSize: '1.375rem', // 22px
    fontWeight: 600,
    lineHeight: '155%',
  },
  't2-medium': {
    fontSize: '1.375rem', // 22px
    fontWeight: 500,
    lineHeight: '155%',
  },
  't3-semibold': {
    fontSize: '1.25rem', // 20px
    fontWeight: 600,
    lineHeight: '155%',
  },
  't3-medium': {
    fontSize: '1.25rem', // 20px
    fontWeight: 500,
    lineHeight: '155%',
  },
  't4-semibold': {
    fontSize: '1.125rem', // 18px
    fontWeight: 600,
    lineHeight: '155%',
  },
  't4-medium': {
    fontSize: '1.125rem', // 18px
    fontWeight: 500,
    lineHeight: '155%',
  },
  'b1-semibold-compact': {
    fontSize: '1rem', // 16px
    fontWeight: 600,
    lineHeight: '125%',
  },
  'b2-semibold-compact': {
    fontSize: '0.938rem', // 15px
    fontWeight: 600,
    lineHeight: '125%',
  },
  'b3-semibold-compact': {
    fontSize: '0.875rem', // 14px
    fontWeight: 600,
    lineHeight: '125%',
  },
  'b1-medium-compact': {
    fontSize: '1rem', // 16px
    fontWeight: 500,
    lineHeight: '125%',
  },
  'b2-medium-compact': {
    fontSize: '0.938rem', // 15px
    fontWeight: 500,
    lineHeight: '125%',
  },
  'b3-medium-compact': {
    fontSize: '0.875rem', // 14px
    fontWeight: 500,
    lineHeight: '125%',
  },
  'b1-regular-compact': {
    fontSize: '1rem', // 16px
    fontWeight: 400,
    lineHeight: '125%',
  },
  'b2-regular-compact': {
    fontSize: '0.938rem', // 15px
    fontWeight: 400,
    lineHeight: '125%',
  },
  'b3-regular-compact': {
    fontSize: '0.875rem', // 14px
    fontWeight: 400,
    lineHeight: '125%',
  },
  'b1-semibold': {
    fontSize: '1rem', // 16px
    fontWeight: 600,
    lineHeight: '155%',
  },
  'b2-semibold': {
    fontSize: '0.938rem', // 15px
    fontWeight: 600,
    lineHeight: '155%',
  },
  'b3-semibold': {
    fontSize: '0.875rem', // 14px
    fontWeight: 600,
    lineHeight: '155%',
  },
  'b1-medium': {
    fontSize: '1rem', // 16px
    fontWeight: 500,
    lineHeight: '155%',
  },
  'b2-medium': {
    fontSize: '0.938rem', // 15px
    fontWeight: 500,
    lineHeight: '155%',
  },
  'b3-medium': {
    fontSize: '0.875rem', // 14px
    fontWeight: 500,
    lineHeight: '155%',
  },
  'b1-regular': {
    fontSize: '1rem', // 16px
    fontWeight: 400,
    lineHeight: '155%',
  },
  'b2-regular': {
    fontSize: '0.938rem', // 15px
    fontWeight: 400,
    lineHeight: '155%',
  },
  'b3-regular': {
    fontSize: '0.875rem', // 14px
    fontWeight: 400,
    lineHeight: '155%',
  },
  'c-medium-compact': {
    fontSize: '0.813rem', // 13px
    fontWeight: 500,
    lineHeight: '125%',
  },
  'c-medium': {
    fontSize: '0.813rem', // 13px
    fontWeight: 500,
    lineHeight: '155%',
  },
  'c-regular-compact': {
    fontSize: '0.813rem', // 13px
    fontWeight: 400,
    lineHeight: '125%',
  },
  'c-regular': {
    fontSize: '0.813rem', // 13px
    fontWeight: 400,
    lineHeight: '155%',
  },
  // END: 새 텍스트스타일 끝
}

export const textStyles = defineTextStyles({
  '2xs': {
    value: {
      fontSize: '2xs',
      lineHeight: '0.75rem',
    },
  },
  xs: {
    value: {
      fontSize: 'xs',
      lineHeight: '1rem',
    },
  },
  sm: {
    value: {
      fontSize: 'sm',
      lineHeight: '1.25rem',
    },
  },
  md: {
    value: {
      fontSize: 'md',
      lineHeight: '1.5rem',
    },
  },
  lg: {
    value: {
      fontSize: 'lg',
      lineHeight: '1.75rem',
    },
  },
  xl: {
    value: {
      fontSize: 'xl',
      lineHeight: '1.875rem',
    },
  },
  '2xl': {
    value: {
      fontSize: '2xl',
      lineHeight: '2rem',
    },
  },
  '3xl': {
    value: {
      fontSize: '3xl',
      lineHeight: '2.375rem',
    },
  },
  '4xl': {
    value: {
      fontSize: '4xl',
      lineHeight: '2.75rem',
      letterSpacing: '-0.025em',
    },
  },
  '5xl': {
    value: {
      fontSize: '5xl',
      lineHeight: '3.75rem',
      letterSpacing: '-0.025em',
    },
  },
  '6xl': {
    value: {
      fontSize: '6xl',
      lineHeight: '4.5rem',
      letterSpacing: '-0.025em',
    },
  },
  '7xl': {
    value: {
      fontSize: '7xl',
      lineHeight: '5.75rem',
      letterSpacing: '-0.025em',
    },
  },
  none: {
    value: {},
  },
  ...Object.entries(textVariants).reduce((acc, [k, v]) => {
    return {
      ...acc,
      [k]: {
        value: v,
      },
    }
  }, {}), // custom
})
