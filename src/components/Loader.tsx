import { motion } from 'framer-motion'
import builtlineLogo from '@/assets/builtline-logo.png'

export function Loader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-charcoal text-white"
        >
            <div className="relative flex flex-col items-center">
                {/* Logo */}
                <motion.img
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    src={builtlineLogo}
                    alt="Loading..."
                    className="w-32 sm:w-48 mb-8"
                />

                {/* Loading Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gold font-display text-xl sm:text-2xl font-bold tracking-widest uppercase mb-6"
                >
                    Building Your Vision
                </motion.div>

                {/* Hazard Stripe Progress Bar Container */}
                <div className="w-64 sm:w-80 h-4 bg-black/50 rounded-full overflow-hidden border border-gold/30">
                    {/* Animated Hazard Stripes */}
                    <div className="h-full w-full animate-hazard-stripes opacity-80" />
                </div>

                {/* Percentage or Dots (Optional, keeping it simple for now) */}
            </div>
        </motion.div>
    )
}
