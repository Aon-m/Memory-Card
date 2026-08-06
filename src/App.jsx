import { useEffect, useState } from "react";
import preloadAssets from "./shared/utils/preloadAssets";

import LoadingScreen from "./features/screen.loading/LoadingScreen";
import GameplayScreen from "./features/screen.gameplay/GameplayScreen";
import HomeScreen from "./features/screen.home/HomeScreen";

import Scoreboard from "./features/scoreboard/Scoreboard";

import messages from "./features/screen.loading/messages.json";
import getRandomItem from "./shared/utils/getRandomItem";

function App() {
  // State
  const [loaded, setLoaded] = useState(false);
  const [difficulty, setDifficulty] = useState(null);

  // Derived values
  function handleDifficultySelect(difficulty) {
    setDifficulty(difficulty);
  }

  // Effects
  useEffect(() => {
    async function initialize() {
      const minimumDelay = new Promise((resolve) => setTimeout(resolve, 5000));

      await Promise.all([preloadAssets(), minimumDelay]);

      setLoaded(true);
    }

    initialize();
  }, []);

  // Render
  if (!loaded) {
    return <LoadingScreen message={getRandomItem(messages)} />;
  }

  if (difficulty) {
    return (
      <GameplayScreen difficulty={difficulty} scoreboard={<Scoreboard />} />
    );
  }

  return <HomeScreen handleDifficultySelect={handleDifficultySelect} />;
}

export default App;
