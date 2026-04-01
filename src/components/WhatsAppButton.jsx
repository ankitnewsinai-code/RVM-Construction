import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const WhatsAppButton = () => {
  const phoneNumber = "917575093303"
  const message = "Hello R V M Construction, I'm interested in your services. Please contact me."

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 2
      }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-green-500/50 transition-all duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </motion.a>
  )
}

export default WhatsAppButton

