import { ThemeConfig, extendTheme } from "@chakra-ui/react"
import '@fontsource-variable/inter';

const config: ThemeConfig={
  initialColorMode: 'light'
}

const theme = extendTheme({
  config,
  fonts: {
    body: `'Inter Variable', sans-serif`,
  },
  colors: {
    primary: '#312a45',
    deepPink: '#e83657',
    lightPink: '#ff6e82',
  },
  components: {
    Button: {
      baseStyle: {
        bg: '#e83657',
        _hover: {
          bg: '#e83657'
        }
      },
      variants: {
        // Make a variant, we'll call it `base` here and leave it empty
        base: {}
    },
    defaultProps: {
      // Then here we set the base variant as the default
      variant: 'base'
    }
  },
    Text:{
      baseStyle:{
        color: '#150d2c'
      },
      variants: {
        // Make a variant, we'll call it `base` here and leave it empty
        base: {}
    },
    defaultProps: {
      // Then here we set the base variant as the default
      variant: 'base'
    }
    }
 }
})

export default theme;