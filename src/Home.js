import React,{useEffect} from 'react'
import {Taskbar,Navbar    ,Footer ,Copyright } from './Components/Website/Website.jsx'
const Home = () => {

  return (
    <div>
       <Taskbar/>
      <Navbar/>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default Home
