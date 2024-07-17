// import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'

import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Cart from './components/Cart/Cart'
import PlaceOrder from './components/PlaceOrder/PlaceOrder'
import OrderSummary from './components/OrderSummary/OrderSummary'
import Payment from './components/Payment/Payment'

function App() {
  const[showLogin,setShowLogin]=useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div>
      <div className='app'><Navbar setShowLogin={setShowLogin}/></div>
  
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/payment' element={<Payment/>}/>

        <Route path='/order-summary' element={<OrderSummary/>}/>

      </Routes>
      <Footer/>
    </div>
   
    </>
  )
}

export default App
