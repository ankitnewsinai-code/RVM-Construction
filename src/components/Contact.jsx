import React, { useState } from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'

const Contact = () => {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })

  const services = [
    "City Gas Distribution",
    "Solar Renewable Energy",
    "OFC & JF Cable Works",
    "Tower Structure Works",
    "5G ODSC Upgradation",
    "Power Cable Works",
    "HT/LT Cable Work",
    "Street & Flood Lights",
    "Overhead Line & O&M",
    "Housekeeping & Cleaning Services",
    "Commercial Cleaning Services",
    "U/G Pipeline & Drainage",
    "Protection Wall & Precast",
    "Construction & Repair",
    "Bituminous & R.C.C Road Work",
    "Box Culvert & Minor Bridge",
    "Fabrication Work",
    "Other"
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    setShowModal(true)
    setFormData({
      fullName: '',
      companyName: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-construction-yellow font-semibold text-sm tracking-wider uppercase">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Get In Touch
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="bg-construction-gray rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-construction-yellow rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Communication Office</h4>
                  <p className="text-gray-300 mb-4">
                    B/266, Royal Plaza, Nr. Shuvidha Row House,<br />Simada Road, Simada Gam,<br />Surat, Gujarat - 395006
                  </p>
                  <h4 className="text-white font-semibold mb-2">Registered Office</h4>
                  <p className="text-gray-300">
                    S/14, Municipal Shopping Center,<br />Mavdi Main Road,<br />Rajkot, Gujarat - 360004
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-construction-yellow rounded-lg flex items-center justify-center">
                  <FaPhoneAlt className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-gray-300">
                    +91 7575093303
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-construction-yellow rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-gray-300">
                    rvmovaliyaconstructionco@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-construction-yellow rounded-lg flex items-center justify-center">
                  <FaClock className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Business Hours</h4>
                  <p className="text-gray-300">
                    Monday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-construction-yellow focus:border-transparent outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-construction-yellow focus:border-transparent outline-none transition-colors"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-construction-yellow focus:border-transparent outline-none transition-colors"
                    placeholder="+91 7575093303 "
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-construction-yellow focus:border-transparent outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Service Required *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-construction-yellow focus:border-transparent outline-none transition-colors"
                >
                  <option value="">Select a Service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-construction-yellow focus:border-transparent outline-none transition-colors resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-construction-yellow text-white py-4 rounded-md font-semibold text-lg hover:bg-construction-yellowDark transition-colors duration-300"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                Your inquiry has been successfully sent. We will get back to you soon.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-construction-yellow text-white rounded-lg px-4 py-3 font-semibold hover:bg-yellow-500 transition-colors duration-200"
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Contact

