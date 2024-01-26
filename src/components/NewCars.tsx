import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import useNewCars from '../hooks/useNewCars'
import CarCard from './CarCard';
import { IoIosArrowForward } from 'react-icons/io';

const NewCars = () => {
    const {data, error, isLoading} = useNewCars();

    if(!data) return null;
    if(error) throw error;
    if(isLoading) return null;

  return (
    <div className='section container'>
    <Heading paddingBottom={7} fontSize='3xl'>
        New cars every day</Heading>
    <Box display='flex' flexDirection='row' columnGap={5}
        overflowX='scroll' paddingBottom={2}>
        {data.map((car,index) => <CarCard key={index} car={car} />)}
    </Box>
    <Flex justifyContent='center' paddingBlock={5}>
        <Button bg='second' color='white' fontSize='sm'
                  rightIcon={<IoIosArrowForward />}
                  _hover={{bg:'second'}}>
            Browse (733) cars
          </Button>
    </Flex>
    </div>
  )
}

export default NewCars