import { defineRecipe } from '@chakra-ui/react'

const Alert = defineRecipe({
  variants: {
    success: {
      container: {
        color: 'green.600',
        backgroundColor: 'green.100',
      },
    },
    error: {
      container: {
        color: 'red.600',
        backgroundColor: 'red.100',
      },
    },
    info: {
      container: {
        color: 'blue.600',
        backgroundColor: 'blue.100',
      },
    },
    warning: {
      container: {
        color: 'orange.600',
        backgroundColor: 'orange.100',
      },
    },
  },
})

export default Alert
