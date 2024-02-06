import { Button, Drawer, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, useDisclosure } from '@chakra-ui/react'
import Filter from './Filter';


const DrawerFilter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Button onClick={onOpen}
    bg='bgPrimary' size='md'
    _hover={{bg:'bgSecondary'}}
    border='2px solid #DCE4E9'>
      Filter
    </Button>
    <Drawer
        placement='left'
        isOpen={isOpen}
        onClose={onClose}
      >
        <DrawerOverlay />
          <DrawerContent overflowY='scroll'>
            <DrawerCloseButton />
            <Filter />
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}
               bg='bgPrimary' _hover={{bg:'bgSecondary'}}>
                Cancel
              </Button>
              <Button  variant='outline'
              bg='bgPrimary' _hover={{bg:'bgSecondary'}}
              onClick={onClose}
              >Save</Button>
            </DrawerFooter>
          </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerFilter