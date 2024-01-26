import { Box, Flex, Heading, Text} from "@chakra-ui/react";
import { PiCarProfileLight } from "react-icons/pi";
import carsFilter from "../data/carsFilter";

interface Props{
    onSelect : (fuel:string) => void;
    selectedFuel ?: string;
}

const CarClass = ({onSelect, selectedFuel}:Props) => {

  return (
    <Flex flexDirection='column' paddingBottom={5}>
        <Heading paddingBottom={6} fontSize='3xl'>
            Looking for a specific fuel type?
        </Heading>
        <Flex columnGap={8} paddingInline={4} >
            {carsFilter.fuelType.map(fuel =>
            <Box key={fuel}
                display='flex' flexDirection='column' alignItems='center' >
               <PiCarProfileLight display='inline-flex' 
                                  size={30} color="#332E69"/>
               <Text color='second' cursor='pointer'
                     fontWeight={fuel === selectedFuel ? 'bold' : 'normal'}
                      onClick={() => onSelect(fuel)}>
                    {fuel}
                </Text>
            </Box>)}
        </Flex>
        <Box width='100%' height='2px' bg='border' 
             marginTop={1}/>
    </Flex>
  )
}

export default CarClass