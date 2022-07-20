import React, { useState } from 'react'
import Hero from '../components/hero'


// components
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/infosection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/infosection/Data';
// import ServicesElements from '../components/Services'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen = {isOpen} toggle = {toggle}/>
      <Navbar toggle = {toggle} />
      <Hero />
      <InfoSection { ...homeObjOne } />
      <InfoSection { ...homeObjTwo } />
      <InfoSection { ...homeObjThree } />
      {/* <Services /> */}
      {/* <InfoSection { ...homeObjFour } /> */}
      
    </>
  )
}

export default Home;
