import FooterSupport from './FooterSupport'
import FooterMenu from './FooterMenu'
import FooterContent from './FooterContent'
import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box borderTop='2px solid #DCE4E9'
        marginTop={5}>
      <div className='container section'>
      <FooterSupport />
      <FooterMenu />
      <FooterContent />
      </div>
    </Box>
  )
}

export default Footer