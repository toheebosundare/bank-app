import React, { useState } from 'react'
import Hero from '../components/hero'


// components
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/infosection'
// import Services from '../components/Services'


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
      <InfoSection />
      {/* <Services />  */}
    </>
  )
}

export default Home;
