import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Switch,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { useState } from 'react';
import { DATASET_CATEGORIES, DATASETS } from '../../utils/constants';
import OptionsCountMultiSelect from '../OptionsCountMultiSelect';
import { Select } from 'chakra-react-select';
import { generateStockData } from './dataGenerator';

function TimeFrameOptions(props) {
  const { setTimeFrameValueSlider } = props;

  const labelStyles = {
    mt: '3',
    fontSize: 'md',
    width: '10em',
  };

  return (
    <Box mt={12} mb={5}>
      <Text fontSize='lg'>Time frame:</Text>
      <Box pl='6' pr='7'>
        <Slider min={0} max={2} step={1} colorScheme='brand'
                onChange={(val) => setTimeFrameValueSlider(val)}>
          <SliderMark value={0} {...labelStyles} ml={-6}>
            12 hours
          </SliderMark>
          <SliderMark value={1} {...labelStyles} ml={-7}>
            1 year
          </SliderMark>
          <SliderMark value={2} {...labelStyles} ml={-9}>
            10 years
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </Box>
  );
}

function RandomDataSwitch(props) {
  const { isRandomDataset, setIsRandomDataset } = props;

  return (
    <Flex mt={12} justifyContent='space-between'>
      <Text display='inline' fontSize='lg'>Pick dataset at random</Text>
      <Switch
        size='lg' colorScheme='brand'
        isChecked={isRandomDataset}
        onChange={() => {
          setIsRandomDataset(!isRandomDataset);
        }} />
    </Flex>
  );
}

function RandomDatasetSelect(
  { pickedDatasetCategories, setPickedDatasetCategories },
) {
  const handleChange = (options) => {
    setPickedDatasetCategories(options);
  };

  return (
    <Box mt={12}>
      <Text fontSize='lg'>Included dataset categories:</Text>
      <FormControl mt={2}>
        <OptionsCountMultiSelect
          placeholder='Select some dataset categories...'
          options={DATASET_CATEGORIES}
          value={pickedDatasetCategories}
          onChange={handleChange}
        />
      </FormControl>
    </Box>
  );
}

function SpecificDatasetSelect({ pickedDataset, setPickedDataset }) {
  const handleChange = (option) => {
    setPickedDataset(option);
  };

  return (
    <Box mt={12}>
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

function GameMenu({ setGameOptions, setIsMainMenu, setIsPlaying }) {
  const { colorMode } = useColorMode();

  const [timeFrameValueSlider, setTimeFrameValueSlider] = useState(1);
  const [isRandomDataset, setIsRandomDataset] = useState(true);
  const [pickedDatasetCategories, setPickedDatasetCategories] = useState(
    DATASET_CATEGORIES,
  );
  const [pickedDataset, setPickedDataset] = useState(null);

  const playHandleClick = () => {
    // The user didn't pick a value from the Select inputs
    if ((isRandomDataset && pickedDatasetCategories.length === 0) ||
      (!isRandomDataset && pickedDataset === null)) {
      return;
    }

    const dataTimeInterval = (timeFrameValueSlider === 0) ? 'minute' :
      (timeFrameValueSlider === 1) ? 'day' : 'week';

    let rawData;
    if (isRandomDataset) {
      // TODO
      rawData = generateStockData(dataTimeInterval);
    } else {
      // TODO
      rawData = generateStockData(dataTimeInterval);
    }

    const gameOptions = {
      dataTimeInterval,
      rawData,
    };

    setGameOptions(gameOptions);
    setIsMainMenu(false);
    setIsPlaying(true);
  };

  return (
    <Flex
      maxWidth='32em' maxHeight='50em' margin='auto' direction='column'
      p={12} boxShadow='xl' rounded='xl'
      bg={colorMode === 'light' ? 'white' : '#2D3848'}
    >
      <Heading>
        Welcome to{' '}
        <Text display='inline' variant='brand'>💰 Beat the Market 💰</Text>!
      </Heading>
      <Text fontSize='lg' mt='2'>Choose the options for your game.</Text>
      <TimeFrameOptions setTimeFrameValueSlider={setTimeFrameValueSlider} />
      <RandomDataSwitch
        setIsRandomDataset={setIsRandomDataset}
        isRandomDataset={isRandomDataset}
      />
      {isRandomDataset ?
        <RandomDatasetSelect
          pickedDatasetCategories={pickedDatasetCategories}
          setPickedDatasetCategories={setPickedDatasetCategories}
        /> :
        <SpecificDatasetSelect
          pickedDataset={pickedDataset} setPickedDataset={setPickedDataset}
        />}
      <Button colorScheme='brand' size='lg' mt={12} onClick={playHandleClick}>
        Play!
      </Button>
    </Flex>
  );
}

export default GameMenu;