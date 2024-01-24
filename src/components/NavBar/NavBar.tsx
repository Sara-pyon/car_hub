import { Box, HStack, List, ListItem, SimpleGrid } from '@chakra-ui/react';
import Favorite from './Favorite';
import Login from './Login';
import Logo from '../Logo';

const NavBar = () => {
  return (
    <Box background='transparent'>
      <HStack paddingInline={5} display='flex' justifyContent='space-between'
              justifyItems='center' height='88px' width='100%'>
          <Logo />
          <List width='100%' display='flex' columnGap={4} paddingInline={5} color='white'>
              <ListItem>Find your Car</ListItem>
              <ListItem>Sell or trade in</ListItem>
              <ListItem>How it works</ListItem>
              <ListItem>Car finance</ListItem>
          </List>
          <SimpleGrid columns={2} columnGap={2}>
              <Favorite />
              <Login />
          </SimpleGrid>
      </HStack>
    </Box>
  )
}

export default NavBar