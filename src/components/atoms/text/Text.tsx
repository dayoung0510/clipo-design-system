import { Text as ChakraText, type TextProps } from "@chakra-ui/react";

const Text = ({ children, ...props }: TextProps) => {
  return <ChakraText {...props}>{children}</ChakraText>;
};

export default Text;
