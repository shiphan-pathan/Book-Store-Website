
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Books from './components/Books'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'



const App = () => {
    const [searchQuery, setSearchQuery]=useState('');

  return (
    <>
     <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />  
     <Home />   
     <Books  searchQuery={searchQuery} />
     <About />
     <Contact />
     <Footer />
    </>


  )
}

export default App
