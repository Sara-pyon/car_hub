import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { ReactNode } from 'react'

interface Props{
    icon: ReactNode;
    heading: string;
    text: string;
}

const FinanceCard = ({icon, heading,text}:Props) => {
  return (
    <Flex columnGap={4} maxW='350px'>
        <Box>
            {icon}
        </Box>
        <Box>
            <Heading color='white' fontSize='xl'>
                {heading}
            </Heading>
            <Text color='white' fontSize='0.9rem'>
                {text}
            </Text>
        </Box>
    </Flex>
  )
}

export default FinanceCard