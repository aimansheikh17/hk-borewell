import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import ChooseUs from './components/ChooseUs'
import ContactForm from './components/Contact'
import Footer from './components/Footer'




export default function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <ChooseUs/>
    <ContactForm/>
    <Footer/>
    </div>
  )
}
