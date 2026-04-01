import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { FaStar } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Patel",
      company: "Patel Chemical Industries, Bharuch",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "We trusted R V M Construction for our chemical plant construction. They handled all safety requirements professionally and delivered the project on time. Excellent work!"
    },
    {
      name: "Suresh Kumar",
      company: "Kumar Logistics, Anand",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "The PEB warehouse construction was completed beyond our expectations. The team was professional, skilled, and very cooperative throughout the project."
    },
    {
      name: "Amit Shah",
      company: "Shah Corporate, Vadodara",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Our corporate office interior was designed and executed perfectly. The attention to detail and quality of work is commendable. Highly recommended!"
    },
    {
      name: "Vikram Singh",
      company: "Singh Industries, Halol",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "The RCC road construction for our industrial zone was done with superior quality. The team ensured minimal disruption to our operations."
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-construction-yellow font-semibold text-sm tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience working with us.
          </p>
        </div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonial-slider"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card bg-white rounded-lg p-8 shadow-lg mx-2">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-construction-yellow" />
                  ))}
                </div>
                
                {/* Text */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials

