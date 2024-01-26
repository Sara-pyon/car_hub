import { Box, Heading, Text, Image } from '@chakra-ui/react'
import NRMA from '../images/image_2.png'

const Nrma = () => {
  return (
    <Box className='section container'
        bg='bgSecondary' display='flex'
        alignItems='center' 
        borderRadius='10px' padding='30px'
        justifyContent='space-between'
        flexDirection={{base:'column', md: 'row'}}
        rowGap={5} >
        <Box maxW='600px' textAlign={{base:'center', md:'left'}}>
            <Heading fontSize='3xl'>
                No need to worry with 12 months of NRMA roadside assistance.
            </Heading>
            <Text>
                Each purchase comes with a complimentary 12 month
                membership, courtesy of Carma.
            </Text>
        </Box>
        <Box>
            <Image src={NRMA} borderRadius='100%'
            width={{base:'150px', md:'180px'}}/>
        </Box>
    </Box>
  )
}

export default Nrma