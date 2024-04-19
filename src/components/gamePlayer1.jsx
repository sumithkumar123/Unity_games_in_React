// import React, { useState } from "react";
// import { Unity, useUnityContext } from "react-unity-webgl";
// import '../index.css'


// function GamePlayer1({onClose}) {
//   const { unityProvider } = useUnityContext({
//     loaderUrl: "/assets/game1/build_check.loader.js",
//     dataUrl: "/assets/game1/build_check.data.unityweb",
//     frameworkUrl: "/assets/game1/build_check.framework.js.unityweb",
//     codeUrl: "/assets/game1/build_check.wasm.unityweb",
//   });

//   const [isGameClosed, setIsGameClosed] = useState(false);

//   const handleClose = () => {
//     setIsGameClosed(true);
//   };

//   if (isGameClosed) {
//     return null; // Return null to hide the component when the game is closed
//   }

//   return (
//     <div >
//       <div >
//         <button onClick={handleClose}>Close</button>
//       </div>
//       <div >
//         <Unity unityProvider={unityProvider} />
//       </div>
//       <footer>
//           <button onClick={onClose}>Close</button>
//         </footer>
//     </div>
//   );
// }

// export default GamePlayer1;






import React, { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function GamePlayer1() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/assets/game1/build_check.loader.js",
    dataUrl: "/assets/game1/build_check.data.unityweb",
    frameworkUrl: "/assets/game1/build_check.framework.js.unityweb",
    codeUrl: "/assets/game1/build_check.wasm.unityweb",
  });

  const [isGameClosed, setIsGameClosed] = useState(false);
  const [canvasDimensions, setCanvasDimensions] = useState({ width: 700, height: 350 });

  useEffect(() => {
    // Adjust canvas dimensions when component mounts
    setCanvasDimensions({ width: 600, height: 300 });
  }, []);

  const handleClose = () => {
    setIsGameClosed(true);
  };

  if (isGameClosed) {
    return null; // Return null to hide the component when the game is closed
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1", marginLeft: "20px" }}>
        <button onClick={handleClose}>Close</button>
      </div>
      <div style={{ flex: "1", display: "flex", justifyContent: "flex-end" }}>
        <Unity unityProvider={unityProvider} />
        <style>{`
          #react-unity-webgl-canvas-2 {
            width: ${canvasDimensions.width}px;
            height: ${canvasDimensions.height}px;
          }
        `}</style>
      </div>
    </div>
  );
}

export default GamePlayer1;
