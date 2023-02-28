import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  styles: {
    global: (props:any) => ({
      body: {
        bg: mode('rgb(240, 231, 219)','rgb(32, 32, 35)')(props),
      }
    })
  },
})

export default theme;
