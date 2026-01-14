import { defineSlotRecipe } from '@chakra-ui/react'

export const checkboxSlotRecipe = defineSlotRecipe({
  slots: ['root', 'label', 'control', 'indicator', 'group'],
  className: 'chakra-checkbox',
  base: {
    root: {
      display: 'inline-flex',
      gap: '2',
      alignItems: 'center',
      verticalAlign: 'top',
      position: 'relative',
      cursor: 'pointer',
      colorPalette: 'blue',
    },
    control: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: '0',
      color: 'white',
      borderWidth: '1px',
      borderColor: 'transparent',
      borderRadius: 'l1',
      focusVisibleRing: 'outside',
      cursor: 'pointer',
      _icon: {
        boxSize: 'full',
      },
      _invalid: {
        colorPalette: 'red',
        borderColor: 'border.error',
      },
      _disabled: {
        opacity: '0.5',
      },
      colorPalette: 'colorPalette',
    },
    label: {
      userSelect: 'none',
      cursor: 'pointer',
      _disabled: {
        opacity: '0.5',
      },
    },
  },
  variants: {
    size: {
      xs: {
        root: {
          gap: '2.5',
        },
        label: {
          textStyle: 'xs',
        },
        control: {
          boxSize: '3',
        },
      },
      sm: {
        root: {
          gap: '2.5',
        },
        label: {
          textStyle: 'b2-medium-compact',
        },
        control: {
          boxSize: '4',
        },
      },
      md: {
        root: {
          gap: '2.5',
        },
        label: {
          textStyle: 'b1-medium-compact',
        },
        control: {
          boxSize: '5',
          p: '0.5',
        },
      },
      lg: {
        root: {
          gap: '2.5',
        },
        label: {
          textStyle: 'b1-medium-compact',
        },
        control: {
          boxSize: '6',
          p: '0.5',
        },
      },
    },
    variant: {
      outline: {
        control: {
          borderColor: 'border',
          '&:is([data-state=checked], [data-state=indeterminate])': {
            color: 'colorPalette.fg',
            borderColor: 'colorPalette.solid',
          },
        },
      },
      solid: {
        control: {
          borderColor: 'border.emphasized',
          borderWidth: '1.5px',
          bgColor: 'white',
          '&:is([data-state=checked], [data-state=indeterminate])': {
            bg: 'colorPalette.solid',
            color: 'colorPalette.contrast',
            borderColor: 'colorPalette.solid',
          },
        },
      },
      subtle: {
        control: {
          bg: 'colorPalette.muted',
          borderColor: 'colorPalette.muted',
          '&:is([data-state=checked], [data-state=indeterminate])': {
            color: 'colorPalette.fg',
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
})
