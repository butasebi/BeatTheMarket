import { useState } from 'react'
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
  Box,
  FormControl
} from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { RiBarChartFill } from 'react-icons/all';
import { DATASETS } from '../../utils/constants';
import LeaderboardTable from './LeaderboardTable';

export default function Leaderboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function SpecificDatasetSelect({ pickedDataset, setPickedDataset }) {
    const handleChange = (option) => {
      setPickedDataset(option);
    };
  
    return (
      <Box mt='6vh' mb='2vh' mx='2vh'>
        <Text fontSize='lg'>Picked dataset:</Text>
        <FormControl mt={2}>
          <Select
            hideSelectedOptions={false}
            placeholder='Select a dataset...'
            options={DATASETS}
            value={pickedDataset}
            onChange={handleChange}
          />
        </FormControl>
      </Box>
    );
  }
  
  const [pickedDataset, setPickedDataset] = useState(null);

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
    size='full'
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
          <Text mt='4vh' mb='6vh' align='center' fontSize='3xl' variant='brand'>Leaderboard</Text>
          {/* <SpecificDatasetSelect
            pickedDataset={pickedDataset} setPickedDataset={setPickedDataset}
          /> */}
        </DrawerHeader>
        <DrawerBody>
          <LeaderboardTable dataset={pickedDataset}/>
        </DrawerBody>
      </DrawerContent>
    </Drawer></>
  )
}