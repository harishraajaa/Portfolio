import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Services from './component/Services'
import Projects from './component/Projects'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {
  return <>
  <Navbar/>
  <Home/>
  <About/>
  <Services/>
  <Projects/>
  <Contact/>
  <Footer/>
  </>
}

export default App