import { defineSlotRecipe } from '@chakra-ui/react'

export const tableSlotRecipe = defineSlotRecipe({
  className: 'chakra-table',
  slots: ['root', 'header', 'body', 'row', 'columnHeader', 'cell', 'footer', 'caption'],
  base: {
    root: {
      fontVariantNumeric: 'lining-nums tabular-nums',
      borderCollapse: 'collapse',
      width: 'full',
      textAlign: 'start',
      verticalAlign: 'top',

      // custom
      '& th': {
        textAlign: 'center',
      },
      '& td': {
        fontSize: 'md',
        textAlign: 'center',
        maxWidth: '20rem',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      },
    },
    row: {
      _selected: {
        bg: 'colorPalette.subtle',
      },
    },
    cell: {
      textAlign: 'start',
      alignItems: 'center',
    },
    columnHeader: {
      fontWeight: 'medium',
      textAlign: 'start',
      color: 'fg',
    },
    caption: {
      fontWeight: 'medium',
      textStyle: 'xs',
    },
    footer: {
      fontWeight: 'medium',
    },
  },
  variants: {
    interactive: {
      true: {
        body: {
          '& tr': {
            _hover: {
              bg: 'colorPalette.subtle',
            },
          },
        },
      },
    },
    stickyHeader: {
      true: {
        header: {
          '& :where(tr)': {
            top: 'var(--table-sticky-offset, 0)',
            position: 'sticky',
            zIndex: 1,
          },
        },
      },
    },
    striped: {
      true: {
        row: {
          '&:nth-of-type(odd) td': {
            bg: 'bg.muted',
          },
        },
      },
    },
    showColumnBorder: {
      true: {
        columnHeader: {
          '&:not(:last-of-type)': {
            borderInlineEndWidth: '1px',
          },
        },
        cell: {
          '&:not(:last-of-type)': {
            borderInlineEndWidth: '1px',
          },
        },
      },
    },
    variant: {
      line: {
        columnHeader: {
          borderBottomWidth: '1px',
          bg: 'bg.subtle',
        },
        cell: {
          borderBottomWidth: '1px',
        },
        row: {
          bg: 'bg.panel',
        },
      },
      outline: {
        root: {
          boxShadow: '0 0 0 1px {colors.border}',
          overflow: 'hidden',
          mb: '1px', // boxShadow 표시를 위한 간격 추가
        },
        columnHeader: {
          borderBottomWidth: '1px',
        },
        header: {
          bg: 'bg.subtle',
        },
        row: {
          '&:not(:last-of-type)': {
            borderBottomWidth: '1px',
          },
        },
        footer: {
          borderTopWidth: '1px',
        },
        // custom
        '& th': {
          color: 'black.400',
          fontWeight: 500,
        },
      },
    },
    size: {
      sm: {
        root: {},
        columnHeader: {
          px: '3',
          py: '1',
          textStyle: 'b2-medium-compact',
          height: '40px',
        },
        cell: {
          px: '3',
          py: '2',
          textStyle: 'b2-medium',
        },
      },
      md: {
        root: {
          textStyle: 'b2-medium',
        },
        columnHeader: {
          px: '3',
          py: '3',
          textStyle: 'b2-medium-compact',
          height: '44px',
        },
        cell: {
          px: '3',
          py: '3',
        },
      },
      lg: {
        root: {
          textStyle: 'md',
        },
        columnHeader: {
          px: '4',
          py: '3',
        },
        cell: {
          px: '4',
          py: '3',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'line',
    size: 'md',
  },
})
