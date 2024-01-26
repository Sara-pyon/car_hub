import { Box, Heading } from '@chakra-ui/react'
import FilterItem from './FilterItem'
import carsFilter from '../../data/carsFilter';
import { IoCarOutline, IoCalendarClearOutline } from "react-icons/io5";
import { PiGasPump } from "react-icons/pi";
import { GiGearStickPattern } from "react-icons/gi";
import { TbWheel } from "react-icons/tb";
import useCarQueryStore from '../../store/carQueryStore';

const Filter = () => {
  const carQuery = useCarQueryStore(s => s.carQuery);
  const setMaker = useCarQueryStore(s => s.setMake);
  const setYear = useCarQueryStore(s => s.setYear);
  const setDrive = useCarQueryStore(s => s.setDrive);
  const setTransmission = useCarQueryStore(s => s.setTransmission);
  const setFuelType = useCarQueryStore(s => s.setFuel);

  return (
    <Box border='1.5px solid #DCE4E9'
    borderRadius={10}
    padding={4}>
        <Heading fontSize='2xl'>
            Filters</Heading>
        <Box>
            <FilterItem 
            icon={<IoCarOutline fontSize={23} />}
            title='Make' list={carsFilter.markers} 
            onSelect={(item) => setMaker(item.toLowerCase())}
            selectedItem={carQuery.make}/>
        </Box>
        <Box>
            <FilterItem 
            icon={<IoCalendarClearOutline fontSize={20} />}
            title='Year'
            list={carsFilter.years}
            onSelect={(item) => setYear(item.toLowerCase())}
            selectedItem={carQuery.year} />
        </Box>
        <Box>
            <FilterItem 
            icon={<TbWheel fontSize={23} />}
            title='Drivetrain'
            list={carsFilter.drives}
            onSelect={(item) => setDrive(item.toLowerCase())}
            selectedItem={carQuery.drive} />
        </Box>
        <Box>
            <FilterItem 
            icon={<GiGearStickPattern fontSize={23} />}
            title='Transmission'
            list={carsFilter.transmission}
            onSelect={(item) => setTransmission(item.toLowerCase())}
            selectedItem={carQuery.transmission} />
        </Box>
        <Box>
            <FilterItem 
            icon={<PiGasPump fontSize={23} />}
            title='Fuel Type'
            list={carsFilter.fuelType}
            onSelect={(item) => setFuelType(item.toLowerCase())}
            selectedItem={carQuery.fuel} />
        </Box>
    </Box>
  )
}

export default Filter