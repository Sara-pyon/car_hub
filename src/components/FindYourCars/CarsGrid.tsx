import { SimpleGrid, Text} from '@chakra-ui/react'
import useCars from '../../hooks/useCars'
import CarCard from '../CarCard';

const CarsGrid = () => {
    const {data:cars, error, isLoading} = useCars();

    if(error) return <Text>{error.message}</Text>;
    if(isLoading) return null

  return (
    <SimpleGrid columns={{base:2,lg:3,xl:4}}
    columnGap={3} rowGap={3}
    paddingTop={{base:3, md:6}} paddingBottom={3}>
        {cars?.map(car => <CarCard car={car} cardMaxW='300px'/>)}
    </SimpleGrid>
  )
}

export default CarsGrid