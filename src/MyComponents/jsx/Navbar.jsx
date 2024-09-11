import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import './../css/Navbar.css'
import AOS from 'aos'
// import logo from './../../images/logo-sleek.png'

function Navbar() {
  AOS.init();
  return (
    <nav id="navbar" data-aos="zoom-in" data-aos-duration="2000">
      <h1><HashLink smooth to="/#">CLOTHIFY</HashLink></h1>
      {/* <img src={logo} alt="" /> */}
      <ul id='link-container'>
        <li><HashLink smooth to="/#">Home</HashLink></li>
        <li><HashLink smooth to="#trending"> Trending</HashLink></li>
        <li><HashLink smooth to="#arrivals">New Arrivals</HashLink></li>
        <li><Link to="/checkout"><i className="fas fa-cart-plus"></i></Link></li>
      </ul>
      <p><Link to="tel:+918146004250">+91 81460 04250</Link></p>
    </nav>
  )
}

export default Navbar