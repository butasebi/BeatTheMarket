import {
  Box,
  Button,
  Flex,
  Heading,
  Select,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Switch,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

function TimeFrameOptions(props) {
  const { setTimeFrameValueSlider } = props;

  const labelStyles = {
    mt: '3',
    ml: '-5',
    fontSize: 'md',
    width: '10em',
  };

  return (
    <Box mt={12} mb={5}>
      <Text fontSize='lg'>Time frame:</Text>
      <Slider min={0} max={2} step={1} colorScheme='brand'
              onChange={(val) => setTimeFrameValueSlider(val)}>
        <SliderMark value={0} {...labelStyles}>
          1 day
        </SliderMark>
        <SliderMark value={1} {...labelStyles}>
          1 year
        </SliderMark>
        <SliderMark value={2} {...labelStyles}>
          10 years
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
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

function RandomDatasetSelect() {
  return (
    <Box mt={12}>
      <Text fontSize='lg'>Included dataset categories:</Text>
      <Select placeholder='Select option' mt={2}>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </Select>
    </Box>
  );
}

function SpecificDatasetSelect() {
  return (
    <Box mt={12}>
      <Text fontSize='lg'>Included datasets:</Text>
      <Select placeholder='Select option' mt={2}>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </Select>
    </Box>
  );
}

function GameMenu() {
  const [timeFrameValueSlider, setTimeFrameValueSlider] = useState(1);
  const [isRandomDataset, setIsRandomDataset] = useState(true);

  return (
    <Flex maxWidth='35em' maxHeight='50em' margin='auto' direction='column'>
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
      {isRandomDataset ? <RandomDatasetSelect /> : <SpecificDatasetSelect />}
      <Button colorScheme='brand' size='lg' mt={12}>Play!</Button>
    </Flex>
  );
}

export default GameMenu;