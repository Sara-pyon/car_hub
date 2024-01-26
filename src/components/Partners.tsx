import { Box, Heading, SimpleGrid, Image } from '@chakra-ui/react'
import image1 from '../images/image.png'
import image2 from '../images/image_1.png'
import image3 from '../images/image_2.png'
import image4 from '../images/image_3.png'
import image5 from '../images/image_4.png'

const Partners = () => {
  return (
    <Box className='section container'>
        <Heading fontSize='3xl' textAlign='center'
            paddingBottom={1}>
            Our trusted partners
        </Heading>
        <SimpleGrid columns={{base:2, md:3, lg:5}}
                justifyItems='center'>
            <Image src={image1} width='130px' />
            <Image src={image2} width='130px' />
            <Image src={image3} width='130px' />
            <Image src={image4} width='130px' />
            <Image src={image5} width='130px' />
        </SimpleGrid>
    </Box>
  )
}

export default Partners