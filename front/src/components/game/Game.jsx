import { useState } from 'react';
import GameMenu from './GameMenu';
import GameOverOverlay from './GameOverOverlay';
import { Box } from '@chakra-ui/react';
import GamePlay from './GamePlay';

function Game() {
  // Menu
  const [gameOptions, setGameOptions] = useState(null);
  const [isMainMenu, setIsMainMenu] = useState(true);

  // Game
  const [isPlaying, setIsPlaying] = useState(false);
  const [userInvestment, setUserInvestment] = useState();
  const [buyAndHoldInvestment, setBuyAndHoldInvestment] = useState();

  // Game over
  const [isGameOver, setIsGameOver] = useState(false);

  console.log(isMainMenu, isPlaying, isGameOver);

  return (
    <Box position='relative'>
      {isMainMenu &&
        <GameMenu
          setGameOptions={setGameOptions} setIsMainMenu={setIsMainMenu}
          setIsPlaying={setIsPlaying}
        />}
      {(isPlaying || isGameOver) &&
        <GamePlay
          gameOptions={gameOptions} setIsPlaying={setIsPlaying}
          userInvestment={userInvestment} setUserInvestment={setUserInvestment}
          buyAndHoldInvestment={buyAndHoldInvestment}
          setBuyAndHoldInvestment={setBuyAndHoldInvestment}
          setIsGameOver={setIsGameOver}
        />}
      {isGameOver &&
        <GameOverOverlay
          userInvestment={userInvestment}
          buyAndHoldInvestment={buyAndHoldInvestment}
          gameOptions={gameOptions}
          setIsMainMenu={setIsMainMenu} setIsGameOver={setIsGameOver}
        />
      }
    </Box>
  );
}

export default Game;