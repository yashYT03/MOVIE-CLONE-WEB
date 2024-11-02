import React from 'react'
import  "./rightbar.css"
import image1 from "../Images/img11.avif"
import image2 from "../Images/img12.jpg"
import image3 from "../Images/img13.jpg"
import image4 from "../Images/img14.jpg"
import image5 from "../Images/img9.jpg"
import image6 from "../Images/img3.jpg"
export default function Rightbar() {
  return (
    <div className='rightbarMainContainer'>
      <div style={{marginTop:"160px"}}>

      <div style={{marginLeft:"6px", paddingTop:"30px"}}>
        <img src={`${image1}`} className='Profileimage' alt=''/>
        <div className='dott'></div>
      </div>
      <div style={{marginLeft:"6px", paddingTop:"30px"}}>
        <img src={`${image2}`} className='Profileimage' alt=''/>
        <div className='dott'></div>
      </div>
      <div style={{marginLeft:"6px", paddingTop:"30px"}}>
        <img src={`${image3}`} className='Profileimage' alt=''/>
        <div className='dott'></div>
      </div>
      <div style={{marginLeft:"6px", paddingTop:"30px"}}>
        <img src={`${image4}`} className='Profileimage' alt=''/>
        <div className='dott'></div>
      </div>
      <div style={{marginLeft:"6px", paddingTop:"30px"}}>
        <img src={`${image5}`} className='Profileimage' alt=''/>
        <div className='dott'></div>
      </div>
      <div style={{marginLeft:"6px", paddingTop:"30px"}}>
        <img src={`${image6}`} className='Profileimage' alt=''/>
        <div className='dott'></div>
      </div>
      
      
      </div>

    </div>
    
  )
}
