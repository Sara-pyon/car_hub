import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import FilterItem from './FilterItem'
import carsFilter from '../../data/carsFilter';
import { IoCarOutline, IoCalendarClearOutline } from "react-icons/io5";
import { PiGasPump } from "react-icons/pi";
import { GiGearStickPattern } from "react-icons/gi";
import { TbWheel } from "react-icons/tb";
import useCarQueryStore from '../../store/carQueryStore';

const Filter = () => {
  const carQuery = useCarQueryStore(s => s.carQuery);
  const reset = useCarQueryStore(s => s.reset)
  const setMaker = useCarQueryStore(s => s.setMake);
  const setYear = useCarQueryStore(s => s.setYear);
  const setDrive = useCarQueryStore(s => s.setDrive);
  const setTransmission = useCarQueryStore(s => s.setTransmission);
  const setFuelType = useCarQueryStore(s => s.setFuel);


  return (
    <>
    <Box padding={4}>
        <Flex justifyContent='space-between'
            alignItems='center'>
            <Heading fontSize='2xl' >
                Filters</Heading>
            <Button bg='white' 
                border='1px solid #DCE4E9'
                fontWeight='400'
                fontSize='sm'
                _hover={{bg:'bgSecondary'}}
                onClick={reset}>
                Clear all
            </Button>
        </Flex>
        <Box>
            <FilterItem 
            icon={<IoCarOutline fontSize={23} />}
            title='Make' list={carsFilter.markers} 
            onSelect={(item) => setMaker(item)}
            selectedItem={carQuery.make}/>
        </Box>
        <Box>
            <FilterItem 
            icon={<IoCalendarClearOutline fontSize={20} />}
            title='Year'
            list={carsFilter.years}
            onSelect={(item) => setYear(item)}
            selectedItem={carQuery.year} />
        </Box>
        <Box>
            <FilterItem 
            icon={<TbWheel fontSize={23} />}
            title='Drivetrain'
            list={carsFilter.drives}
            onSelect={(item) => setDrive(item)}
            selectedItem={carQuery.drive} />
        </Box>
        <Box>
            <FilterItem 
            icon={<GiGearStickPattern fontSize={23} />}
            title='Transmission'
            list={carsFilter.transmission}
            onSelect={(item) => setTransmission(item)}
            selectedItem={carQuery.transmission} />
        </Box>
        <Box>
            <FilterItem 
            icon={<PiGasPump fontSize={23} />}
            title='Fuel Type'
            list={carsFilter.fuelType}
            onSelect={(item) => setFuelType(item)}
            selectedItem={carQuery.fuel} />
        </Box>
    </Box>
    </>
  )
}

export default Filter