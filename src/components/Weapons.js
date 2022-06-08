import React from 'react'
import bowImage from '../assets/images/bow.min.svg'
import swordImage from '../assets/images/sword.min.svg'
import wandImage from '../assets/images/wand.min.svg'


const Weapons = ({testas, weapon}) => {

  function weaponClicked(e) {
    // console.dir(e.target.parentElement.childNodes)

    if (e.target.classList.contains('selected')) {
      e.target.classList.remove('selected')
    } else {
      e.target.parentElement.childNodes.forEach(element => {
        element.classList.remove('selected')
      })
      e.target.classList.add('selected')
    }




    // console.log(state)
    // console.log('bow')
    testas(e.target.alt)
  }


  


  return (
    <div className='weapons'>
      <img className='weapon' src={bowImage} alt="bow" onClick={weaponClicked} />
      <img className='weapon' src={swordImage} alt="sword" onClick={weaponClicked} />
      <img className='weapon' src={wandImage} alt="wand" onClick={weaponClicked} />
    </div>
  )
}

export default Weapons