'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Portfolio() {
  const [visibleCount, setVisibleCount] = useState(3)

  const projects = [
    {
      title: "Skyline Towers",
      category: "Commercial",
      description: "A 25-story mixed-use development featuring luxury offices and retail space in the heart of downtown.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      stats: { area: "250,000 sq ft", duration: "24 months", value: "$45M" }
    },
    {
      title: "Riverside Estates",
      category: "Residential",
      description: "Premium waterfront community with 48 custom homes featuring sustainable design and smart home technology.",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      stats: { area: "120 acres", duration: "36 months", value: "$28M" }
    },
    {
      title: "Metro Distribution Center",
      category: "Industrial",
      description: "State-of-the-art logistics facility with automated systems and LEED Gold certification.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      stats: { area: "500,000 sq ft", duration: "18 months", value: "$32M" }
    },
    {
      title: "Grand Plaza Hotel",
      category: "Commercial",
      description: "Luxury 5-star hotel complex with convention center and rooftop amenities.",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
      stats: { area: "180,000 sq ft", duration: "20 months", value: "$55M" }
    },
    {
      title: "Oakwood Heights",
      category: "Residential",
      description: "Exclusive gated community featuring modern architectural designs and green spaces.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      stats: { area: "85 acres", duration: "30 months", value: "$42M" }
    },
    {
      title: "Tech Hub Innovation Center",
      category: "Industrial",
      description: "Next-generation research and manufacturing facility for advanced technology sectors.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      stats: { area: "320,000 sq ft", duration: "22 months", value: "$68M" }
    }
  ]

  return (
    <section id="portfolio" className="relative py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-0.5 bg-gold" />
            <span className="text-sm font-semibold text-gold tracking-wider uppercase">
              Our Portfolio
            </span>
            <div className="w-12 h-0.5 bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Explore our showcase of completed projects that demonstrate our commitment to quality, innovation, and client satisfaction
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.slice(0, visibleCount).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
            >
              {/* Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 gentle-animation"
                  />
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-gold text-charcoal font-semibold px-4 py-2 rounded-md text-sm">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="border-l-2 border-gold pl-4">
                    <div className="text-2xl font-bold text-foreground">{project.stats.area}</div>
                    <div className="text-sm text-muted-foreground">Total Area</div>
                  </div>
                  <div className="border-l-2 border-gold pl-4">
                    <div className="text-2xl font-bold text-foreground">{project.stats.duration}</div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                  </div>
                  <div className="border-l-2 border-gold pl-4">
                    <div className="text-2xl font-bold text-foreground">{project.stats.value}</div>
                    <div className="text-sm text-muted-foreground">Project Value</div>
                  </div>
                </div>

                {/* View Details Link */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        {visibleCount < projects.length && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="bg-charcoal hover:bg-charcoal/90 text-white font-bold px-10 py-4 rounded-md gentle-animation cursor-pointer text-lg border border-gold/20 hover:border-gold/40"
            >
              View More Projects
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
