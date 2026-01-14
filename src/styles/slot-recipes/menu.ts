import { defineSlotRecipe } from '@chakra-ui/react'

export const menuSlotRecipe = defineSlotRecipe({
  className: 'chakra-menu',
  slots: [
    'arrow',
    'arrowTip',
    'content',
    'contextTrigger',
    'indicator',
    'item',
    'itemGroup',
    'itemGroupLabel',
    'itemIndicator',
    'itemText',
    'positioner',
    'separator',
    'trigger',
    'triggerItem',
    'itemCommand',
  ],
  base: {
    content: {
      outline: 0,
      bg: 'bg.panel',
      boxShadow: 'lg',
      color: 'fg',
      maxHeight: 'var(--available-height)',
      '--menu-z-index': 'zIndex.dropdown',
      zIndex: 'calc(var(--menu-z-index) + var(--layer-index, 0))',
      borderRadius: 'md',
      overflow: 'hidden',
      overflowY: 'auto',
      _open: {
        animationStyle: 'slide-fade-in',
        animationDuration: 'fast',
      },
      _closed: {
        animationStyle: 'slide-fade-out',
        animationDuration: 'faster',
      },
      colorPalette: 'blue',
    },
    item: {
      textDecoration: 'none',
      color: 'fg',
      userSelect: 'none',
      borderRadius: 'l1',
      width: '100%',
      display: 'flex',
      cursor: 'menuitem',
      alignItems: 'center',
      textAlign: 'start',
      position: 'relative',
      flex: '0 0 auto',
      outline: 0,
      _disabled: {
        layerStyle: 'disabled',
      },
      _hover: {
        color: 'colorPalette.solid',
      },
    },
    itemText: {
      flex: '1',
    },
    itemGroupLabel: {
      px: '2',
      py: '1.5',
      fontWeight: 'semibold',
      textStyle: 'sm',
    },
    indicator: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: '0',
    },
    itemCommand: {
      opacity: '0.6',
      textStyle: 'xs',
      ms: 'auto',
      ps: '4',
      letterSpacing: 'widest',
    },
    separator: {
      height: '1px',
      bg: 'bg.muted',
      my: '1',
      mx: '-1',
    },
  },
  variants: {
    variant: {
      subtle: {
        item: {
          _highlighted: {
            bg: 'bg.emphasized/60',
          },
        },
      },
      solid: {
        item: {
          _highlighted: {
            bg: 'colorPalette.solid',
            color: 'colorPalette.contrast',
          },
        },
      },
    },
    size: {
      sm: {
        content: {
          minW: '8rem',
          p: 1.5,
        },
        item: {
          gap: 2,
          textStyle: 'b2-medium-compact',
          px: 2,
          py: 1.5,
          // MenuItem 내부 첫 번째 자식이 Icon인 경우 아이콘 기본 스타일 (sm)
          '& > svg:first-of-type, & > .chakra-icon:first-of-type': {
            marginLeft: 1.5, // 6px
            width: 3.5, // 14px
            height: 3.5, // 14px
          },
        },
      },
      md: {
        content: {
          minW: '8rem',
          p: 1.5,
        },
        item: {
          gap: 2,
          textStyle: 'b2-medium-compact',
          py: 2,
          px: 2.5,
          // MenuItem 내부 첫 번째 자식이 Icon인 경우 아이콘 기본 스타일 (md)
          '& > svg:first-of-type, & > .chakra-icon:first-of-type': {
            marginLeft: '2px',
            width: 4, // 16px
            height: 4, // 16px
          },
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'subtle',
  },
})
