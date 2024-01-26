import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props{
    icon: ReactNode;
    title: string;
    link: string;
}

const FooterIcon = ({icon, title, link}:Props) => {
  return (
    <Box display='flex' columnGap={4} alignItems='center'
    width='200px'>
        <div>
            {icon}
        </div>
        <Flex flexDirection='column' textAlign='left'>
            <Heading fontSize='ms'>{title}</Heading>
            <Text fontSize='0.9rem' color='second' fontWeight={500}>
                {link}
            </Text>
        </Flex>
    </Box>
  )
}

export default FooterIcon