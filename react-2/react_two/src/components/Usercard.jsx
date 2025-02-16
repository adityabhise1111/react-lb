import React from 'react'
import reactLogo from '../assets/nikam.jpg'

const userCard = () => {
  return (
    <div className='user-container'>
        <p id="user-name" > Aditya Nikam</p>
        <img id="user-img"  src={reactLogo} alt="Nikam" />
        <p id="user-info"> Extreamly hardworking</p>
    </div>    
  )
}
export default userCard
