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

import Dialog from "./shared/components/Dialog/Dialog";
import DialogContent from "./shared/components/Dialog/DialogContent";
import Button from "./shared/components/Button/Button";

import HelpBtn from "./features/help/Help";

import Sounds from "./features/sounds/Sounds";
import AudioController from "./shared/services/AudioController";

import DataFetcher from "./shared/services/DataFetcher";

function App() {
  // State
  const [assetLoaded, setAssetLoaded] = useState(false);
  const [apiLoading, setApiLoading] = useState(false);
  const [mode, setMode] = useState(null);
  const [flippedCards, setFlippedCards] = useState(0);
  const [dialogTitle, setDialogTitle] = useState("");
  const [cardObjs, setCardObjs] = useState([]);

  const scoreboardRef = useRef(null);
  const boardRef = useRef(null);
  const dialogRef = useRef(null);
  const audioController = useRef(new AudioController()).current;
  // Derived values

  async function handleModeSelect(mode) {
    setApiLoading(true);

    try {
      const objs = await fetchImgUrls(characters[mode]);

      setCardObjs(objs);
      setMode(mode);
    } finally {
      setApiLoading(false);
    }

    audioController.playSfx("click");
  }

  function resetGame(message) {
    setFlippedCards(0);
    scoreboardRef.current.reset();
    boardRef.current.resetCards();

    setDialogTitle(message);
    dialogRef.current.show();
  }

  function handleCardFlip(result) {
    audioController.playSfx("place");

    if (result === false) {
      resetGame("You Lose!");
      audioController.playSfx("lost");
      return;
    }

    // If won or result = false
    setFlippedCards((prev) => prev + 1);
    scoreboardRef.current.increment();

    if (result === "won") {
      resetGame("You Won!");
      audioController.playSfx("won");
    }
  }

  function handleGameExit() {
    setMode(null);
    setFlippedCards(0);
  }

  // Effects
  useEffect(() => {
    async function initialize() {
      const minimumDelay = new Promise((resolve) => setTimeout(resolve, 2000));

      await Promise.all([preloadAssets(), minimumDelay]);

      setAssetLoaded(true);
    }

    initialize();
  }, []);

  // Render
  if (!assetLoaded || apiLoading) {
    return <LoadingScreen message={getRandomItem(messages)} />;
  }

  const homeScreen = (
    <HomeScreen
      handleModeSelect={handleModeSelect}
      onHover={() => audioController.playSfx("click")}
    />
  );
  const gameplayScreen = (
    <GameplayScreen
      handleGameExit={handleGameExit}
      scoreboard={<Scoreboard ref={scoreboardRef} />}
      board={
        <Board
          ref={boardRef}
          number={10}
          displayable={4}
          cardObjs={cardObjs}
          flippedCards={flippedCards}
          handleCardFlip={handleCardFlip}
        />
      }
      dialog={
        <Dialog ref={dialogRef}>
          <DialogContent
            title={dialogTitle}
            buttons={
              <Button
                onClick={() => dialogRef.current.close()}
                content="Restart"
              />
            }
          />
        </Dialog>
      }
    />
  );

  return (
    <>
      {mode ? gameplayScreen : homeScreen}

      <Sounds
        handleMusic={() => audioController.toggleMusic()}
        handleSfx={() => audioController.toggleSfx()}
        onClick={() => audioController.playSfx("click")}
        onHover={() => audioController.playSfx("click")}
      />
      <HelpBtn
        onClick={() => audioController.playSfx("click")}
        onHover={() => audioController.playSfx("click")}
      />
    </>
  );
}

export default App;

async function fetchImgUrls(objs) {
  for (const obj of objs ?? []) {
    if (!obj.url) continue;

    try {
      obj.url = await DataFetcher.fetch(obj.url);
    } catch (error) {
      console.error(`Failed to fetch ${obj.url}`, error);
    }

    console.log(obj.url);
  }

  return objs;
}
