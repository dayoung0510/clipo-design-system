import { textVariants } from './text-styles'

type TextVariantKey = keyof typeof textVariants
type ResponsiveTextStyle = { [K in string]?: TextVariantKey } // 반응형 textStyle을 위한 타입 정의

declare module '@chakra-ui/react' {
  interface TextProps {
    textStyle?: TextVariantKey | ResponsiveTextStyle
  }
}
