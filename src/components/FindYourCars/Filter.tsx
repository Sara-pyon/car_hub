import { Box, Heading } from '@chakra-ui/react'
import FilterItem from './FilterItem'
import carsFilter from '../../data/carsFilter';
import { IoCarOutline, IoCalendarClearOutline } from "react-icons/io5";
import { PiGasPump } from "react-icons/pi";
import { GiGearStickPattern } from "react-icons/gi";
import { TbWheel } from "react-icons/tb";

const Filter = () => {
  return (
    <Box border='1.5px solid #DCE4E9'
    borderRadius={10}
    padding={4}>
        <Heading fontSize='2xl'>
            Filters</Heading>
        <Box>
            <FilterItem 
            icon={<IoCarOutline fontSize={23} />}
            title='Make'
            list={carsFilter.markers} />
        </Box>
        <Box>
            <FilterItem 
            icon={<IoCalendarClearOutline fontSize={20} />}
            title='Year'
            list={carsFilter.years} />
        </Box>
        <Box>
            <FilterItem 
            icon={<TbWheel fontSize={23} />}
            title='Drivetrain'
            list={carsFilter.drives} />
        </Box>
        <Box>
            <FilterItem 
            icon={<GiGearStickPattern fontSize={23} />}
            title='Transmission'
            list={carsFilter.transmission} />
        </Box>
        <Box>
            <FilterItem 
            icon={<PiGasPump fontSize={23} />}
            title='Fuel Type'
            list={carsFilter.fuelType} />
        </Box>
    </Box>
  )
}

export default Filter