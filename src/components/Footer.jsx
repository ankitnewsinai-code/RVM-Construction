import React from 'react'
import { FaHardHat, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'City Gas Distribution',
    'Solar Renewable Energy',
    'Tower Structure Works',
    'Commercial Cleaning Services',
    'Bituminous & R.C.C Road Work',
    'Building Construction & Repair',
  ]

  return (
    <footer className="bg-construction-gray pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <FaHardHat className="text-construction-yellow text-4xl mr-2" />
              <div>
                <h3 className="text-xl font-bold text-white">R V M</h3>
                <p className="text-gray-400 text-sm">Construction</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              R V M Construction is a premier industrial construction company
              dedicated to delivering excellence in every project we undertake.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-construction-yellow/20 rounded-full flex items-center justify-center text-construction-yellow hover:bg-construction-yellow hover:text-white transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 bg-construction-yellow/20 rounded-full flex items-center justify-center text-construction-yellow hover:bg-construction-yellow hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 bg-construction-yellow/20 rounded-full flex items-center justify-center text-construction-yellow hover:bg-construction-yellow hover:text-white transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="w-10 h-10 bg-construction-yellow/20 rounded-full flex items-center justify-center text-construction-yellow hover:bg-construction-yellow hover:text-white transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-construction-yellow transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-construction-yellow transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-construction-yellow mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p className="font-semibold text-white mb-1">Communication Office</p>
                  <p className="mb-3">B/266, Royal Plaza, Nr. Shuvidha Row House,<br />Simada Road, Simada Gam,<br />Surat, Gujarat - 395006</p>
                  <p className="font-semibold text-white mb-1">Registered Office</p>
                  <p>S/14, Municipal Shopping Center,<br />Mavdi Main Road,<br />Rajkot, Gujarat - 360004</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-construction-yellow" />
                <p className="text-gray-400">
                  +91 7575093303
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-construction-yellow" />
                <p className="text-gray-400">
                  jenilmer47@gmail.com

                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaClock className="text-construction-yellow mt-1" />
                <p className="text-gray-400">
                  Mon - Sat: 9:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} R V M Construction. All rights reserved.
            </p>
            <p className="text-gray-400 text-center md:text-right">
              Designed with <span className="text-construction-yellow">♥</span> for Quality Construction
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

