import { Box } from "@chakra-ui/react"
import NavBar from "../components/NavBar/NavBar"
import  bg  from '../images/Trade-inBG.jpg.png'
import TradeInHeader from "../components/TradeInHeading"



const SellOrTrade = () => {
  return (
    <>
    <Box backgroundImage={bg}
         backgroundPosition="center"
         backgroundRepeat='no-repeat'
         backgroundSize='cover' >
      <NavBar background='transparent' location='sell' />
      <TradeInHeader />
    </Box>
    </>
  )
}

export default SellOrTrade