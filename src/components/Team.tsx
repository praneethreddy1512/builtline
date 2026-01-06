'use client'

import { motion } from 'framer-motion'

export function Team() {
  const teamMembers = [
    {
      name: "Robert Mitchell",
      role: "Founder & CEO",
      experience: "30+ years in construction",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format"
    },
    {
      name: "Sarah Chen",
      role: "Chief Operations Officer",
      experience: "Project management expert",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format"
    },
    {
      name: "Marcus Johnson",
      role: "Lead Project Manager",
      experience: "Commercial specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      experience: "Architectural innovation",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&auto=format"
    },
    {
      name: "David Kim",
      role: "Construction Director",
      experience: "Quality assurance leader",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&auto=format"
    },
    {
      name: "Jennifer Walsh",
      role: "Client Relations Manager",
      experience: "Customer success focused",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&auto=format"
    }
  ]

  return (
    <section id="team" className="relative py-24 bg-background">
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
              Our Team
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
            Meet the Experts
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Our experienced leadership team brings decades of combined expertise to every project
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-xl overflow-hidden clean-border hover:border-gold/30 construction-shadow gentle-animation">
                {/* Photo */}
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover group-hover:scale-105 gentle-animation"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 gentle-animation" />
                </div>
                
                {/* Info */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <div className="text-gold font-semibold mb-2">
                    {member.role}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {member.experience}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-secondary rounded-2xl p-12"
        >
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            Join Our Growing Team
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for talented professionals who share our passion for quality construction. View our current openings and become part of the BuiltLine family.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold hover:bg-gold-dark text-charcoal font-bold px-8 py-3 rounded-md gentle-animation cursor-pointer"
          >
            View Career Opportunities
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
