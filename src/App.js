import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Project from './Pages/Project';
import Footer from './Component/Footer';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/project' element={<Project/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App