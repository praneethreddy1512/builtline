'use client'

import { motion } from 'framer-motion'
import {
    Hammer,
    Settings,
    UserCheck,
    Fingerprint,
    Award,
    Hourglass,
    DollarSign,
    ShieldCheck,
    Eye,
    Headphones,
    ThumbsUp,
    Smile
} from 'lucide-react'

const features = [
    { icon: Hammer, title: "No Subcontractors" },
    { icon: Settings, title: "Process" },
    { icon: UserCheck, title: "Professional Project Management" },
    { icon: Fingerprint, title: "Unique and Modern Design" },
    { icon: Award, title: "Quality" },
    { icon: Hourglass, title: "Adherence To Timeline" },
    { icon: DollarSign, title: "Competitive Pricing" },
    { icon: ShieldCheck, title: "High-Quality Design" },
    { icon: Eye, title: "Transparency" },
    { icon: Headphones, title: "Professional Customer Service" },
    { icon: ThumbsUp, title: "Trustworthy" },
    { icon: Smile, title: "Hassle-Free Service" }
]

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-secondary/50">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4"
                    >
                        Why Choose Builtline
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-24 h-1 bg-gold mx-auto"
                    />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="flex flex-col items-center text-center group cursor-pointer"
                            >
                                <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-background border-2 border-transparent group-hover:border-gold transition-all duration-300 shadow-lg group-hover:shadow-gold/20">
                                    <Icon className="w-10 h-10 text-foreground group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-semibold text-lg text-foreground group-hover:text-gold transition-colors duration-300">
                                    {feature.title}
                                </h3>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
