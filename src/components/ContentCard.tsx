import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props{
    icon: ReactNode;
    heading: string;
    text: string;
}

const ContentCard = ({icon, heading, text}:Props) => {
  return (
    <Flex flexDirection='column' justifyContent='space-between'>
        <Box paddingBottom={5}>
            <Flex alignItems='center' columnGap={2} paddingBottom={5}>
                <div>{icon}</div>
                <Heading fontSize='xl'>{heading}</Heading>
            </Flex>
            <Text>
                {text}
            </Text>
        </Box>
        <Box width='100%' height='2px' bg='border'/>
    </Flex>
  )
}

export default ContentCard