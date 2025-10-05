import React from 'react'
import "./styles.css"

function Logo() {
  return (
        <div className="logo">
               <img src='/image.png' className='img-logo' alt="Time Capsule Logo"></img>
               <span className="logo-text">Time Capsule</span>
       </div>
  )
}

export default Logo