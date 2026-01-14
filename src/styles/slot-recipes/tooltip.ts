import { defineSlotRecipe } from '@chakra-ui/react'

export const tooltipSlotRecipe = defineSlotRecipe({
  slots: ['trigger', 'arrow', 'arrowTip', 'positioner', 'content'],
  className: 'chakra-tooltip',
  base: {
    content: {
      '--tooltip-bg': 'colors.bg.inverted',
      bg: 'var(--tooltip-bg)',
      color: 'fg.inverted',
      px: '2.5',
      py: '1',
      borderRadius: 'l2',
      fontWeight: 'medium',
      textStyle: 'xs',
      boxShadow: 'md',
      maxW: 'xs',
      zIndex: 'tooltip',
      transformOrigin: 'var(--transform-origin)',
      _open: {
        animationStyle: 'scale-fade-in',
        animationDuration: 'fast',
      },
      _closed: {
        animationStyle: 'scale-fade-out',
        animationDuration: 'fast',
      },
    },
    arrow: {
      '--arrow-size': 'sizes.2',
    },
    arrowTip: {
      borderTopWidth: '1px',
      borderInlineStartWidth: '1px',
    },
  },
  variants: {
    variant: {
      dark: {
        content: {
          '--tooltip-bg': 'colors.bg.inverted',
          bg: 'var(--tooltip-bg)',
          color: 'fg.inverted',
        },
        arrow: {
          '--arrow-background': 'var(--tooltip-bg)',
        },
        arrowTip: {
          borderColor: 'var(--tooltip-bg)',
        },
      },
      light: {
        content: {
          '--tooltip-bg': 'colors.white',
          bg: 'var(--tooltip-bg)',
          color: 'fg',
          borderWidth: '1px',
          borderColor: 'border',
        },
        arrow: {
          '--arrow-background': 'var(--tooltip-bg)',
        },
        arrowTip: {
          borderColor: 'border',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'dark',
  },
})
