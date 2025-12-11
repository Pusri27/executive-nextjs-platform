"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/app/lib/data";

export default function Services() {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { currentTarget, clientX, clientY } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        currentTarget.style.setProperty("--mouse-x", `${x}px`);
        currentTarget.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <section id="services" className="py-20 md:py-32 bg-slate-50 relative">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h4 className="text-navy-900 font-bold uppercase tracking-widest text-xs mb-4">Our Expertise</h4>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 leading-tight">
                            Solutions for Comprehensive <br />
                            <span className="text-navy-500">Corporate Excellence</span>
                        </h2>
                    </div>
                    <a href="#" className="flex items-center gap-2 text-navy-900 font-semibold border-b border-navy-900 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors">
                        View All Services <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {SERVICES.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onMouseMove={handleMouseMove}
                                className="group relative bg-white border border-slate-200 p-10 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                            >
                                {/* Spotlight Effect */}
                                <div
                                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0"
                                    style={{
                                        background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(197, 160, 89, 0.15), transparent 40%)`
                                    }}
                                />

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="w-14 h-14 bg-navy-50 rounded-sm flex items-center justify-center group-hover:bg-navy-900 group-hover:scale-110 transition-all duration-500 shadow-md">
                                            <Icon className="w-7 h-7 text-navy-900 group-hover:text-gold-400 transition-colors duration-500" />
                                        </div>
                                        <span className="text-slate-300 font-serif text-5xl opacity-20 group-hover:opacity-10 transition-opacity">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed group-hover:translate-x-2 transition-transform duration-300 delay-75">
                                        {service.description}
                                    </p>

                                    <div className="mt-8 pt-8 border-t border-slate-100 group-hover:border-gold-500/30 transition-colors duration-500 flex justify-end">
                                        <div className="p-2 rounded-full border border-slate-200 group-hover:bg-gold-500 group-hover:border-gold-500 group-hover:text-white transition-all duration-300 transform group-hover:rotate-45 shadow-sm">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
