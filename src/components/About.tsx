'use client'

import { motion } from 'framer-motion'

export function About() {
  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      description: "Initial meeting to understand your vision, requirements, and budget",
      icon: "💬"
    },
    {
      number: "02", 
      title: "Design & Planning",
      description: "Architectural design, permits, and detailed project planning",
      icon: "📐"
    },
    {
      number: "03",
      title: "Pre-Construction",
      description: "Material sourcing, team assembly, and site preparation",
      icon: "📋"
    },
    {
      number: "04",
      title: "Construction",
      description: "Expert execution with regular progress updates and quality control",
      icon: "🏗️"
    },
    {
      number: "05",
      title: "Handover",
      description: "Final inspection, documentation, and project delivery",
      icon: "🔑"
    }
  ]

  return (
    <section id="about" className="relative py-24 bg-secondary overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(var(--gold)) 35px, hsl(var(--gold)) 70px)`,
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
              Our Process
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
            How We Build Excellence
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            Our proven 5-step process ensures every project is delivered on time, on budget, and beyond expectations
          </motion.p>
        </div>

        {/* Process Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
          
          {/* Process Steps */}
          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative lg:flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'}`}>
                  <div className="bg-background p-8 rounded-lg clean-border construction-shadow hover:border-gold/30 gentle-animation">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                      <span className="text-4xl">{step.icon}</span>
                      <span className="text-gold font-bold text-sm tracking-wider">STEP {step.number}</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-gold rounded-full items-center justify-center text-charcoal font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block lg:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-charcoal rounded-2xl p-12 text-center"
        >
          <h3 className="font-display text-3xl font-bold text-white mb-8">
            Why Choose BuiltLine?
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-gold mb-2">99%</div>
              <div className="text-white/70">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-gold mb-2">25+</div>
              <div className="text-white/70">Expert Team Members</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-gold mb-2">$50M+</div>
              <div className="text-white/70">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-gold mb-2">5★</div>
              <div className="text-white/70">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
