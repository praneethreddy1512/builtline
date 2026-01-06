"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
    {
        text: "BuiltLine transformed our vision into a structural masterpiece. Their attention to detail in the commercial complex project was unmatched.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces",
        name: "Sarah Jenkins",
        role: "Property Developer",
    },
    {
        text: "Safety and efficiency were our top priorities, and BuiltLine delivered on both. The industrial warehouse was completed two weeks ahead of schedule.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
        name: "Michael Chen",
        role: "Logistics Director",
    },
    {
        text: "Our home renovation was seamless. The team was professional, clean, and the craftsmanship is simply beautiful. Highly recommended!",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces",
        name: "Emma Wilson",
        role: "Homeowner",
    },
    {
        text: "As an architect, I appreciate a builder who understands design intent. BuiltLine executed our complex blueprints with precision.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
        name: "David Ross",
        role: "Senior Architect",
    },
    {
        text: "The project management tools they use kept us in the loop every step of the way. No surprises, just excellent results.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
        name: "Lisa Thompson",
        role: "Retail Chain Ops",
    },
    {
        text: "BuiltLine's commitment to sustainable building practices aligns perfectly with our company values. The LEED certification process was smooth.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
        name: "James Carter",
        role: "Sustainability Officer",
    },
    {
        text: "From the initial consultation to the final handover, the professionalism of the entire team was outstanding.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
        name: "Amanda Martinez",
        role: "Facility Manager",
    },
    {
        text: "Complex renovations usually bring headaches, but BuiltLine made it look easy. They solved structural issues we didn't even know we had.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
        name: "Robert Fox",
        role: "Real Estate Investor",
    },
    {
        text: "Top-tier construction firm. They handle large-scale infrastructure projects with the same care as boutique residential builds.",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces",
        name: "John Kim",
        role: "City Planner",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
    return (
        <section id="testimonials" className="bg-background relative py-20 overflow-hidden">
            <div className="container relative z-10 mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-[640px] mx-auto mb-12 text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 mb-6"
                    >
                        <div className="w-12 h-0.5 bg-gold" />
                        <span className="text-sm font-semibold text-gold tracking-wider uppercase">
                            Testimonials
                        </span>
                        <div className="w-12 h-0.5 bg-gold" />
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 text-foreground">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        See why leading developers and homeowners trust BuiltLine with their most important projects.
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={15} className="" />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                </div>
            </div>
        </section>
    );
};
