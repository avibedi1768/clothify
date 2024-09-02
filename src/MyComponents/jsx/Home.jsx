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

    </div>
  )
}

export default Home