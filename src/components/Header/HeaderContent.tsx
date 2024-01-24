import { Box, Button, Heading, Input, InputGroup, InputRightElement, SimpleGrid, Text } from '@chakra-ui/react'
import { IoIosSearch } from "react-icons/io";


const HeaderContent = () => {
  return (
        <Box width='fit-content' paddingBlock={10} paddingInline={3}>
            <Heading size={{base: '2xl', sm: '3xl'}} paddingBottom={10} color='white'>
                Find the car that's <br/> searching for you.
            </Heading>
            <InputGroup outline='none'>
                <InputRightElement pointerEvents='none' height='100%' fontSize={20} paddingRight={5}>
                    <IoIosSearch />
                </InputRightElement>
                <Input type='searchText' placeholder='Search makes, models, body...'
                        focusBorderColor='deepPink' border='none'
                        variant='Filled' height='55px'
                        />
            </InputGroup>
            <Box width='100%' display='flex' flexDirection='row' alignItems='center' paddingBlock='1px'>
                <Box height='1px' bg='white' opacity='0.5' width='100%'/>
                <Text width='70px' textAlign='center' color='white'>or</Text>
                <Box height='1px' bg='white' opacity='0.5' width='100%'/>
            </Box>
            <Button color='white' width='100%'
                    height='55px' >
                Browse all 733 cars
            </Button>
        </Box>
  )
}

export default HeaderContent