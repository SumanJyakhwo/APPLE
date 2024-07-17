// import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

function Navbar({setShowLogin}) {
  const [menu,setMenu]=useState("home")
  const {getTotalCartAmount,token,setToken}=useContext(StoreContext)
  return (
    <div className='navbar'>

      <Link to="/home"><img src={assets.food} alt='Food' className='logo'/></Link>
      <ul className="navbar-menu">
      <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
  <Link to="/home">Home</Link>
</li><a href="#explore-menu"  onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
      <a href="#app-download" onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-App</a>
      <a href="#footer" onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a></ul>
      <div className="navbar-right">
        <img src={assets.search} alt='search' className='icon'/>
        <div className="navbar-search-icon">
          <Link to ="/cart"><img src={assets.cart} alt='cart' className='icon'/></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
         
         
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>Sign In</button>:<div className='navbar-profile'>
          <img src={assets.profile} alt="" />
          <ul className='nav-profile-dropdown'>
            <li><img src={assets.bag} alt="" /><p>Orders</p></li>
            <hr />
            <li><img src={assets.logout} alt="" /><p>LogOut</p></li>
          </ul>
          </div>}
      </div>
    </div>
  )
}

export default Navbar
