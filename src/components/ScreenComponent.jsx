import React, { useState } from 'react'

import './ScreenComponent.css'

const ScreenComponent = () => {

  let [jumpNumber, setJumpNumber] = useState(0)
  const [comand, setComand] = useState("")

  const handleClick = (e) => {

    if(e.target.id === "simple-jump") {
      setComand(e.target.id)

      setTimeout(() => {
        setJumpNumber(jumpNumber+1)
        setComand("")
      }, 500)

    }

    if(e.target.id === "double-jump") {
      setComand(e.target.id)

      setTimeout(() => {
        setComand("")
        setJumpNumber(jumpNumber+2)
      }, 700)

    }

    if(e.target.id === "sub-btn") {
      setJumpNumber(jumpNumber-1)
    }

    if(e.target.id === "clear-btn") {
      setJumpNumber(0)
    }
    
  }

  return (
    <div className='screen-container'>
      <div className="counter">
        <img id='logo' src="Mario_Series_Logo.svg.png" alt="" />
        <div className="counter-number">
          <p>{jumpNumber}</p>
          <p>{jumpNumber == 1 || jumpNumber == -1 ? " Pulo" : " Pulos"}</p>
        </div>
      </div>
      <div className='screen'>
        <img id='mario' className={comand} src="2d-mario-running.gif" alt="Mario Runing" />
      </div>
      <div className='controls-container'>
        <button id='simple-jump' onClick={(e) => handleClick(e)}>Pulo Simples</button>
        <div className='middle'>
          <button id='sub-btn' onClick={(e) => handleClick(e)}>-1</button>
          <button id='clear-btn' onClick={(e) => handleClick(e)}>Zerar</button>
        </div>
      <button id='double-jump' onClick={(e) => handleClick(e)}>Pulo Duplo</button>
    </div>
    </div>
  )
}

export default ScreenComponent
