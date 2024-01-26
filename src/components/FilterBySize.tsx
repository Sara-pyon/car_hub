import CarCard from './CarCard';
import use2018Cars from '../hooks/use2018Cars';
import { Box, Button, Flex} from '@chakra-ui/react';
import CarClass from './CarFuel';
import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";


const FilterBySize = () => {
    const [selectedFuel, setSelectedFuel] = useState<string>('');
    const {data, error, isLoading} = use2018Cars(selectedFuel);
    
    if(error) throw error
    if(!data) return null
    if(isLoading) return null

  return (
    <div className='section container'>
    <CarClass onSelect={(fuel) => setSelectedFuel(fuel)} selectedFuel={selectedFuel}/>
    <Box display='flex' flexDirection='row' columnGap={5}
    overflowX='scroll' paddingBottom={2}>
      {data.map((car,index) => <CarCard key={index} car={car} />)}
    </Box>
    <Flex justifyContent='center' paddingBlock={5}>
      <Button bg='second' color='white' fontSize='sm'
              rightIcon={<IoIosArrowForward />}
              _hover={{bg:'second'}}>
        View all {selectedFuel}
      </Button>
    </Flex>
    </div>
  )
}

export default FilterBySize