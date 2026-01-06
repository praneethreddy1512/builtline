'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Clock, ThumbsUp } from 'lucide-react'

export function Awards() {
  const certifications = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed general contractor with comprehensive insurance coverage"
    },
    {
      icon: Award,
      title: "LEED Certified",
      description: "Expertise in sustainable and environmentally responsible construction"
    },
    {
      icon: Clock,
      title: "25+ Years Experience",
      description: "Quarter century of excellence in construction and project delivery"
    },
    {
      icon: ThumbsUp,
      title: "BBB A+ Rating",
      description: "Highest rating from the Better Business Bureau for trust and reliability"
    }
  ]

  const recognitions = [
    "Best Commercial Builder 2024",
    "Excellence in Safety Award",
    "Green Building Achievement",
    "Community Impact Award",
    "Innovation in Construction",
    "Client Choice Award"
  ]

  return (
    <section id="awards" className="relative py-24 bg-secondary overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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
              Trust & Recognition
            </span>
            <div className="w-12 h-0.5 bg-gold" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground"
          >
            Certifications & Awards
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            Our commitment to excellence is recognized by industry leaders and clients alike
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-xl p-8 text-center clean-border hover:border-gold/30 construction-shadow gentle-animation"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-3">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Awards Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-charcoal rounded-2xl p-12"
        >
          <h3 className="font-display text-2xl font-bold text-white text-center mb-8">
            Industry Recognition
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {recognitions.map((award, index) => (
              <motion.div
                key={award}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 border border-gold/20 rounded-lg px-6 py-3 text-white/80 font-medium hover:border-gold/50 hover:bg-white/10 gentle-animation"
              >
                🏆 {award}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
