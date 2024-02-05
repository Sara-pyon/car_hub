import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import useNewCars from '../hooks/useNewCars'
import CarCard from './CarCard';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import useCarQueryStore from '../store/carQueryStore';

const NewCars = () => {
    const {data, error, isLoading} = useNewCars();
    const navigate = useNavigate();
    const setYear = useCarQueryStore(s => s.setYear);
    const reset = useCarQueryStore(s => s.reset) ;

    if(!data) return null;
    if(error) throw error;
    if(isLoading) return null;

  return (
    <div className='section container'>
    <Heading paddingBottom={7} fontSize='3xl'>
        New cars every day</Heading>
    <Box display='flex' flexDirection='row' columnGap={5}
        overflowX='scroll' paddingBottom={2}>
        {data.map((car,index) => <CarCard key={index} car={car} cardW='280px'/>)}
    </Box>
    <Flex justifyContent='center' paddingBlock={5}>
        <Button bg='second' color='white' fontSize='sm'
                  rightIcon={<IoIosArrowForward />}
                  _hover={{bg:'second'}}
                  onClick={() => {
                    reset;
                    setYear('2023');
                    navigate('/cars/find');}}>
            Browse (733) cars
          </Button>
    </Flex>
    </div>
  )
}

export default NewCars