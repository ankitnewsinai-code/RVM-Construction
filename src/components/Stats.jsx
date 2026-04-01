import React, { useEffect, useRef } from 'react'
import { FaCalendarAlt, FaUsers, FaProjectDiagram, FaSmile } from 'react-icons/fa'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'

const Counter = ({ value, suffix = "" }) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" })
      return controls.stop
    }
  }, [inView, value, count])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

const Stats = () => {
  const stats = [
    {
      icon: <FaCalendarAlt className="text-4xl" />,
      number: 2020,
      suffix: "",
      label: "Year Established",
    },
    {
      icon: <FaUsers className="text-4xl" />,
      number: 30,
      suffix: "+",
      label: "Skilled Employees",
    },
    {
      icon: <FaProjectDiagram className="text-4xl" />,
      number: 150,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      icon: <FaSmile className="text-4xl" />,
      number: 100,
      suffix: "+",
      label: "Satisfied Clients",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section className="py-16 bg-construction-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                transition: { duration: 0.2 }
              }}
              className="stats-card bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center transition-all duration-300"
            >
              <div className="text-construction-yellow mb-4 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">
                <Counter value={stat.number} />{stat.suffix}
              </h3>
              <p className="text-gray-300 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Stats

