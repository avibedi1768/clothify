import React from 'react'
import './../css/single_intro_box.css'

function SingleIntroBox({ gender, image }) {
  var styling = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`
  }
  return (
    <div style={styling} className='single-intro-box-parent'>
      <p>NEW IN</p>
      <h1>{gender}'S</h1>
      <button className='single-intro-box-btn'>SHOP NOW</button>
    </div>
  )
}

export default SingleIntroBox