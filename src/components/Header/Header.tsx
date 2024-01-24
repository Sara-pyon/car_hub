import HeaderContent from './HeaderContent'
import NavBar from '../NavBar/NavBar'
import bg from '../../images/background.jpg.png'
import { Box } from '@chakra-ui/react'
import HeaderFooter from './HeaderFooter'

const Header = () => {
  return (
   <Box backgroundImage={bg}
        backgroundPosition="center"
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        objectFit='cover'
        >
    <div className="container">
      <NavBar />
      <HeaderContent />
    </div>
      <HeaderFooter />
   </Box>
  )
}

export default Header