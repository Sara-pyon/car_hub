import CarCard from './CarCard';
import useCars from '../hooks/useCars';
import { Box, Button, Flex, Text} from '@chakra-ui/react';
import CarClass from './CarFuel';
import { IoIosArrowForward } from "react-icons/io";
import CarCardSkelton from './CarCardSkelton';
import useCarQueryStore from '../store/carQueryStore';
import { Link } from 'react-router-dom';


const FilterByFuel = () => {
    const selectedFuel = useCarQueryStore(s => s.carQuery.fuel);
    const setFuel = useCarQueryStore(s => s.setFuel)
    const {data, error, isLoading} = useCars();
    const skeltons = [1,2,3,4];

    if(error) return <Text>{error.message}</Text>

  return (
    <div className='section container'>
      <CarClass onSelect={(fuel) => setFuel(fuel)} selectedFuel={selectedFuel}/>
      <Box display='flex' flexDirection='row' columnGap={5}
      overflowX='scroll' paddingBottom={2}>
        {isLoading && skeltons.map(s => <CarCardSkelton key={s} />)}
        {data?.map((car,index) => 
        <CarCard key={index} car={car} cardW='280px'/>)}
      </Box>
      <Flex justifyContent='center' paddingBlock={5}>
        <Button bg='second' color='white' fontSize='sm'
                rightIcon={<IoIosArrowForward />}
                _hover={{bg:'second'}}>
          <Link to='/cars/find'>View all {selectedFuel}</Link>
        </Button>
      </Flex>
    </div>
  )
}

export default FilterByFuel