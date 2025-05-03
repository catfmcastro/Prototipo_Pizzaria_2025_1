import { ColorModeProvider } from "./color-mode";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
// theme
import system from "../../Theme.js"

export function Provider(props) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
