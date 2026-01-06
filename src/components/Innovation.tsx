"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function Innovation() {
    return (
        <section className="bg-background overflow-hidden">
            <div className="flex flex-col overflow-hidden">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold text-foreground">
                                Modern Construction Management <br />
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-gold">
                                    Real-Time Insights
                                </span>
                            </h1>
                        </>
                    }
                >
                    <img
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&h=720&fit=crop&q=80"
                        alt="Construction Dashboard"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />
                </ContainerScroll>
            </div>
        </section>
    );
}
