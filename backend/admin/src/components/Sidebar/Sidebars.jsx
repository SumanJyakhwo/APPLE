import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { assets } from '../../../../frontend/src/assets/assets';
import './Sidebars.css';

const Sidebars = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <img src={assets.profile} alt=""/>
          <p>Add Items</p>
        </NavLink>

        <NavLink to="/list" className="sidebar-option">
          <img src={assets.profile} alt=""/>
          <p>List Items</p>
        </NavLink>
        
        <NavLink to="/orders" className="sidebar-option">
          <img src={assets.profile} alt=""/>
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebars;
