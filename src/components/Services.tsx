'use client'

import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Building2, Home, Factory, Hammer, HardHat, Ruler } from 'lucide-react'

export function Services() {
  const navigate = useNavigate()
  const services = [
    {
      id: 'residential',
      title: "Residential Construction",
      description: "Custom homes, renovations, and additions tailored to your lifestyle and budget.",
      icon: Home,
      features: ["Custom Homes", "Home Renovations", "Additions & Extensions", "Kitchen & Bath Remodeling"]
    },
    {
      id: 'commercial',
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and mixed-use developments built for success.",
      icon: Building2,
      features: ["Office Buildings", "Retail Spaces", "Restaurants", "Mixed-Use Developments"]
    },
    {
      id: 'industrial',
      title: "Industrial Projects",
      description: "Warehouses, manufacturing facilities, and industrial complexes with precision engineering.",
      icon: Factory,
      features: ["Warehouses", "Manufacturing Plants", "Distribution Centers", "Industrial Complexes"]
    },
    {
      id: 'renovation',
      title: "Renovations & Remodeling",
      description: "Transform existing spaces with modern upgrades while preserving structural integrity.",
      icon: Hammer,
      features: ["Interior Remodeling", "Structural Repairs", "Historic Restoration", "Code Compliance"]
    },
    {
      id: 'project-management',
      title: "Project Management",
      description: "End-to-end project oversight ensuring timely delivery and budget adherence.",
      icon: HardHat,
      features: ["Budget Management", "Timeline Coordination", "Vendor Relations", "Quality Control"]
    },
    {
      id: 'design-build',
      title: "Design-Build Services",
      description: "Seamless integration of design and construction for faster, more efficient projects.",
      icon: Ruler,
      features: ["Architectural Design", "Engineering", "Permits & Approvals", "Turnkey Solutions"]
    }
  ]

  return (
    <section id="services" className="relative py-24 bg-white dark:bg-charcoal overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-0.5 bg-gold" />
            <span className="text-sm font-semibold text-gold tracking-wider uppercase">
              What We Offer
            </span>
            <div className="w-12 h-0.5 bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-charcoal dark:text-white"
          >
            Our Construction Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-charcoal/70 dark:text-white/70 leading-relaxed max-w-3xl mx-auto"
          >
            From concept to completion, we deliver comprehensive construction solutions for every type of project
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-8 h-full hover:border-gold/40 hover:bg-gray-100 dark:hover:bg-white/10 gentle-animation">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 gentle-animation">
                    <IconComponent className="w-8 h-8 text-gold" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold text-charcoal dark:text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-charcoal/70 dark:text-white/70 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-charcoal/60 dark:text-white/60 text-sm">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-charcoal/70 dark:text-white/70 mb-6 text-lg">
            Ready to start your construction project?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="bg-gold hover:bg-gold-dark text-charcoal font-bold px-10 py-4 rounded-md gentle-animation cursor-pointer text-lg"
          >
            Get a Free Estimate
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
