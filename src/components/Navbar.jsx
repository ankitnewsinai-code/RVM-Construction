import React, { useState } from 'react'
import { FaBars, FaTimes, FaHardHat } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      id="home"
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <FaHardHat className={`text-4xl mr-2 ${scrolled ? 'text-construction-yellow' : 'text-construction-yellow'}`} />
            <div>
              <h1 className={`text-xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                R V M
              </h1>
              <p className={`text-xs ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                Construction
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-200 hover:text-construction-yellow ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-construction-yellow text-white px-6 py-2 rounded-md font-medium hover:bg-construction-yellowDark transition-colors duration-200"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-700 hover:text-construction-yellow hover:bg-gray-50 rounded-md font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-construction-yellow text-white px-6 py-2 rounded-md font-medium hover:bg-construction-yellowDark mt-4"
          >
            Get Quote
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

