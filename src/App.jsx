import { useState } from 'react'
import './App.css'

import GameComponent from './components/game_component/GameComponent';
import GameEndComponent from './components/game_end_component/GameEndComponent';

function App() {
  let [currentScoreState, setCurrentScore] = useState(0);
  let [topScoreState, setTopScore] = useState(0);
  let [canPlay, setCanPlay] = useState(true);
  let [userWin, setUserWin] = useState(false);

  return (
    <div id="root-container">
      <div id="title-div">
        <h1 id="title">Dennis' Formula One Memory Card Game</h1>
      </div>
      <div id="explanation-div">
        <p id="explanation">Click each image only one time, clicking an image more that once before the game ends result is a loss</p>
      </div>
      <div id="score-numbers">
        <h2 id="current-score">Current Score: {currentScoreState}</h2>
        <h2 id="top-score">Top Score: {topScoreState}</h2>
      </div>
      <GameComponent
        play={canPlay}
        setPlay={setCanPlay}
        setWin={setUserWin}
        currentScore={currentScoreState}
        updateCurrentScore={setCurrentScore}
        topScore = {topScoreState}
        updateTopScore={setTopScore}
      />
      <GameEndComponent
      play={canPlay}
      setPlay={setCanPlay}
      win={userWin}
      setWin={setUserWin}
      updateCurrentScore={setCurrentScore}
      />
    </div>
  )
}

export default App
