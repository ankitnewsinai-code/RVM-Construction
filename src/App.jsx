import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects />
      <WhyUs />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App

