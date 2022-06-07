import './App.css';
import Player from './components/Player';
import monsterImage1 from './assets/images/kidaha-01.svg'
import monsterImage2 from './assets/images/kidaha-02.svg'
import monsterImage3 from './assets/images/kidaha-03.svg'
import monsterImage4 from './assets/images/kidaha-04.svg'
import monsterImage5 from './assets/images/kidaha-05.svg'
import monsterImage6 from './assets/images/kidaha-06.svg'
import monsterImage7 from './assets/images/kidaha-07.svg'
import monsterImage8 from './assets/images/kidaha-08.svg'
import monsterImage9 from './assets/images/kidaha-09.svg'
import monsterImage10 from './assets/images/kidaha-10.svg'
import monsterImage11 from './assets/images/kidaha-11.svg'
import monsterImage12 from './assets/images/kidaha-12.svg'
// import monsterImage from './assets/images/kidaha-12.svg'
import playerImage1 from './assets/images/artboard-10.svg'
import playerImage2 from './assets/images/artboard-11.svg'
import playerImage3 from './assets/images/artboard-12.svg'
import playerImage4 from './assets/images/artboard-13.svg'
import playerImage5 from './assets/images/artboard-14.svg'
import playerImage6 from './assets/images/artboard-15.svg'
import playerImage7 from './assets/images/artboard-16.svg'
import playerImage8 from './assets/images/artboard-17.svg'
import playerImage9 from './assets/images/artboard-18.svg'
import playerImage10 from './assets/images/artboard-19.svg'
import playerImage11 from './assets/images/artboard-20.svg'
import playerImage12 from './assets/images/artboard-21.svg'

import { useState } from 'react';

function App() {

  function randomPlayer() {
    let randomNum = Math.ceil(Math.random() * 12)
    if (randomNum === 1) return playerImage1
    if (randomNum === 2) return playerImage2
    if (randomNum === 3) return playerImage3
    if (randomNum === 4) return playerImage4
    if (randomNum === 5) return playerImage5
    if (randomNum === 6) return playerImage6
    if (randomNum === 7) return playerImage7
    if (randomNum === 8) return playerImage8
    if (randomNum === 9) return playerImage9
    if (randomNum === 10) return playerImage10
    if (randomNum === 11) return playerImage11
    if (randomNum === 12) return playerImage12
  }

  function randomMonster() {
    let randomNum = Math.ceil(Math.random() * 12)
    if (randomNum === 1) return monsterImage1
    if (randomNum === 2) return monsterImage2
    if (randomNum === 3) return monsterImage3
    if (randomNum === 4) return monsterImage4
    if (randomNum === 5) return monsterImage5
    if (randomNum === 6) return monsterImage6
    if (randomNum === 7) return monsterImage7
    if (randomNum === 8) return monsterImage8
    if (randomNum === 9) return monsterImage9
    if (randomNum === 10) return monsterImage10
    if (randomNum === 11) return monsterImage11
    if (randomNum === 12) return monsterImage12
  }

  // console.log(monsterArray)

  const [getPlayerState, setPlayerState] = useState(100)
  const [getMonsterState, setMonsterState] = useState(100)
  const [getMonsterImage, setMonsterImage] = useState(randomMonster())
  const [getPlayerImage, setPlayerImage] = useState(randomPlayer())

  function countRandomValues() {
    if (getPlayerState <= 0 || getMonsterState <= 0) {
      startNewGame()
      return
    } else {
      setPlayerState(getPlayerState - Math.ceil(Math.random() * 10))
      setMonsterState(getMonsterState - Math.ceil(Math.random() * 10))
    }
  }
  
  function startNewGame() {
    setPlayerState(100)
    setMonsterState(100)
    setMonsterImage(randomMonster())
    setPlayerImage(randomPlayer())
  }


  return (
    <div className="wrapper">
      
      <Player image={getPlayerImage} name="Player" state={getPlayerState}/>
      <div className="buttons"><button onClick={countRandomValues}>{(getPlayerState <= 0 || getMonsterState <= 0) ? 'Start new game!' : 'Press me!'}</button></div>      
      <Player image={getMonsterImage} name="Monster" state={getMonsterState}/>
      

    </div>
  );
}

export default App;
