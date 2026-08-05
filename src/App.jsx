import { useEffect, useState } from "react";
import preloadAssets from "./shared/utils/preloadAssets";

import LoadingScreen from "./features/screen.loading/LoadingScreen";
import messages from "./features/screen.loading/messages.json";

import HomeScreen from "./features/screen.home/HomeScreen";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [message] = useState(() => {
    return messages[Math.floor(Math.random() * messages.length)];
  });

  useEffect(() => {
    async function load() {
      await preloadAssets();
      setLoaded(true);
    }

    load();
  }, []);

  if (!loaded) {
    return <LoadingScreen message={message} />;
  }

  return <HomeScreen />;
}

export default App;
