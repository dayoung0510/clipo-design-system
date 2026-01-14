import { defineGlobalStyles } from '@chakra-ui/react'

export const globalCss = defineGlobalStyles({
  '*': {
    fontFeatureSettings: '"cv11"',
    '--ring-inset': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--ring-offset-width': '0px',
    '--ring-offset-color': '#fff',
    '--ring-color': 'rgba(66, 153, 225, 0.6)',
    '--ring-offset-shadow': '0 0 #0000',
    '--ring-shadow': '0 0 #0000',
    '--brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--invert': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--drop-shadow': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--backdrop-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--backdrop-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--backdrop-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--backdrop-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--backdrop-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--backdrop-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--backdrop-opacity': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--backdrop-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--backdrop-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--global-font-mono': 'fonts.mono',
    '--global-font-body': 'fonts.body',
    '--global-color-border': 'colors.border',
    '--focus-ring-width': '0px', // 현재는 숨김처리만. 추후 포커스가 잡히지 않도록 고려 필요.
  },
  html: {
    color: 'fg',
    bg: 'bg',
    lineHeight: '1.5',
    colorPalette: 'gray',
  },
  '*::placeholder': {
    color: 'fg.fg',
    opacity: 0.5,
  },
  '*::selection': {
    bg: 'colorPalette.muted/80',
  },
  // custom
  'html, body': {
    color: '{colors.fg}',
    lineHeight: 'tall',
    backgroundColor: 'white',
    fontFamily: 'Pretendard GOV',
    fontWeight: 400,
    fontSize: {
      base: '16px',
    },
  },
  body: {
    pointerEvents: 'auto !important',
  },
  '::-webkit-scrollbar': {
    width: '6px',
    height: '6px',
  },
  '::-webkit-scrollbar-track': {
    bg: 'transparent',
  },
  '::-webkit-scrollbar-thumb': {
    bg: 'gray.200',
    rounded: 'full',
  },
  '::-webkit-scrollbar-thumb:hover': {
    background: 'gray.400',
  },
  'body > #root': {
    display: 'flex',
    flexFlow: 'column',
    overflowX: 'hidden',
    height: '100vh',
  },
  button: {
    fontFamily: 'Pretendard GOV !important',
  },
  /* Chrome, Safari, Edge, Opera */
  'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
})
