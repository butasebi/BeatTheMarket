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
import { RiBarChartFill } from 'react-icons/all';

export default function Leaderboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <><Button width='100%' 
      size='lg' 
      colorScheme='brand' 
      variant='outline'
      onClick={onOpen}
    >
      <RiBarChartFill size={24} />
      <Text ml={1}>Leaderboard</Text>
    </Button>

    <Drawer
    isOpen={isOpen}
    onClose={onClose}
    size='md'
    placement='right'
    blockScrollOnMount={true}
    >
    <DrawerOverlay
      bg='blackAlpha.300's
      backdropFilter='blur(10px)'
    />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text mt='4vh' align='center' fontSize='3xl' variant='brand'>Leaderboard</Text>
        </DrawerHeader>
        <DrawerBody></DrawerBody>
      </DrawerContent>
    </Drawer></>
  )
}