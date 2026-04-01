import React from 'react'
import { FaAward, FaClock, FaShieldAlt, FaUsers, FaMoneyBillWave, FaHeart } from 'react-icons/fa'

const WhyUs = () => {
  const features = [
    {
      icon: <FaAward className="text-4xl" />,
      title: "Quality Assurance",
      description: "We maintain the highest quality standards in every project, using premium materials and expert craftsmanship."
    },
    {
      icon: <FaClock className="text-4xl" />,
      title: "Timely Delivery",
      description: "Our commitment to deadlines ensures your project is completed on schedule, every time."
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Safety First",
      description: "We prioritize safety with rigorous protocols and trained professionals on every site."
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Expert Team",
      description: "Our skilled workforce brings decades of combined experience in industrial construction."
    },
    {
      icon: <FaMoneyBillWave className="text-4xl" />,
      title: "Cost Effective",
      description: "Competitive pricing without compromising on quality or structural integrity."
    },
    {
      icon: <FaHeart className="text-4xl" />,
      title: "Client Focused",
      description: "Your satisfaction is our priority. We work closely with you throughout the project."
    },
  ]

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-construction-yellow font-semibold text-sm tracking-wider uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Our Core Strengths
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover why R V M Construction is the preferred choice for industrial 
            and commercial construction projects.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="service-card bg-gray-50 rounded-lg p-8 text-center hover:bg-construction-yellow hover:text-white transition-all duration-300 group"
            >
              <div className="text-construction-yellow mb-4 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-100 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs

