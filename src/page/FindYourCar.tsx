import NavBar from '../components/NavBar/NavBar';
import { Box, SimpleGrid } from '@chakra-ui/react';
import Filter from '../components/FindYourCars/Filter';
import CarsGrid from '../components/FindYourCars/CarsGrid';
import DrawerFilter from '../components/FindYourCars/DrawerFilter';
import FindHeading from '../components/FindYourCars/FindHeading';
import ScrollToTop from '../routes/ScrollToTop';


const FindYourCar = () => {

  return (
    <Box bg='bgPrimary' paddingBottom={5}>
        <NavBar background='first' location='find'/>
        <SimpleGrid templateColumns={{base:'1fr', md:'240px 1fr'}} 
        columnGap={5}
        className='container'
        marginTop={5}>
          <Box width='100%' display={{base:'none', md:'initial'}}>
            <Box border='1.5px solid #DCE4E9'
                 borderRadius={10}
                 bg='white'>
              <Filter />
            </Box>
          </Box>
          <Box width='100%'>
            <FindHeading />
            <Box width='100%' display={{md:'none'}}
            paddingTop={2}>
              <DrawerFilter />
            </Box>
            <CarsGrid />
          </Box>
        </SimpleGrid>
    </Box>
  )
}

export default FindYourCar