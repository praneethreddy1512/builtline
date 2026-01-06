'use client'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Light overlay for text contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-3xl"
          >
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-0.5 bg-gold" />
              <span className="text-gold font-semibold tracking-wider uppercase text-sm">
                Build Right. Live Smart.
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Building Your
              <span className="block gold-gradient-text">Vision Into</span>
              <span className="block">Reality</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-white/80 leading-relaxed mb-10 max-w-2xl">
              Premier construction services for residential, commercial, and industrial projects. Quality craftsmanship that stands the test of time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold hover:bg-gold-dark text-charcoal font-bold px-8 py-4 rounded-md gentle-animation cursor-pointer text-lg w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Start Your Project
                </motion.button>
              </Link>
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/30 hover:border-gold text-white hover:text-gold font-bold px-8 py-4 rounded-md gentle-animation cursor-pointer text-lg backdrop-blur-sm w-full sm:w-auto block text-center"
                >
                  View Our Work
                </motion.button>
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gold mb-1">25+</div>
                <div className="text-white/70 text-sm sm:text-base">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gold mb-1">500+</div>
                <div className="text-white/70 text-sm sm:text-base">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gold mb-1">100%</div>
                <div className="text-white/70 text-sm sm:text-base">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
