import React from 'react'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';

const App = () => {
  return (
    <>
     <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Services' element={<Services/>} />


       

      </Routes>
    
    
    </>
  )
}

export default App