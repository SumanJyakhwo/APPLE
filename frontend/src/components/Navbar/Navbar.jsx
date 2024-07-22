import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbar'>
      <Link to="/home">
        <img src={assets.food} alt='Food' className='logo' />
      </Link>
      <div className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
        <li onClick={() => { setMenu("home"); setMenuOpen(false); }} className={menu === "home" ? "active" : ""}>
          <Link to="/home">Home</Link>
        </li>
        <li onClick={() => { setMenu("menu"); setMenuOpen(false); }} className={menu === "menu" ? "active" : ""}>
          <a href="#explore-menu">Menu</a>
        </li>
        <li onClick={() => { setMenu("mobile-app"); setMenuOpen(false); }} className={menu === "mobile-app" ? "active" : ""}>
          <a href="#app-download">Mobile-App</a>
        </li>
        <li onClick={() => { setMenu("contact-us"); setMenuOpen(false); }} className={menu === "contact-us" ? "active" : ""}>
          <a href="#footer">Contact Us</a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search} alt='search' className='icon' />
        <div className="navbar-search-icon">
          <Link to="/cart"><img src={assets.cart} alt='cart' className='icons' /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile} alt="" />
            <ul className='nav-profile-dropdown'>
              <li><img src={assets.bag} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={() => setToken(null)}><img src={assets.logout} alt="" /><p>LogOut</p></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
