import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import './../css/footer.css'
import logo from './../../images/logo.png'
import './../css/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className='footer-container'>
        <div className="footer-brand">
          <img src={logo} alt="logo" />
          <p>Step into a world where every outfit tells your story, crafted for those who dare to be different.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/#">Home</Link></li>
            <li><HashLink smooth to="/#trending">Trending</HashLink></li>
            <li><HashLink smooth to="/#arrivals">New Arrivals</HashLink></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><i className='fas fa-phone'></i> <a href="tel:+918146004250">+91 81460 04250</a></p>
          <p> <i className="fas fa-envelope"></i> <a href="mailto:arshbedi2517@gmail.com">arshbedi2517@gmail.com</a></p>
          <Link to="/"><i className="fas fa-cart-plus"></i> Go to Cart</Link>
        </div>

        <div className="footer-socials">
          <h3>Follow Us</h3>

          <div className="social-links">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className='fa-brands fa-instagram'></i></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className='fa-brands fa-facebook-f'></i></a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><i className='fa-brands fa-twitter'></i></a>
            <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer"><i className='fa-brands fa-pinterest'></i></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>@ 2024 Clothify. All rights reserved.</p>
      </div>

    </footer>
  )
}

export default Footer