import { motion, useInView, animate } from 'framer-motion'
import { Footer } from '../components/Footer'
import { ThemeToggle } from '../components/ThemeToggle'
import { useEffect, useRef } from 'react'

const AnimatedCounter = ({ value }: { value: string }) => {
    const number = parseInt(value)
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    useEffect(() => {
        if (isInView && ref.current) {
            const controls = animate(0, number, {
                duration: 2,
                ease: "easeOut",
                onUpdate(value) {
                    if (ref.current) {
                        ref.current.textContent = Math.floor(value).toString() + "+"
                    }
                }
            })
            return () => controls.stop()
        }
    }, [isInView, number])

    return <span ref={ref} className="text-4xl lg:text-5xl font-bold text-black/10 dark:text-white/20 mb-2 block">0+</span>
}

export function AboutPage() {
    const stats = [
        { number: "70+", label: "Completed Residential Projects", desc: "Successfully completed multiple residential and commercial projects with a focus on quality, safety" },
        { number: "10+", label: "Years of Experiences", desc: "Decades of hands-on experience delivering quality construction projects with proven expertise and reliability." },
        { number: "120+", label: "Happy Clients", desc: "Trusted by satisfied clients through transparent communication, professional service, and consistent project outcomes." },
        { number: "5+", label: "High-Rise", desc: "We have successfully completed five high-rise projects with strong structural integrity and modern architectural design." },
        { number: "110+", label: "Housing Units Built", desc: "We have built high-quality housing units designed for comfortable and secure living." }
    ]

    const expertise = [
        { title: "Construction Excellence", desc: "We specialize in residential, commercial, and industrial construction, delivering projects with precision, durability, and superior craftsmanship." },
        { title: "Professional Project Management", desc: "Our experienced team manages complex projects with transparency, attention to detail, and strict adherence to timelines and budgets." },
        { title: "Quality & Safety Driven", desc: "We follow modern construction techniques, quality materials, and strict safety standards to ensure consistent and reliable outcomes." }
    ]

    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="pt-20">
                {/* Intro Section - Dark Theme */}
                <section className="bg-black text-white py-20 px-6 sm:px-8 lg:px-12">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="grid lg:grid-cols-2 gap-12 items-center"
                        >
                            <div className="space-y-6">
                                <h4 className="text-sm font-bold uppercase tracking-widest mb-2 text-white/80">About Us</h4>
                                <div className="w-16 h-1 bg-white mb-6"></div>
                                <p className="text-lg leading-relaxed text-white/90">
                                    We follow a systematic approach to construction with experienced professionals and skilled workers. Quality control, on-site safety, and customer satisfaction are our top priorities. Our goal is to deliver dependable construction solutions with long-term value.
                                </p>
                                <p className="text-lg leading-relaxed text-white/90">
                                    We provide end-to-end construction services including planning, design coordination, and project execution. Our work emphasizes structural strength, cost efficiency, and adherence to industry standards. Each project is managed carefully to ensure quality delivery within the agreed timeline.
                                </p>
                                <p className="text-lg leading-relaxed text-white/90">
                                    Safety, quality, and customer satisfaction are our top priorities. We ensure every project is managed carefully from start to finish to deliver long-lasting value and dependable results within the agreed timeline.
                                </p>
                            </div>
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                                    alt="Construction Site Review"
                                    className="w-full h-auto rounded-lg shadow-2xl object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="border-l-4 border-gold pl-4"
                                >
                                    <AnimatedCounter value={stat.number} />
                                    <h4 className="font-bold text-lg mb-3">{stat.label}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{stat.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Expertise Section */}
                <section className="py-20 bg-secondary/30">
                    <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
                            <div className="w-16 h-1 bg-gold mb-6"></div>
                            <p className="text-lg text-muted-foreground max-w-4xl">
                                With extensive industry knowledge and a commitment to excellence, we provide reliable and high-quality construction solutions tailored to meet our clients' needs.
                                <br className="mb-2" />
                                Our expertise spans every phase of the construction process, from planning and design to execution and final delivery.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {expertise.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className="bg-background p-8 rounded-xl shadow-lg border border-border/50 hover:border-gold/50 transition-colors duration-300"
                                >
                                    <h3 className="text-xl font-bold mb-4 text-foreground">{item.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
            <ThemeToggle />
        </div>
    )
}
