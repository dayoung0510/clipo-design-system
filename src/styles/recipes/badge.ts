import { defineRecipe } from '@chakra-ui/react'

export const badgeRecipe = defineRecipe({
  className: 'chakra-badge',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: 'sm',
    fontWeight: 'medium',
    fontVariantNumeric: 'tabular-nums',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    columnGap: 1,

    // 텍스트가 텍스트노드로 들어갔을 때 Icon 위치에 따라 간격 적용
    '& > svg:first-of-type, & > .chakra-icon:first-of-type': {
      // marginRight: 1,
    },
    '& > svg:not(:first-of-type), & > .chakra-icon:not(:first-of-type)': {
      // marginLeft: 1,
    },
  },
  variants: {
    variant: {
      solid: {
        bg: 'colorPalette.solid',
        color: 'colorPalette.contrast',
      },
      subtle: {
        bg: 'colorPalette.subtle',
        color: 'colorPalette.fg',
      },
      outline: {
        color: 'colorPalette.fg',
        shadow: 'inset 0 0 0px 1px var(--shadow-color)',
        shadowColor: 'colorPalette.muted',
      },
      surface: {
        bg: 'colorPalette.subtle',
        color: 'colorPalette.fg',
        shadow: 'inset 0 0 0px 1px var(--shadow-color)',
        shadowColor: 'colorPalette.muted',
      },
      plain: {
        color: 'colorPalette.fg',
      },
    },
    size: {
      xs: {
        textStyle: 'xs',
        px: '4px',
        py: '1.5px',
        minH: '4',
      },
      sm: {
        textStyle: 'c-medium-compact',
        px: 1.5,
        py: '2px',
        minH: '5',
      },
      md: {
        textStyle: 'b3-medium-compact',
        px: 2,
        py: '3px',
        minH: '6',
      },
      lg: {
        fontWeight: 500,
        lineHeight: '150%',
        fontSize: '0.875rem', // 14px
        px: 2,
        py: '3.5px',
        minH: '7',
      },
    },
    circle: {
      true: {
        borderRadius: 'full',
        px: 2,
      },
    },
    fit: {
      true: {
        p: '0 0.1875rem',
        minH: 'none',
        textStyle: 'b2-medium-compact',
        rounded: 'sm',
      },
    },
  },
  defaultVariants: {
    variant: 'subtle',
    size: 'sm',
  },
})
