import React, { useState } from 'react'
import './../css/home.css'
import Hero from './Hero'
import IntroBoxes from './IntroBoxes'
import Trending from './Trending'
import prod_1_1 from './../../images/product-1-1.jpg'
import prod_1_2 from './../../images/product-1-2.jpg'
import prod_2_1 from './../../images/product-2-1.jpg'
import prod_2_2 from './../../images/product-2-2.jpg'
import prod_3_1 from './../../images/product-3-1.jpg'
import prod_3_2 from './../../images/product-3-2.jpg'
import prod_4_1 from './../../images/product-4-1.jpg'
import prod_4_2 from './../../images/product-4-2.jpg'
import product_5_1 from './../../images/product-5-1.jpg';
import product_5_2 from './../../images/product-5-2.jpg';
import product_6_1 from './../../images/product-6-1.jpg';
import product_6_2 from './../../images/product-6-2.jpg';
import product_7_1 from './../../images/product-7-1.jpg';
import product_7_2 from './../../images/product-7-2.jpg';
import product_8_1 from './../../images/product-8-1.jpg';
import product_8_2 from './../../images/product-8-2.jpg';
import product_9_1 from './../../images/product-9-1.jpg';
import product_9_2 from './../../images/product-9-2.jpg';
import product_10_1 from './../../images/product-10-1.jpg';
import product_10_2 from './../../images/product-10-2.jpg';
import product_11_1 from './../../images/product-11-1.jpg';
import product_11_2 from './../../images/product-11-2.jpg';
import product_12_1 from './../../images/product-12-1.jpg';
import product_12_2 from './../../images/product-12-2.jpg';
import Footer from './Footer'


function Home() {
  const allTrendingData = [
    { image1: prod_1_1, image2: prod_1_2, type: "Clothing", name: "Denim Jacket", price: "Rs. 2320" },
    { image1: prod_2_1, image2: prod_2_2, type: "Shoes", name: "Sandals", price: "Rs. 1700" },
    { image1: prod_3_1, image2: prod_3_2, type: "Clothing", name: "Printed Sweatshirt", price: "Rs. 3060" },
    { image1: prod_4_1, image2: prod_4_2, type: "Clothing", name: "Linen-blend paper bag trousers", price: "Rs. 2000" }
  ]

  const womenTrendingData = [
    { image1: prod_2_1, image2: prod_2_2, type: "Shoes", name: "Sandals", price: "Rs. 1700" },
    { image1: prod_4_1, image2: prod_4_2, type: "Clothing", name: "Linen-blend paper bag trousers", price: "Rs. 2000" }
  ]

  const menTrendingData = [
    { image1: prod_1_1, image2: prod_1_2, type: "Clothing", name: "Denim Jacket", price: "Rs. 2320" },
    { image1: prod_3_1, image2: prod_3_2, type: "Clothing", name: "Printed Sweatshirt", price: "Rs. 3060" }
  ]

  const [trendingItem, setTrendingItem] = useState(allTrendingData);
  const [activeButton, setActiveButton] = useState('all')

  function all_trending() {
    setTrendingItem(allTrendingData);
    setActiveButton('all')
    console.log(trendingItem)
  }

  function women_trending() {
    setTrendingItem(womenTrendingData);
    setActiveButton('women')
    console.log(trendingItem)
  }

  function men_trending() {
    setTrendingItem(menTrendingData);
    setActiveButton('men')
    console.log(trendingItem)
  }

  const arrivals = [
    { image1: product_5_1, image2: product_5_2, type: "Clothing", name: "Tie-detail Top", price: "Rs. 399" },
    { image1: product_6_1, image2: product_6_2, type: "Shoes", name: "Sandals", price: "Rs. 1299" },
    { image1: product_7_1, image2: product_7_2, type: "Bags", name: "Small Bucket Bag", price: "Rs. 1499" },
    { image1: product_8_1, image2: product_8_2, type: "Clothing", name: "Denim Jacket", price: "Rs. 3499" },
    { image1: product_9_1, image2: product_9_2, type: "Clothing", name: "Short Wrap Dress", price: "Rs. 1799" },
    { image1: product_10_1, image2: product_10_2, type: "Clothing", name: "Biker Jacket", price: "Rs. 3499" },
    { image1: product_11_1, image2: product_11_2, type: "Shoes", name: "Loafers", price: "Rs. 999" },
    { image1: product_12_1, image2: product_12_2, type: "Clothing", name: "Super Skinny High Jeggings", price: "Rs. 1299" }
  ];

  return (
    <div>
      <Hero />
      <IntroBoxes />

      <div className="trending-container">
        <h2>TRENDING</h2>
        <div className="trending-buttons">
          <button onClick={all_trending} className={`trending-all ${activeButton === 'all' ? 'active' : ''}`}>ALL</button>
          <button onClick={women_trending} className={`trending-women ${activeButton === 'women' ? 'active' : ''}`}>WOMEN</button>
          <button onClick={men_trending} className={`trending-men ${activeButton === 'men' ? 'active' : ''}`}>MEN</button>
        </div>

        <div className="trending-items">
          {trendingItem.map((item, index) => (
            <Trending
              key={index}
              image1={item.image1}
              image2={item.image2}
              type={item.type}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
      {/* <hr style={{ margin: '1vh 25vh', opacity: '0.5' }} /> */}

      <div className="qualities">
        <div className='quality-item'>
          <i className='fas fa-truck'></i>
          <p className='title'>Payment & Delivery</p>
          <p className='desc'>Free shipping for orders over $50</p>
        </div>

        <div className='quality-item'>
          <i className='fas fa-rotate-left'></i>
          <p className='title'>Return & Refund</p>
          <p className='desc'>Free 100% money back guarantee</p>
        </div>

        <div className='quality-item'>
          <i className='fas fa-lock'></i>
          <p className='title'>Secure Payment</p>
          <p className='desc'>100% secure payment</p>
        </div>

        <div className='quality-item'>
          <i className='fas fa-headphones'></i>
          <p className='title'>Quality Support</p>
          <p className='desc'>Alway online feedback 24/7</p>
        </div>
      </div>

      <div className="arrivals">
        <h2 style={{ textAlign: 'center', marginTop: '5vh', color: '#333333' }}>NEW ARRIVALS</h2>

        <div className="arrival-container">
          {arrivals.map((item, index) => (
            <Trending
              key={index}
              image1={item.image1}
              image2={item.image2}
              type={item.type}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
      {/* <hr style={{ margin: '1vh 25vh', opacity: '0.5' }} /> */}

      <Footer />
    </div>
  )
}

export default Home