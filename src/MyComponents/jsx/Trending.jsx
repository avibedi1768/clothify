import React from 'react'
import './../css/trending.css'
import AOS from 'aos'

function Trending({ image1, image2, type, name, price }) {
  AOS.init();
  return (
    <div className='trending-parent' data-aos='flip-right'>
      <img src={image1} alt="lol" className='trending-image-1' />
      <img src={image2} alt="lol" className='trending-image-2' />
      <div className='trending-texts'>
        <button className='trending-btn'>
          <i className="fas fa-cart-plus"></i> &nbsp;&nbsp; Add to Cart
        </button>
        <p className='trending-type'>{type}</p>
        <p className='trending-name'>{name}</p>
        <p className='trending-price'>{price}</p>
      </div>
    </div>
  )
}

export default Trending