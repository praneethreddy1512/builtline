"use client";
import React from "react";
import { motion } from "motion/react";

export interface Testimonial {
    text: string;
    image: string;
    name: string;
    role: string;
}

export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: Testimonial[];
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ text, image, name, role }, i) => (
                                <div
                                    className="p-8 rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-300 w-full"
                                    key={i}
                                >
                                    <p className="mb-4 text-muted-foreground leading-relaxed">"{text}"</p>
                                    <div className="flex items-center gap-3">
                                        <img
                                            width={40}
                                            height={40}
                                            src={image}
                                            alt={name}
                                            className="h-10 w-10 rounded-full object-cover border border-border"
                                        />
                                        <div className="flex flex-col">
                                            <div className="font-semibold text-sm tracking-tight">{name}</div>
                                            <div className="text-xs text-muted-foreground">{role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.div>
        </div>
    );
};
