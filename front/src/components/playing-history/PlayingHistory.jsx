import { 
  Button, 
  Text, 
  useDisclosure, 
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { MdHistory } from 'react-icons/all';
import PlayingHistoryTable from './PlayingHistoryTable';

export default function PlayingHistory() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <><Button 
      width='100%' 
      size='lg' 
      colorScheme='brand' 
      variant='outline'
      onClick={onOpen}
    >
      <MdHistory size={28} />
      <Text ml={1}>My plays</Text>
    </Button>

    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      size='md'
      placement='left'
      blockScrollOnMount={true}
    >
      <DrawerOverlay
        bg='blackAlpha.300's
        backdropFilter='blur(10px)'
      />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text mt='4vh' mb='6vh' align='center' fontSize='3xl' variant='brand'>Play History</Text>
          </DrawerHeader>
          <DrawerBody>
            {
              localStorage.getItem('isLoggedIn') === 'true' ?
                <PlayingHistoryTable />
                :
                <Text fontSize='xl' align='center'>Login or create an account to see the playing history.</Text>
            }
          </DrawerBody>
        </DrawerContent>
    </Drawer></>
  )
}