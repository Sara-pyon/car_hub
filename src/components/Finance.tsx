import { Box, Flex, Heading, Text, Image, SimpleGrid} from '@chakra-ui/react'
import image from '../images/Our_expert_team.jpg.png'
import FinanceCard from './FinanceCard'
import { GoTrophy } from "react-icons/go";
import { BsHandThumbsUp } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

const Finance = () => {
  return (
   <Box bg='first'>
    <Box className='section container' paddingInline={5}>
        <Flex justifyContent={{base:'center', lg:'space-between'}} 
            textAlign={{base:'center', lg:'left'}}>
            <Box maxW={{base:'100%',lg:'500px'}}>
                <Heading color='white' fontSize='5xl' paddingBottom={3}>
                    Our expert team makes car finance easier
                </Heading>
                <Text color='white'>Finance your car through Carma’s carefully
                selected panel of financiers. Every
                application is assigned a Carma finance
                consultant, who will help you throughout the
                whole process. Plus, you can contact us any
                time if you have a question or need help –
                even before you’ve submitted your
                application.</Text>
            </Box>
            <div className='hide-pic-below-lg'>
                <Box width='400px'>
                    <Image src={image} borderRadius={5}/>
                </Box>
            </div>
        </Flex>
        <SimpleGrid columns={{base:1,md: 2, lg:3}} 
            paddingTop={20} rowGap={5} columnGap={2}
            justifyItems='center'>
            <FinanceCard icon={<GoTrophy color='#FF6E82' fontSize={30} />}
                heading='Competitive rates'
                text='Competitive rates across a carefully
                selected panel of financiers offering flexible
                repayment options. No hassle, no haggle.' />
            <FinanceCard icon={<BsHandThumbsUp color='#FF6E82' fontSize={30} />}
                heading='Quote and sign, all online'
                text='Obtain a personalised quote for your
                selected car. Sign your finance paperwork
                from the convenience of your own home.' />
            <FinanceCard icon={<HiOutlineComputerDesktop color='#FF6E82' fontSize={33} />}
                heading='Get on the road faster'
                text='Submit your application in approximately 20
                minutes. Decisions typically happen the
                same or next business day.' />
        </SimpleGrid>
    </Box>
   </Box>
  )
}

export default Finance