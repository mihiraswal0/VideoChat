import React from 'react'
import '../App.css';
const Homepage = () => {
  return (
    <div className='homepage-container'>
        <div className='input-container'>
            <input type='email' placeholder='Enter Your Email Here'></input>
            <input type='text' placeholder='Enter Room Code'></input>
            <button>Enter Room</button>
        </div>
    </div>
  )
}

export default Homepage;