import React from 'react'
import { 
  FaGasPump, FaSolarPanel, FaNetworkWired, FaBroadcastTower, 
  FaSatelliteDish, FaBolt, FaPlug, FaLightbulb, FaBroom, 
  FaWater, FaBorderAll, FaBuilding, FaRoad, FaArchway, FaTractor
} from 'react-icons/fa'
import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      icon: <FaGasPump className="text-4xl" />,
      title: "City Gas Distribution",
      description: "Steel Pipeline, PE Pipeline & PNG Domestic, Commercial & Industrial Connection, O&M, DMA, CNG Station, MRS, DRS Work."
    },
    {
      icon: <FaSolarPanel className="text-4xl" />,
      title: "Solar Renewable Energy",
      description: "Installation, Testing & Commissioning of Grid connected Rooftop Solar & Ground Mount Photovoltaic Systems."
    },
    {
      icon: <FaNetworkWired className="text-4xl" />,
      title: "OFC & JF Cable Works",
      description: "Laying & HDD, Installation, Commissioning Cable (OFC & JF)."
    },
    {
      icon: <FaBroadcastTower className="text-4xl" />,
      title: "Tower Structure Works",
      description: "Tower Structure of ODSC (GBT & RTP) Lattice ESC Work Civil/ Erection/ Electrical and Tower Dismantling Work."
    },
    {
      icon: <FaSatelliteDish className="text-4xl" />,
      title: "5G ODSC Upgradation",
      description: "5G ODSC (GBT/GBM/NBT) Upgradation Work Civil/ Erection/ Electrical."
    },
    {
      icon: <FaBolt className="text-4xl" />,
      title: "Power Cable Works",
      description: "Laying, Testing, Commissioning, of Power cable."
    },
    {
      icon: <FaPlug className="text-4xl" />,
      title: "HT/LT Cable Work",
      description: "Laying, Testing, Commissioning, of HT/LT Cable and Push through/ HDD method."
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Street & Flood Lights",
      description: "Installation, Commissioning, Testing of Street Light Pole & Flood Lights & Electric Pole."
    },
    {
      icon: <FaBolt className="text-4xl" />,
      title: "Overhead Line & O&M",
      description: "Erection of HT/LT Line & TC Overhead line and O&M Work."
    },
    {
      icon: <FaBroom className="text-4xl" />,
      title: "Commercial Cleaning Services",
      description: "Housekeeping, Office, Warehouse, Furniture, Building, Renovation, and Construction Area Cleaning."
    },
    {
      icon: <FaWater className="text-4xl" />,
      title: "U/G Pipeline & Drainage",
      description: "Laying of U/G Pipe Line work, Drainage work."
    },
    {
      icon: <FaBorderAll className="text-4xl" />,
      title: "Protection Wall & Precast",
      description: "Compound Wall, RCC Protection Wall, Precast Wall Work."
    },
    {
      icon: <FaBuilding className="text-4xl" />,
      title: "Construction & Repair",
      description: "Construction of Building & Repairing and Maintenance work."
    },
    {
      icon: <FaRoad className="text-4xl" />,
      title: "Bituminous & R.C.C Road Work",
      description: "Bituminous & R.C.C Road work."
    },
    {
      icon: <FaArchway className="text-4xl" />,
      title: "Box Culvert & Minor Bridge",
      description: "Structure of Box Culvert & Minor Bridge."
    },
    {
      icon: <FaTractor className="text-4xl" />,
      title: "Fabrication Work",
      description: "Structure of Fabrication work."
    }
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

