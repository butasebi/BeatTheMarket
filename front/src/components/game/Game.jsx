import { useState } from 'react';
import GameMenu from './GameMenu';
import GameOverOverlay from './GameOverOverlay';
import { Box } from '@chakra-ui/react';
import GamePlay from './GamePlay';

function Game() {
  const [gameOptions, setGameOptions] = useState(null);
  const [isMainMenu, setIsMainMenu] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  return (
    <Box>
      {isMainMenu &&
        <GameMenu
          setGameOptions={setGameOptions} setIsMainMenu={setIsMainMenu}
          setIsPlaying={setIsPlaying}
        />}
      {(isPlaying || isGameOver) &&
        <GamePlay gameOptions={gameOptions} />}
      {isGameOver && <GameOverOverlay />}
    </Box>
  );
}

export default Game;