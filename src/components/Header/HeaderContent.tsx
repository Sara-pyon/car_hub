import { Box, Button, Flex, Heading, Input, InputGroup, InputRightElement, SimpleGrid, Text } from '@chakra-ui/react'
import { IoIosSearch } from "react-icons/io";


const HeaderContent = () => {
  return (
        <Flex justifyContent={{base:'center', md:'left'}}
            className='container'>
            <Box width='fit-content' paddingInline={3}
                 paddingTop={10} paddingBottom={20}>
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
        </Flex>
  )
}

export default HeaderContent