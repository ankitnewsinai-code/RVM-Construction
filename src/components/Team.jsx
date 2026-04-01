import React from 'react'
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Team = () => {
  const teamMembers = [
    {
      name: "Rameshbhai Movaliya",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Vikram Movaliya",
      role: "Director / COO",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Priya Sharma",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Mahendra Singh",
      role: "Chief Engineer",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-construction-yellow font-semibold text-sm tracking-wider uppercase">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Meet The Experts
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our experienced team of professionals is dedicated to delivering excellence 
            in every project we undertake.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card group relative rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="team-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex gap-4">
                    <a href="#" className="text-white hover:text-construction-yellow transition-colors">
                      <FaLinkedin size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-construction-yellow transition-colors">
                      <FaTwitter size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-construction-yellow transition-colors">
                      <FaEnvelope size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 text-center">
                <h3 className="text-lg font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-construction-yellow font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team

