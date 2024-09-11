import React, { useState } from 'react'
import './../css/trending.css'
import AOS from 'aos'

function Trending({ image1, image2, type, name, price }) {
  AOS.init();

  // Generate a dynamic key using the name and type (or any other combination)
  const uniqueKey = `${name}-${type}-${price}`;

  // State to check if item is added to cart
  const [isAdded, setIsAdded] = useState(
    () => !!localStorage.getItem(`cart-item-${uniqueKey}`)
  );

  const handleCartClick = () => {
    const item = { uniqueKey, image1, image2, type, name, price };

    if (isAdded) {
      // Remove item from local storage
      localStorage.removeItem(`cart-item-${uniqueKey}`);
    } else {
      // Add item to local storage
      localStorage.setItem(`cart-item-${uniqueKey}`, JSON.stringify(item));
    }

    // Toggle the button state
    setIsAdded(!isAdded);

    // Example code to fetch cart items from localStorage
    const cartItems = Object.keys(localStorage)
      .filter(key => key.startsWith('cart-item-'))
      .map(key => JSON.parse(localStorage.getItem(key)));

    console.log(cartItems); // This will log all the cart items to the console.
  };

  const btnStyle = {
    visibility: isAdded ? 'visible' : 'hidden'
  }

  return (
    <div className='trending-parent' data-aos='flip-right'>
      <img src={image1} alt="lol" className='trending-image-1' />
      <img src={image2} alt="lol" className='trending-image-2' />
      <div className='trending-texts'>
        <button className='trending-btn' onClick={handleCartClick} style={btnStyle}>
          <i className="fas fa-cart-plus"></i> &nbsp;&nbsp; {isAdded ? 'Added' : 'Add to Cart'}
        </button>
        <p className='trending-type'>{type}</p>
        <p className='trending-name'>{name}</p>
        <p className='trending-price'>{price}</p>
      </div>
    </div>
  )
}

export default Trending