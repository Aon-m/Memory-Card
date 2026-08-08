import { useEffect, useState, useRef } from "react";
import preloadAssets from "./shared/utils/preloadAssets";

import LoadingScreen from "./features/screen.loading/LoadingScreen";
import messages from "./features/screen.loading/messages.json";
import getRandomItem from "./shared/utils/getRandomItem";

import HomeScreen from "./features/screen.home/HomeScreen";

import GameplayScreen from "./features/screen.gameplay/GameplayScreen";
import Scoreboard from "./features/scoreboard/Scoreboard";
import Board from "./features/board/Board";
import characters from "./features/board/characters.json";

function App() {
  // State
  const [loaded, setLoaded] = useState(false);
  const [mode, setMode] = useState(null);
  const [flippedCards, setFlippedCards] = useState(0);
  const scoreboardRef = useRef(null);
  const boardRef = useRef(null);

  // Derived values
  function handleModeSelect(mode) {
    setMode(mode);
  }

  function handleCardFlip(flipped) {
    if (typeof flipped !== "boolean") return;

    if (flipped) {
      setFlippedCards((prev) => prev + 1);
      scoreboardRef.current.increment();
    } else {
      setFlippedCards(0);
      scoreboardRef.current.reset();
      boardRef.current.resetCards();
    }
  }

  // Effects
  useEffect(() => {
    async function initialize() {
      const minimumDelay = new Promise((resolve) => setTimeout(resolve, 2000));

      await Promise.all([preloadAssets(), minimumDelay]);

      setLoaded(true);
    }

    initialize();
  }, []);

  // Render
  if (!loaded) {
    return <LoadingScreen message={getRandomItem(messages)} />;
  }

  if (mode) {
    const cardObjs = characters[mode];

    return (
      <GameplayScreen
        scoreboard={<Scoreboard ref={scoreboardRef} />}
        cards={
          <Board
            ref={boardRef}
            number={10}
            displayable={4}
            cardObjs={cardObjs}
            flippedCards={flippedCards}
            handleCardFlip={handleCardFlip}
          />
        }
      />
    );
  }

  return <HomeScreen handleModeSelect={handleModeSelect} />;
}

export default App;
