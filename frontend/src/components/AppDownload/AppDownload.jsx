// import React from 'react'
import { assets } from "../../assets/assets"
import "./AppDownload.css"
const AppDownload = () => {
  return (
    <div className="app-download" id='app-download'>
        <p>For Better Experience Download <br/>Tomato App</p>
        <div className="app-download-platforms">
            <img src={assets.google} alt=""/>
            <img src={assets.app} alt=""/>

        </div>
    </div>
  )
}

export default AppDownload