import logo from '../../assets/logo.svg'
import { HStack, Image, List, ListItem, SimpleGrid } from '@chakra-ui/react';
import Favorite from './Favorite';
import Login from '../Login';

const NavBar = () => {
  return (
    <HStack paddingInline='10px' display='flex' justifyContent='space-between'>
        <Image src={logo} width={10} alt='logo' />
        <List width='100%' display='flex'>
            <ListItem>Find your Car</ListItem>
            <ListItem>Sell or trade iin</ListItem>
            <ListItem>How it works</ListItem>
            <ListItem>Car finance</ListItem>
        </List>
        <SimpleGrid columns={2} columnGap={1}>
            <Favorite />
            <Login />
        </SimpleGrid>
    </HStack>
  )
}

export default NavBar