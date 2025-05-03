import { createSystem, defaultConfig } from "@chakra-ui/react";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        red: "#73020C",
        wine: "#590209",
        yellow: "#F2B872",
        mustard: "#D9985F",
        black: "#0D0D0D",
      },
    },
  },
});

export default system