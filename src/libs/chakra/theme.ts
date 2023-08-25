import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { Styles, GlobalStyleProps } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const styles: Styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      bg: mode("white", "#202023")(props),
      color: mode("signatureBlack", "signatureMilk")(props),
    },
  }),
};

const components = {
  Link: {
    baseStyle: (props: GlobalStyleProps) => ({
      color: mode("#202023", "#f0e7db")(props),
      textUnderlineOffsite: 3,
      fontWeight: "580",
      _hover: {
        color: "signatureRed",
        textDecoration: "none",
      },
    }),
  },
  Icon: {
    baseStyle: {
      bg: "none",
      w: "fit",
      display: "flex",
      align: "center",
      justify: "center",
      p: 0,
      margin: 0,
      transition: "0.2s",
      _hover: {
        bg: "none",
        transform: "scale(1.33); rotate(0deg)",
      },
      _active: {
        bg: "none",
      },
    },
  },
};

const fonts = {};

const colors = {
  signatureRed: "#fd4145",
  signatureMilk: "#f0e7db",
  signatureBlack: "#202023",
  signatureDarkBlue: "#0e2d51",
  signatureGrey: "#54595F",
};

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors,
});

export default theme;
