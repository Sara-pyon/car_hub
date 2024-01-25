import { Box, Flex, Heading, Text, useQuery } from "@chakra-ui/react";
import { useState } from "react";
import { PiCarProfileLight } from "react-icons/pi";

const carClass = [
    {id: 0, name: 'SUV', class: 'midsize car'},
    {id: 1, name: 'Ute', class: "standard sport utility vehicle"},
    {id: 2, name: 'Hatch', class: "small sport utility vehicle"},
    {id: 3, name: 'Van', class: "equinox awd"},
    {id: 4, name: 'Couple', class: "compact car"},
    {id: 5, name: 'People Mover', class: "large car"}
];

const CarClass = () => {
    const [selectedClassId, setSelectedClassId] = useState<number>();

  return (
    <Flex flexDirection='column' paddingBottom={5}>
        <Heading paddingBottom={6}>
            Looking for a specific size?
        </Heading>
        <Flex columnGap={8} paddingInline={4} >
            {carClass.map(c =>
            <Box key={c.id}
                display='flex' flexDirection='column' alignItems='center' >
               <PiCarProfileLight display='inline-flex' 
                                  size={30} color="#332E69"/>
               <Text color='second' cursor='pointer'
                     fontWeight={c.id === selectedClassId ? 'bold' : 'normal'}
                      onClick={() => setSelectedClassId(c.id)}>
                    {c.name}
                </Text>
            </Box>)}
        </Flex>
        <Box width='100%' height='2px' bg='border' 
             marginTop={1}/>
    </Flex>
  )
}

export default CarClass