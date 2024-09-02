import React from 'react'
import './../css/intro_boxes.css'
import SingleIntroBox from './SingleIntroBox'
import women from './../../images/intro-box-1.jpg'
import men from './../../images/intro-box-2.jpg'
import AOS from 'aos'

function IntroBoxes() {
  AOS.init();
  return (
    <div className='intro-boxes-parent' data-aos="zoom-in" data-aos-duration="3000">
      {/* hello */}
      <SingleIntroBox gender={"WOMEN"} image={women}/>
      <SingleIntroBox gender={"MEN"} image={men}/>
    </div>
  )
}

export default IntroBoxes