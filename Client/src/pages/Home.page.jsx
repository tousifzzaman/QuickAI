import React from 'react'
import Navbar from '../components/Navbar.component'
import Hero from '../components/Hero.component'
import AiTools from '../components/AiTools.component'
import Testimonial from '../components/Testimonial.component'
import Plan from '../components/Plan.component'
import Footer from '../components/Footer.component'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AiTools />
      <Testimonial />
      <Plan />
      <Footer />
    </>
  )
}

export default Home
