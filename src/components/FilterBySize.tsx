import CarCard from './CarCard';
import use2018Cars from '../hooks/use2018Cars';
import { Box, Flex } from '@chakra-ui/react';
import CarClass from './CarClass';


const FilterBySize = () => {
    const {data, error, isLoading} = use2018Cars();

    if(error) throw error
    if(!data) return null
    if(isLoading) return null

    console.log(data);

  return (
    <div className='section container'>
    <CarClass />
    <Box display='flex' flexDirection='row'
    overflowX='scroll'>
      {data.map((car,index) => <CarCard key={index} car={car} />)}
    </Box>
    </div>
  )
}

export default FilterBySize