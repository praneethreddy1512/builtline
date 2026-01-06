'use client'

import { motion } from 'framer-motion'

import b1 from '../assets/b1.png'
import b2 from '../assets/b2.png'
import b3 from '../assets/b3.jpg'
import b4 from '../assets/b4.png'
import b5 from '../assets/b5.jpg'
import b6 from '../assets/b6.png'
import b7 from '../assets/b7.jpg'
import b8 from '../assets/b8.png'
import b9 from '../assets/b9.jpg'
import b10 from '../assets/b10.png'
import b11 from '../assets/b11.png'
import b12 from '../assets/b12.jpg'
import b13 from '../assets/b13.png'

const brands = [
    { name: "Ambuja Cement", logo: b1 },
    { name: "Asian Paints", logo: b2 },
    { name: "UltraTech", logo: b3 },
    { name: "JSW Steel", logo: b4 },
    { name: "Berger Paints", logo: b5 },
    { name: "Kajaria", logo: b6 },
    { name: "Supreme", logo: b7 },
    { name: "Ashirvad", logo: b8 },
    { name: "Johnson", logo: b9 },
    { name: "Lavish", logo: b10 },
    { name: "Goodbrick", logo: b11 },
    { name: "HCC", logo: b12 },
    { name: "Sandux", logo: b13 },
]

export function TrustBrands() {
    return (
        <section className="py-16 bg-background overflow-hidden">
            <div className="container mx-auto px-6 mb-10 text-center">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                    Trust Brands
                </h2>
                <div className="w-16 h-1 bg-gold mx-auto mt-4"></div>
            </div>

            <div className="relative w-full flex overflow-hidden">
                {/* Gradients for smooth fade effect at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

                <motion.div
                    className="flex items-center gap-16 pr-16"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity
                    }}
                    style={{ width: "fit-content" }}
                >
                    {/* Double the list for seamless loop */}
                    {[...brands, ...brands].map((brand, index) => (
                        <div
                            key={`${brand.name}-${index}`}
                            className="flex-shrink-0 w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center bg-white/5 rounded-lg p-4"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="max-w-full max-h-full object-contain"
                                onError={(e) => {
                                    // Fallback to text if image fails
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement!.innerText = brand.name;
                                    e.currentTarget.parentElement!.classList.add('font-bold', 'text-xl', 'text-foreground');
                                }}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
