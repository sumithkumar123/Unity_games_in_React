import React, { useState } from "react";
import GamePlayer1 from "./components/gamePlayer1";
import GamePlayer2 from "./components/gamePlayer2";
import GamePlayer3 from "./components/gamePlayer3";

function App() {
  const [isGamePlaying1, setIsGamePlaying1] = useState(false);
  const [isGamePlaying2, setIsGamePlaying2] = useState(false);
  const [isGamePlaying3, setIsGamePlaying3] = useState(false);


  function handleCloseGame() {
    setIsGamePlaying1(false);
    setIsGamePlaying2(false);
    setIsGamePlaying3(false);
  }

  function handler1() {
    if(isGamePlaying2){
      setIsGamePlaying2(false);
    }
    else if(isGamePlaying3){
      setIsGamePlaying3(false);
    }
    
    setIsGamePlaying1(true);
  }
  function handler2() {
    if(isGamePlaying3){
      setIsGamePlaying3(false);
    }
    else if(isGamePlaying1){
      setIsGamePlaying1(false);
    }
    
    setIsGamePlaying2(true);
  }
  function handler3() {
    if(isGamePlaying2){
      setIsGamePlaying2(false);
    }
    else if(isGamePlaying1){
      setIsGamePlaying1(false);
    }
    
    setIsGamePlaying3(true);
  }
  return (
    <div>
        <h3>Welcome...!!</h3>
      <div >
        <div>
        <img src="/assets/game1/drag&drop_image.png" height={50} width={50} />
        {!isGamePlaying1 && <button onClick={handler1} style={{marginTop:"40"}}>Play</button>}  
        {isGamePlaying1 && <GamePlayer1 onClose={handleCloseGame}/>}
        </div>
        <div>
        <img src="/assets/game2/birdbody.png" height={50} width={50} />
        {!isGamePlaying2 && <button onClick={handler2} style={{marginTop:"40"}}>Play</button>}  
        {isGamePlaying2 && <GamePlayer2 onClose={handleCloseGame}/>}
        </div>
        <div>
        <img src="/assets/game3/drag&drop_image.png" height={50} width={50} />
        {!isGamePlaying3 && <button onClick={handler3} style={{marginTop:"40"}}>Play</button>}  
        {isGamePlaying3 && <GamePlayer3 onClose={handleCloseGame}/>}
        </div>
        {/* // curly braces {} in React are used to embed JavaScript expressions within JSX. here conditional rendering also  */}

      </div>
    </div>
  );
}

export default App;

 
  // return (
  //   <div>
  //     <h1>Welcome to My Unity App</h1>
  //     <p>This is a React app with Unity content.</p>

  //     <Unity unityProvider={unityProvider} />
  //     <footer>
  //       <p>&copy; 2024 My Unity App. All rights reserved.</p>
  //     </footer>
  //   </div>
  // );