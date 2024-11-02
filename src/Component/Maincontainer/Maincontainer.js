import React from 'react'
import "./maincontainer.css"
import Navbar from '../Navbar/Navbar'
import bgimage from "../../Images/amazon.jpg"
import itemimage from "../../Images/img1.jpg"
import itemimage1 from "../../Images/img2.jpg"
import itemimage2 from "../../Images/img3.jpg"
import itemimage3 from "../../Images/img4.jpg"
import itemimage4 from "../../Images/img5.jpg"
import itemimage5 from "../../Images/img6.jpg"
import itemimage6 from "../../Images/img7.jpg"
import itemimage7 from "../../Images/img8.jpg"
import itemimage8 from "../../Images/img9.jpg"
import itemimage9 from "../../Images/img10.jpg"

export default function Maincontainer() {
  return (
    <div className='mainContainer'>
      <Navbar/>
      <div>
        <img src={`${bgimage}`} className='coverimage' alt='' />
        <div className='ItemsContainer'>
          <p className='title'>JUNGLE (amazon) </p>
        <p className='subtitle '>THRILLER</p>
        <div className='btnContainer' style={{display:"flex", alignItems:"center", marginTop:"-27px"}}>
          <button className='btnwatch'> WATCH NOW</button>
          <div className='watchlater'>
           <p className='plus'>+</p>
          </div>
        </div>
        </div>      
      </div>


<div>
  <h4 className='submaintitle'>FREE WATCHING</h4>
  <div className='iteCon' style={{display:"flex", marginLeft:"60px", flexWrap:"wrap"}}>

  <div className='itemContainer'>
    <img src={`${itemimage}`} className={"itemimage"} alt='' />
    <button className='btnitemContainer'> Watch Now</button>
  </div>

  <div className='itemContainer'>
    <img src={`${itemimage1}`} className={"itemimage"} alt='' />
    <button className='btnitemContainer'> Watch Now</button>
  </div>

  <div className='itemContainer'>
    <img src={`${itemimage2}`} className={"itemimage"} alt='' />
    <button className='btnitemContainer'> Watch Now</button>
  </div>

  <div className='itemContainer'>
    <img src={`${itemimage3}`} className={"itemimage"} alt='' />
    <button className='btnitemContainer'> Watch Now</button>
  </div>

  <div className='itemContainer'>
    <img src={`${itemimage4}`} className={"itemimage"} alt='' />
    <button className='btnitemContainer'> Watch Now</button>
  </div>

  </div>
</div>

<div >
  <h4 className='submaintitle'>BEST ACTION</h4>
  <div className='iteCon' style={{display:"flex", marginLeft:"60px", flexWrap:"wrap"}}>

  <div className='itemContainer'>
    <img src={`${itemimage5}`} className={"itemimage"} alt='' />
    <button className='btnitemContainer'> Watch Now</button>
  </div>

  <div className='itemContainer'>
    <img src={`${itemimage6}`} className={"itemimage"} alt='' />
    <button className='btnitemContainer'> Watch Now</button>
  </div>

  <div className='itemContainer'>
    <img src={`${itemimage7}`} className={"itemimage"} alt='' />
    <button className='btnitemContainer'> Watch Now</button>
  </div>

  <div className='itemContainer'>
    <img src={`${itemimage8}`} className={"itemimage"} alt='' />
    <button className='btnitemContainer'> Watch Now</button>
  </div>

  <div className='itemContainer'>
    <img src={`${itemimage9}`} className={"itemimage"} alt='' />
    <button className='btnitemContainer'> Watch Now</button>
  </div>

  </div>
</div>


    </div>
  )
}

