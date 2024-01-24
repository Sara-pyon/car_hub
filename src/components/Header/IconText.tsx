import { Box, Icon, Text} from '@chakra-ui/react'

interface Props{
    element: {1: string, 2:string, icon: JSX.Element};
}

const IconText = ({element}:Props) => {
  return (
    <Box display='flex' width='300px' marginInline='auto'>
        <div>
            <Icon color='lightPink' boxSize='60px'>
                {element.icon}
            </Icon>
        </div>
        <div>
            <Text color='white' fontWeight='bold'>
                {element[1]}
            </Text>
            <Text color='white' fontWeight='bold'>
                {element[2]}
            </Text>
        </div>
    </Box>
  )
}

export default IconText