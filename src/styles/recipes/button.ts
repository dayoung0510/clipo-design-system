import { defineRecipe } from '@chakra-ui/react'

export const buttonRecipe = defineRecipe({
  className: 'chakra-button',
  base: {
    display: 'inline-flex',
    appearance: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    position: 'relative',
    borderRadius: 'md',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    borderWidth: '1px',
    borderColor: 'transparent',
    cursor: 'button',
    flexShrink: '0',
    outline: '0',
    isolation: 'isolate',
    fontSize: '1rem',
    fontWeight: 'medium',
    lineHeight: '125%',
    transitionProperty: 'common',
    transitionDuration: 'moderate',
    focusVisibleRing: 'outside',
    _disabled: {
      layerStyle: 'disabled',
      opacity: '0.5', // custom
    },
    _icon: {
      flexShrink: '0',
    },
    colorPalette: 'blue', // custom
  },
  variants: {
    size: {
      '2xs': {
        h: '6',
        minW: '6',
        textStyle: 'b3-medium-compact',
        px: '2',
        gap: '1',
        _icon: {
          width: '3.5',
          height: '3.5',
        },
      },
      xs: {
        h: '8',
        minW: '8',
        textStyle: 'c-medium-compact',
        px: '2.5',
        gap: '1',
        _icon: {
          width: '4.5',
          height: '4.5',
        },
      },
      sm: {
        h: '9',
        minW: '9',
        px: '3.5',
        textStyle: 'b3-medium-compact',
        gap: '2',
        _icon: {
          width: '4',
          height: '4',
        },
      },
      md: {
        h: '10',
        minW: '10',
        textStyle: 'b2-medium-compact',
        px: '4',
        gap: '2',
        _icon: {
          width: '5',
          height: '5',
        },
      },
      lg: {
        h: '11',
        minW: '11',
        textStyle: 'b1-medium-compact',
        px: '4',
        gap: '2',
        _icon: {
          width: '5',
          height: '5',
        },
      },
      xl: {
        h: '12',
        minW: '12',
        textStyle: 'b1-semibold-compact',
        px: '5',
        gap: '2',
        _icon: {
          width: '5',
          height: '5',
        },
      },
      '2xl': {
        h: '16',
        minW: '16',
        textStyle: 'b1-medium-compact',
        px: '7',
        gap: '3',
        _icon: {
          width: '6',
          height: '6',
        },
      },
    },
    variant: {
      solid: {
        bg: 'colorPalette.solid',
        color: 'colorPalette.contrast',
        _hover: {
          bg: 'colorPalette.solid/90',
        },
        _expanded: {
          bg: 'colorPalette.solid/90',
        },
      },
      subtle: {
        bg: 'colorPalette.subtle',
        color: 'colorPalette.fg',
        _hover: {
          bg: 'colorPalette.muted',
        },
        _expanded: {
          bg: 'colorPalette.muted',
        },
      },
      surface: {
        bg: 'colorPalette.subtle',
        color: 'colorPalette.fg',
        shadow: '0 0 0px 1px var(--shadow-color)',
        shadowColor: 'colorPalette.muted',
        _hover: {
          bg: 'colorPalette.muted',
        },
        _expanded: {
          bg: 'colorPalette.muted',
        },
      },
      outline: {
        borderWidth: '1px',
        borderColor: 'colorPalette.emphasized',
        color: 'colorPalette.fg',
        _hover: {
          bg: 'colorPalette.subtle',
        },
        _expanded: {
          bg: 'colorPalette.subtle',
        },
      },
      ghost: {
        color: 'colorPalette.fg',
        _hover: {
          bg: 'colorPalette.subtle',
        },
        _expanded: {
          bg: 'colorPalette.subtle',
        },
      },
      plain: {
        color: 'colorPalette.fg',
      },
      link: {
        color: 'colorPalette.solid',
        border: 'none',
        bgColor: 'transparent',
        height: 'fit-content',
        px: 0,
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
    circle: {
      true: {
        rounded: 'full',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'solid',
  },
})
