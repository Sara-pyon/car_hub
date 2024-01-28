import { Button, Drawer, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, useDisclosure } from '@chakra-ui/react'
import Filter from './Filter';


const DrawerFilter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Button onClick={onOpen}
    bg='bgSecondary' size='md'
    border='2px solid #DCE4E9'>
      Filter
    </Button>
    <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <Filter />
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerFilter