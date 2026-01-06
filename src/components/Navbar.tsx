"use client";
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import builtlineLogo from '@/assets/builtline-logo.png'

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()
    const isHome = location.pathname === '/'

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => { document.body.style.overflow = 'unset' }
    }, [isMobileMenuOpen])

    // Determine navbar classes based on route and scroll state
    const navbarClasses = `w-full px-6 sm:px-8 lg:px-12 py-4 transition-all duration-300 ease-out ${isHome && !isScrolled ? 'bg-transparent' : 'glass-navbar'
        }`

    const linkClasses = "text-white hover:text-gold font-medium gentle-animation"

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="fixed top-0 left-0 right-0 w-full z-[110]"
            >
                <div className={navbarClasses}>
                    <div className="flex items-center justify-between max-w-7xl mx-auto">
                        {/* Logo */}
                        <Link
                            to="/"
                            className="flex items-center cursor-pointer"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <img
                                src={builtlineLogo}
                                alt="BuiltLine Construction"
                                className="h-14 sm:h-16 w-auto"
                            />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/projects" className={linkClasses}>Projects</Link>
                            <Link to="/services" className={linkClasses}>Services</Link>
                            <Link to="/team" className={linkClasses}>Team</Link>
                            <Link to="/contact" className={linkClasses}>Contact</Link>
                            <Link to="/about" className={linkClasses}>About Us</Link>
                        </div>

                        {/* Right Side - CTA + Mobile Menu */}
                        <div className="flex items-center space-x-3">
                            <Link
                                to="/contact"
                                className="hidden sm:flex items-center gap-2 bg-gold hover:bg-gold-dark text-charcoal font-semibold px-6 py-3 rounded-md gentle-animation cursor-pointer"
                            >
                                <Phone className="w-4 h-4" />
                                Get a Quote
                            </Link>

                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden glass-effect p-3 rounded-md text-white hover:text-gold gentle-animation cursor-pointer z-[120] relative"
                            >
                                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-[80] cursor-pointer"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Mobile Menu Panel */}
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: isMobileMenuOpen ? '0%' : '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-charcoal border-l border-gold/20 z-[90] mobile-menu-panel pointer-events-auto"
            >
                <div className="flex flex-col h-full pt-20 px-6 pb-6">
                    <div className="flex flex-col space-y-4 text-white">
                        <Link to="/projects" className="px-4 py-3 hover:text-gold hover:bg-white/5 rounded-lg gentle-animation font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
                        <Link to="/services" className="px-4 py-3 hover:text-gold hover:bg-white/5 rounded-lg gentle-animation font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                        <Link to="/team" className="px-4 py-3 hover:text-gold hover:bg-white/5 rounded-lg gentle-animation font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>Team</Link>
                        <Link to="/contact" className="px-4 py-3 hover:text-gold hover:bg-white/5 rounded-lg gentle-animation font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                        <Link to="/about" className="px-4 py-3 hover:text-gold hover:bg-white/5 rounded-lg gentle-animation font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                    </div>

                    <Link
                        to="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="bg-gold text-charcoal font-semibold px-6 py-3 rounded-md hover:bg-gold-dark gentle-animation mt-8 cursor-pointer flex items-center justify-center gap-2"
                    >
                        <Phone className="w-4 h-4" />
                        Get a Quote
                    </Link>
                </div>
            </motion.div>
        </>
    )
}
