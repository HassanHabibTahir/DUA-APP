// theme.ts
import { extendTheme } from "native-base";
import Colors from "./colors";

const customTheme = extendTheme({
  colors: {
   ...Colors
  },
  components: {
    Button: {
      baseStyle: {
        rounded: "md",
      },
      defaultProps: {
        colorScheme: "primary",
      },
    },
  },
  fontConfig: {
    Roboto: {
      100: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      200: {
        normal: "Roboto-Regular",
        italic: "Roboto-Italic",
      },
      300: {
        normal: "Roboto-Bold",
      },
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
    mono: "Roboto",
  },
});

export default customTheme;
