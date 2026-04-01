import React from 'react'
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-construction-yellow font-semibold text-lg mb-4 tracking-wider"
          >
            WELCOME TO R V M CONSTRUCTION
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Industrial Construction
            <span className="block text-construction-yellow">Excellence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
          >
            Building The Nation's Future with Quality, Safety, and Innovation
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="group bg-construction-yellow text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-construction-yellowDark transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get Quote
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+917575093303"
              className="group bg-white text-gray-800 px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaPhoneAlt className="text-construction-yellow" />
              Call Now
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="w-8 h-14 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

