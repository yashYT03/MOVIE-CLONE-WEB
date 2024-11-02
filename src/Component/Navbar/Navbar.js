import React from 'react'
import "./navbar.css"
import notificationIcon from "../../Icons/notification.png"
import profile  from "../../Images/logo2.png"
import searchIcon from "../../Icons/search (1).png"
 export default function Navbar() {
return (
    <div className='MainNavbar'>
        <div className='NavitemContainer' >
        <div className='searchItems'>
            <img src={`${searchIcon }`} className='searchIcon' alt=''/>
            <input type='search' className='searchbar' placeholder='Search'/>
        </div>
        <div className='profileContainer' >
            <img src={`${notificationIcon}`} className='notificationIcon' alt=''/>
            <img src={`${profile}`} className='profileimage' alt=''/>
            <p className='profilename'>ANONYMOUS</p>
        </div>
        </div>
    </div>
)
 }
  

