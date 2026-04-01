import React from 'react'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Construction Team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-construction-yellow/20"></div>
            </div>
            {/* Experience Badge */}
            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -bottom-6 -right-6 bg-construction-yellow text-white p-6 rounded-lg shadow-xl"
            >
              <p className="text-4xl font-bold">5+</p>
              <p className="text-sm font-medium">Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="text-construction-yellow font-semibold text-sm tracking-wider uppercase">
                About Our Company
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                Building Tomorrow's Infrastructure Today
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              R V M Construction is a premier industrial construction company 
              dedicated to delivering excellence in every project we undertake. With over 
              5 years of experience, we specialize in constructing robust warehouses, 
              state-of-the-art chemical plants, industrial sheds, and commercial structures 
              that stand the test of time.
            </p>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our commitment to quality, safety, and timely delivery has made us a trusted 
              partner for businesses across Gujarat and beyond. We take pride in our skilled 
              workforce and advanced construction techniques that ensure every project meets 
              international standards.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                'Industrial Steel Shed Construction',
                'Pre Engineered Buildings',
                'Chemical Plant Construction',
                'Warehouse Construction',
                'Prefabricated Structures',
                'Turnkey Projects',
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-2"
                >
                  <FaCheckCircle className="text-construction-yellow text-lg flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-construction-yellow text-white px-8 py-3 rounded-md font-semibold hover:bg-construction-yellowDark transition-colors duration-300"
            >
              Get Free Consultation
              <FaArrowRight className="text-sm" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

