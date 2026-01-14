import { defineRecipe } from '@chakra-ui/react'

export const containerRecipe = defineRecipe({
  className: 'chakra-container',
  base: {
    position: 'relative',
    maxWidth: '8xl',
    w: '100%',
    mx: 'auto',
    px: {
      base: '4',
      md: '4',
      lg: '4',
    },
  },
  variants: {
    centerContent: {
      true: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    fluid: {
      true: {
        maxWidth: 'full',
      },
    },
  },
})
