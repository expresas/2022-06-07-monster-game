import React from 'react'
import Weapons from './Weapons'

const Player = ({image, name, state, showWeapons, testas, weapon}) => {

  console.log(showWeapons)

  let stateStyle = {}

  if (state > 0) {
    stateStyle = {width: state+'%', borderRight: '1px solid white'}
  } else {
    stateStyle = {width: '0%'}
  }

  let imageStyleBlured = {}
  if (state <= 0) {
    imageStyleBlured = {filter: 'blur(10px)'}
  }

  return (
    <div className='player'>
      <h1>{name}</h1>
      <div className="playerImage"><img style={imageStyleBlured} src={image} alt={name} /></div>
      <div className="playerHealthBar">
        <div className="statusBar" style={stateStyle}></div>
      </div>
      <div className="playerHealthPercent">{state > 0 ? 'Health '+state+'%' : 'Dead'}</div>
      {showWeapons ? <Weapons testas={testas} weapon={weapon}/> : ''}

    </div>
  )
}

export default Player