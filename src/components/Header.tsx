import HeaderContent from './Header/HeaderContent'
import NavBar from './NavBar/NavBar'
import bg from '../images/background.jpg.png'
import { Box } from '@chakra-ui/react'

const Header = () => {
  return (
   <Box backgroundImage={bg}
        backgroundPosition="center"
        backgroundSize='100%'
        >
    <div className="container">
      <NavBar />
      <HeaderContent />
    </div>
   </Box>
  )
}

export default Header