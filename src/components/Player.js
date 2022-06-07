import React from 'react'

const Player = ({image, name, state}) => {

  console.log(state)

  let stateStyle = {}

  if (state > 0) {
    stateStyle = {width: state+'%'}
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
      <div className="playerImage"><img style={imageStyleBlured} src={image} alt="{name}" /></div>
      <div className="playerHealthBar">
        <div className="statusBar" style={stateStyle}></div>
      </div>
      <div className="playerHealthPercent">{state > 0 ? state+'%' : 'Dead'}</div>
      
    </div>
  )
}

export default Player