import { Box, Heading, Text } from '@chakra-ui/react'
import useCars from '../../hooks/useCars'

const FindHeading = () => {
    const {data:cars} = useCars();

  return (
    <Box borderBottom='2px solid #DCE4E9'
         paddingBottom={5}>
        <Text opacity='0.7' fontSize='0.9rem'>
            Our cars
        </Text>
        <Heading paddingBlock='0.6rem 1rem'
                 fontSize='3xl'>
            Our cars ({cars?.length} results)
        </Heading>
        <Text fontSize='0.9rem'>
            We have a huge selection of quality used cars to choose from, with new stock arriving every day. Each car has been meticulously checked by an expert, 
            so you know it’s up to scratch!
        </Text>
    </Box>
  )
}

export default FindHeading