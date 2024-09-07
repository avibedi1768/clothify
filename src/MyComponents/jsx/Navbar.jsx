import React from 'react'
import { Link } from 'react-router-dom'
import './../css/Navbar.css'
import AOS from 'aos'

function Navbar() {
  AOS.init();
  return (
    <nav id="navbar" data-aos="zoom-in" data-aos-duration="2000">
      <h1><Link to="/">CLOTHIFY</Link></h1>
      <ul id='link-container'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop"> Shop</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart"><i className="fas fa-cart-plus"></i></Link></li>
      </ul>
      <p><Link to="tel:+918146004250">+91 81460 04250</Link></p>
    </nav>
  )
}

export default Navbar