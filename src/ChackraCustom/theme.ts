import { extendTheme } from "@chakra-ui/react"
import '@fontsource-variable/inter';

const theme = extendTheme({
  fonts: {
    body: `'Inter Variable', sans-serif`,
  },
  colors: {
    primary: '#312a45',
    deepPink: '#e83657',
    lightPink: '#e26176',
  },
})

export default theme;