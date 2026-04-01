import React from 'react'
import { 
  FaWarehouse, 
  FaFlask, 
  FaCube,
  FaRoad,
  FaPaintRoller,
  FaBuilding,
  FaHandshake,
  FaHospital
 } from 'react-icons/fa'
import { GiFactory, GiCrane } from 'react-icons/gi'
import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      icon: <GiCrane className="text-4xl" />,
      title: "Industrial Steel Shed Construction",
      description: "Durable and cost-effective steel shed solutions for industrial applications with superior structural integrity."
    },
    {
      icon: <GiFactory className="text-4xl" />,
      title: "Pre Engineered Buildings (PEB)",
      description: "Custom-designed PEB structures with fast installation and excellent quality standards."
    },
    {
      icon: <FaFlask className="text-4xl" />,
      title: "Chemical Plant Construction",
      description: "Specialized construction for chemical processing facilities with safety compliance and precision."
    },
    {
      icon: <FaWarehouse className="text-4xl" />,
      title: "Warehouse Construction",
      description: "Large-scale warehouse facilities with optimal space utilization and durability."
    },
    {
      icon: <FaCube className="text-4xl" />,
      title: "Prefabricated Structures",
      description: "Modern prefabricated building solutions for quick and efficient construction."
    },
    {
      icon: <FaCube className="text-4xl" />,
      title: "Structural Glass Glazing",
      description: "Elegant glass facade and structural glazing solutions for modern buildings."
    },
    {
      icon: <FaRoad className="text-4xl" />,
      title: "RCC Road Construction",
      description: "High-quality reinforced cement concrete road construction for industrial zones."
    },
    {
      icon: <FaPaintRoller className="text-4xl" />,
      title: "Interior Fit-Out",
      description: "Professional interior design and fit-out services for commercial and industrial spaces."
    },
    {
      icon: <FaBuilding className="text-4xl" />,
      title: "Exposed Brick Construction",
      description: "Aesthetic exposed brick work for industrial and commercial architectural designs."
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: "Turnkey Construction Projects",
      description: "End-to-end construction solutions from planning to execution and handover."
    },
    {
      icon: <FaHospital className="text-4xl" />,
      title: "Hospital Construction",
      description: "Specialized healthcare infrastructure construction with modern facilities."
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="services" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-construction-yellow font-semibold text-sm tracking-wider uppercase">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We offer a wide range of industrial and commercial construction services 
            tailored to meet your specific requirements.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="service-card bg-white border border-gray-100 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="text-construction-yellow mb-4"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-construction-yellow transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-construction-yellow font-semibold hover:text-construction-yellowDark transition-colors"
              >
                Get Quote
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services

