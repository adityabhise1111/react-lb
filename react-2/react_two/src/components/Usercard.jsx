import React from 'react'

import reactLogo from './assets/react.svg'

const userCard = () => {
  return (
    <div className='user-container'>
        <h1 id="user-name" > Aditya Nikam</h1>
        <img id="user-img"  src={reactLogo} alt="Nikam" />
        <p id="user-info"> Extreamly hardworking</p>
    </div>
  )
}

export default userCard