// import React fro?m 'react'
import { assets } from '../../assets/assests'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className="logo" src={assets.logo} alt="" /><img className="" src={assets.profile} alt="" />
      {/* <h2>Admin Panel</h2> */}
    </div>
  )
}

export default Navbar
