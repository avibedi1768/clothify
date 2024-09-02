import React from 'react'
import './../css/hero.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Hero() {
  AOS.init()
  return (
    <div className='hero-parent'>
      <p>FASHION THAT SPEAKS VOLUME</p>
      <h1 data-aos="fade-up" data-aos-duration="3000">UNLEASH YOUR STYLE</h1>
      <p>Step into a world where every outfit tells your story, crafted for those who dare to be different.</p>

      <button className='hero-btn' data-aos="flip-left">DISCOVER MORE</button>
    </div>
  )
}

export default Hero