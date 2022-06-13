import { useState } from 'react';
import GameMenu from './GameMenu';
import GameOverOverlay from './GameOverOverlay';
import { generateStockData } from './dataGenerator';
import { Box } from '@chakra-ui/react';
import GamePlay from './GamePlay';

function Game() {
  const [gameOptions, setGameOptions] = useState({});
  const [isMainMenu, setIsMainMenu] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const dataTimeInterval = 'day';
  const rawData = generateStockData(dataTimeInterval);

  return (
    <Box>
      {isMainMenu && <GameMenu />}
      {(isPlaying || isGameOver) &&
        <GamePlay rawData={rawData} dataTimeInterval={dataTimeInterval} />}
      {isGameOver && <GameOverOverlay />}
    </Box>
  );
}

export default Game;