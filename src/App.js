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

import elixirImage from './assets/images/elixir.svg'

import { useState } from 'react';
import MessageLog from './components/MessageLog';
import Gold from './components/Gold';

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
  const [getGoldState, setGoldState] = useState(0)
  const [getMessageState, setMessageState] = useState([])
  const [getWeapon, setWeapon] = useState('')

  function countRandomValues() {
    if (getPlayerState <= 0 || getMonsterState <= 0) {
      startNewGame()
      return
    } else {
      let playerRandom = 0
      let monsterRandom = 0
      const goldRandom = Math.ceil(Math.random() * 10)

      if (!getWeapon) {
        playerRandom = Math.ceil(Math.random() * 10)
        monsterRandom = Math.ceil(Math.random() * 10)
      }

      if (getWeapon === 'bow') {
        // maxDamage: 7,
        // effect: "30% chance to do double damage"
        playerRandom = Math.ceil(Math.random() * 10)
        monsterRandom = Math.ceil(Math.random() * 7)
        if (randomPercentage(30)) monsterRandom = monsterRandom * 2
      }

      if (getWeapon === 'sword') {
        // maxDamage: 13,
        // effect: "25% chance to dodge enemy attack"
        playerRandom = Math.ceil(Math.random() * 10)
        monsterRandom = Math.ceil(Math.random() * 13)
        if (randomPercentage(25)) playerRandom = 0
      }

      if (getWeapon === 'wand') {
        // maxDamage: 10,
        // effect: "30% chance to heal yourself 10hp, on hit"
        playerRandom = Math.ceil(Math.random() * 10)
        monsterRandom = Math.ceil(Math.random() * 10)
        if (randomPercentage(30)) playerRandom = playerRandom - 10
      }
      
      
      
      const playerMessage = `Player damaged: ${playerRandom}`
      const monsterMessage = `Monster damaged: ${monsterRandom}`
      const goldMessage = `Gold added to basket: ${goldRandom}`

      setPlayerState(getPlayerState - playerRandom)
      setMonsterState(getMonsterState - monsterRandom)
      setGoldState(getGoldState + goldRandom)
      
      setMessageState([playerMessage, monsterMessage, goldMessage, '---', ...getMessageState])
    }
  }

  function randomPercentage(percent) {
    return percent >= Math.floor(Math.random() * 100) + 1
  }
  // console.log('50% = ', randomPercentage(50))





  

  function buyElixir() {
    if (getGoldState >= 50) {
      setGoldState(getGoldState - 50)
      setPlayerState(100)
      setMessageState(['Player bought elixir for -50 gold', '---', ...getMessageState])
    } else {
      setMessageState(['Too little gold to buy an elixir, it cost 50 gold', '---', ...getMessageState])
    }

  }
  
  function startNewGame() {
    setPlayerState(100)
    setMonsterState(100)
    setMonsterImage(randomMonster())
    setPlayerImage(randomPlayer())
    setGoldState(0)
    setMessageState([])
    document.querySelectorAll('.weapon').forEach(element => {
      element.classList.remove('selected')
    })
    setWeapon('')
  }

  function test1(weapon) {
    if (getWeapon === weapon) {
      setMessageState([`Player don't have weapon`, '---', ...getMessageState])
      setWeapon('')      
    } else {
      setMessageState(['Player has weapon: ' + weapon, '---', ...getMessageState])
      setWeapon(weapon)
    }
    console.log('Paspausta:', weapon)
  }


  return (
    <div className="wrapper">
      
      <Player image={getPlayerImage} name="Player" state={getPlayerState} showWeapons={true} testas={test1} weapon={getWeapon}/>
      {/* <div className="weapons">shvbksha</div> */}
      <div className="control">
        <Gold state={getGoldState}/>
        <div className="elixir"><img onClick={buyElixir} src={elixirImage} alt="Elixir" /></div>
        <button onClick={countRandomValues}>{(getPlayerState <= 0 || getMonsterState <= 0) ? 'Start new game!' : 'Press me!'}</button>
        <MessageLog messages={getMessageState}/>
      </div>      
      <Player image={getMonsterImage} name="Monster" state={getMonsterState} showWeapons={false}/>

    </div>
  );
}

export default App;

// const weapons = [
//   {
//       name: "sword",
//       image: "https://thumbs.dreamstime.com/b/pixel-video-game-sword-icon-cartoon-retro-style-set-107893340.jpg",
//       maxDamage: 13,
//       effect: "25% chance to dodge enemy attack"
//   },
//   {
//       name: "bow",
//       image: "https://preview.pixlr.com/images/800wm/100/1/1001519968.jpg",
//       maxDamage: 7,
//       effect: "30% chance to do double damage"
//   },
//   {
//       name: "wand",
//       image: "https://preview.pixlr.com/images/800wm/100/1/1001469305.jpg",
//       maxDamage: 10,
//       effect: "30% chance to heal yourself 10hp, on hit"
//   },
// ]
