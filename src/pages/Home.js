import React from 'react'
import Leftbar from '../Component/Leftbar/Leftbar'
import Maincontainer from '../Component/Maincontainer/Maincontainer'
import Rightbar from '../Component/Rightbar'
import "./home.css"
export default function Home() {
  return (
    <div className='mainContainerForHome'>
      <Leftbar/>
      <Maincontainer/>
      <Rightbar/>
    </div>
  )
}

