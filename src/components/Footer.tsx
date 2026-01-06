'use client'

import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react'
import builtlineLogo from '@/assets/builtline-logo.png'

export function Footer() {
  const services = [
    'Residential Construction',
    'Commercial Construction',
    'Industrial Projects',
    'Renovations',
    'Project Management',
    'Design-Build'
  ]

  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Projects', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' }
  ]

  return (
    <footer className="relative py-16 bg-charcoal text-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <img
              src={builtlineLogo}
              alt="BuiltLine Construction"
              className="h-20 w-auto mb-6"
            />
            <p className="text-white/70 leading-relaxed mb-6">
              Building excellence since 1999. We deliver quality construction services for residential, commercial, and industrial projects.
            </p>
            <p className="text-gold font-semibold italic">
              Build Right. Live Smart.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-gold gentle-animation"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-gold gentle-animation"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <p className="text-white/70">99455 99401</p>
                  <p className="text-white/70">91484 98588</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <p className="text-white/70">4th Main Rd, CA's</p>
                  <p className="text-white/70">near lingaraj Pujari & Co</p>
                  <p className="text-white/70">Malleshwaram, Bangalore, Karnataka</p>
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/builtline_construction?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold gentle-animation">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/builtlineconstruction/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold gentle-animation">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@BuiltlineConstruction" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold gentle-animation">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/builtline-construction/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold gentle-animation">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Certifications Bar */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-8 text-white/50 text-sm">
            <span>✓ Licensed & Insured</span>
            <span>✓ LEED Certified</span>
            <span>✓ BBB A+ Rating</span>
            <span>✓ OSHA Compliant</span>
            <span>✓ 25+ Years Experience</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/60">
              © 2025 BuiltLine Construction. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-gold gentle-animation">Privacy Policy</a>
              <a href="#" className="hover:text-gold gentle-animation">Terms of Service</a>
              <a href="#" className="hover:text-gold gentle-animation">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
