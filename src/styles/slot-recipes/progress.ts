import { defineSlotRecipe } from '@chakra-ui/react'

export const progressSlotRecipe = defineSlotRecipe({
  slots: [
    'root',
    'label',
    'track',
    'range',
    'valueText',
    'view',
    'circle',
    'circleTrack',
    'circleRange',
  ],
  className: 'chakra-progress',
  base: {
    root: {
      textStyle: 'sm',
      position: 'relative',
      colorPalette: 'blue',
    },
    track: {
      overflow: 'hidden',
      position: 'relative',
      bgColor: 'var(--progress-track-bg, {colors.colorPalette.muted})',
      opacity: 0.72,
    },
    range: {
      '--track-color': 'var(--progress-range-bg, {colors.colorPalette.500})',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transitionProperty: 'width, height',
      transitionDuration: 'slow',
      height: '100%',
      bgColor: 'var(--track-color)',
      opacity: 0.72,
      _indeterminate: {
        '--animate-from-x': '-40%',
        '--animate-to-x': '100%',
        position: 'absolute',
        willChange: 'left',
        minWidth: '50%',
        animation: 'position 1s ease infinite normal none running',
        backgroundImage:
          'linear-gradient(to right, transparent 0%, var(--track-color) 50%, transparent 100%)',
      },
    },
    label: {
      display: 'inline-flex',
      fontWeight: 'medium',
      alignItems: 'center',
      gap: '1',
    },
    valueText: {
      textStyle: 'md',
      lineHeight: '1',
      fontWeight: 'medium',
    },
  },
  variants: {
    variant: {
      outline: {
        track: {
          shadow: 'inset',
          '--progress-track-bg': '{colors.colorPalette.muted}',
        },
        range: {
          '--progress-range-bg': '{colors.colorPalette.500}',
        },
      },
      subtle: {
        track: {
          '--progress-track-bg': '{colors.colorPalette.muted}',
        },
        range: {
          '--progress-range-bg': '{colors.colorPalette.500}',
        },
      },
    },
    shape: {
      square: {},
      rounded: {
        track: {
          borderRadius: 'l1',
        },
      },
      full: {
        track: {
          borderRadius: 'full',
        },
      },
    },
    striped: {
      true: {
        range: {
          backgroundImage:
            'linear-gradient(45deg, var(--stripe-color) 25%, transparent 25%, transparent 50%, var(--stripe-color) 50%, var(--stripe-color) 75%, transparent 75%, transparent)',
          backgroundSize: 'var(--stripe-size) var(--stripe-size)',
          '--stripe-size': '1rem',
          '--stripe-color': 'rgba(255, 255, 255, 0.3)',
        },
      },
    },
    animated: {
      true: {
        range: {
          '--animate-from': 'var(--stripe-size)',
          animation: 'bg-position 1s linear infinite',
        },
      },
    },
    size: {
      xs: {
        track: {
          h: '1.5',
        },
      },
      sm: {
        track: {
          h: '2',
        },
      },
      md: {
        track: {
          h: '2.5',
        },
      },
      lg: {
        track: {
          h: '3',
        },
      },
      xl: {
        track: {
          h: '4',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'md',
    shape: 'rounded',
  },
})
