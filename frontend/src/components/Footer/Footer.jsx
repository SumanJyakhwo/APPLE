// import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
    <div className="footer-content">
      <div className="footer-content-left">
        <img src={assets.food} alt="Food logo" />
        <p>Your go-to platform for the best dishes around you.</p>
        {/* <div className="footer-social-icons">
          <img src={assets.food} alt="Facebook logo" />
          <img src={assets.food} alt="Twitter logo" />
          <img src={assets.food} alt="Instagram logo" />
        </div> */}
      </div>
      <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
          <li>+01999878</li>
          <li>contact@tomato.com</li>
        </ul>
      </div>
    </div>
    <hr />
    <p className="footer-copyright">
      Copyright 2024 © Tomato.com - All Right Reserved.
    </p>
  </div>
  )
}

export default Footer

