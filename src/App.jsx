import React from 'react'
import Header from "./components/header/header"
import Nav from './components/nav/nav'
import About from './components/About/about'
import Contacts from './components/Contact/contact'
import Footer from './components/footer/footer'
import Experience from './components/Experience/experience'
// import Service from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/Testimonials.jsx'
const App = () => {
  return (
    <>
    <Header/>
    < Nav />
    < About/>
    <Experience/>
    {/* <Service/> */}
    <Portfolio/>
    <Testimonials/>
    <Contacts/>
    <Footer/>
    
    </>
  )

}

export default App