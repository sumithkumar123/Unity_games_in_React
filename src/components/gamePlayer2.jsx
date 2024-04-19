import React, { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import '../index.css'
import App from "../App";


function GamePlayer2() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/assets/game2/first_build_web.loader.js",
    dataUrl: "/assets/game2/first_build_web.data",
    frameworkUrl: "/assets/game2/first_build_web.framework.js",
    codeUrl: "/assets/game2/first_build_web.wasm",
  });

  const [isGameClosed, setIsGameClosed] = useState(false);

  const handleClose = () => {
    setIsGameClosed(true);
  };

  if (isGameClosed) {
    return null;// Return null to hide the component when the game is closed
  }

  return (
    <div >
      <div >
        <Unity unityProvider={unityProvider} />

        <footer>
        </footer>
      </div>
      <div >
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}

export default GamePlayer2;
