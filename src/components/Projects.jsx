import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Industrial Steel Shed",
      location: "Vadodara",
      size: "50,000 sq.ft"
    },
    {
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "PEB Warehouse",
      location: "Anand",
      size: "75,000 sq.ft"
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Corporate Office Interior",
      location: "Vadodara",
      size: "15,000 sq.ft"
    },
    {
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Structural Glass Facade",
      location: "Surat",
      size: "10,000 sq.ft"
    },
    {
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Chemical Plant Facility",
      location: "Bharuch",
      size: "1,00,000 sq.ft"
    },
    {
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "RCC Industrial Road",
      location: "Halol",
      size: "5 km"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 overflow-hidden">
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
            Our Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Showcase of Excellence
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our portfolio of successful industrial and commercial construction projects 
            across Gujarat.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="project-card group relative rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-construction-yellow font-semibold text-sm">
                    {project.location}
                  </span>
                  <h3 className="text-white text-xl font-bold">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">
                    {project.size}
                  </p>
                </div>
              </div>
              <div className="bg-white p-4">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-construction-yellow transition-colors">
                  {project.title}
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-600 text-sm">{project.location}</span>
                  <span className="text-construction-yellow font-semibold text-sm">{project.size}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

