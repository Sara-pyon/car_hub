import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar';
import { Box, SimpleGrid } from '@chakra-ui/react';
import Filter from '../components/FindYourCars/Filter';


const FindYourCar = () => {
    const {slug} = useParams();

  return (
    <>
        <NavBar background='first' location='find'/>
        <SimpleGrid templateColumns= '300px 1fr'
        className='container'
        marginTop={5}>
          <Box width='100%'>
            <Filter />
          </Box>
          <Box width='100%' height='100vh' bg='lightblue'/>
        </SimpleGrid>
    </>
  )
}

export default FindYourCar