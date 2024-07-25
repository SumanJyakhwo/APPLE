// import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar"
import Sidebars from "./components/Sidebar/Sidebars"
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Order from './pages/Order/Order'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const url= "https://backend-for-food-del.onrender.com"
  return (
    <div>
      <Navbar/>
      <ToastContainer/>
      <hr/>
      <div className="app-content">
        <Sidebars/>
        <Routes>
        <Route path="/add" element={<Add url={url}/>}/>
          <Route path="/add/:id" element={<Add url={url}/>}/>
          <Route path="/list" element={<List url={url}/>}/>
          <Route path="/orders" element={<Order url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
