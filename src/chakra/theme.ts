import { extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import { Button } from "./Button";
// 2. Extend the theme to include custom colors, fonts, etc
export const Theme = extendTheme({
  colors: {
    brand: {
      100: "#FF3c00",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "white",
      },
    }),
  },
  components: {
    Button,
    // Input, // not working for some reason - come back to this
  },
});