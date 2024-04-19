import React, { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function GamePlayer3() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/assets/game3/latestbuild.loader.js",
    dataUrl: "/assets/game3/latestbuild.data.unityweb",
    frameworkUrl: "/assets/game3/latestbuild.framework.js.unityweb",
    codeUrl: "/assets/game3/latestbuild.wasm.unityweb",
  });

  const [isGameClosed, setIsGameClosed] = useState(false);

  const handleClose = () => {
    setIsGameClosed(true);
  };

  if (isGameClosed) {
    return null; // Return null to hide the component when the game is closed
  }

  return (
    <div >
      <div >
        <Unity unityProvider={unityProvider} />

       
      </div>
      <div >
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}

export default GamePlayer3;
