import CarCard from './CarCard';
import use2018Cars from '../hooks/use2018Cars';
import { Box} from '@chakra-ui/react';
import CarClass, { carFuel } from './CarFuel';
import { useState } from 'react';


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
    overflowX='scroll'>
      {data.map((car,index) => <CarCard key={index} car={car} />)}
    </Box>
    </div>
  )
}

export default FilterBySize