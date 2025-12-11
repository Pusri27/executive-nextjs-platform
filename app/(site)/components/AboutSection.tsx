"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { STATS } from "@/app/lib/data";

export default function AboutSection() {
    return (
        <section id="about" className="py-20 md:py-32 bg-navy-900 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-navy-800/30 -skew-x-[20deg] opacity-50 z-0 pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative group"
                    >
                        <div className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl skew-x-2 border border-white/5">
                            {/* Grayscale image placeholder - using a gradient for now as no real image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-600 group-hover:scale-105 transition-transform duration-700 ease-out" />
                            <div className="absolute inset-0 bg-navy-900/40 mix-blend-multiply" />
                            <div className="absolute font-serif text-9xl text-white/5 font-bold bottom-4 right-4 leading-none select-none">
                                25<span className="text-4xl align-top text-gold-500">+</span>
                            </div>
                        </div>
                        {/* Decorative Frame */}
                        <div className="absolute -bottom-6 -left-6 w-full h-[500px] border border-gold-500/30 rounded-sm -z-10 skew-x-2" />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <h4 className="text-gold-400 font-bold uppercase tracking-widest text-xs mb-4">About Lumina</h4>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-50 mb-6 leading-tight">
                            A Legacy of <br /><span className="text-slate-500">Transformative Leadership</span>
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed mb-8">
                            For over two decades, Lumina has been the silent architect behind some of the world's most significant corporate transformations. We don't just advise; we partner with you to embed resilience, agility, and innovation into the very DNA of your organization.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-gold-500 w-5 h-5 flex-shrink-0" />
                                <span className="text-slate-200">Global Strategic Network</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-gold-500 w-5 h-5 flex-shrink-0" />
                                <span className="text-slate-200">Data-Driven Methodologies</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-gold-500 w-5 h-5 flex-shrink-0" />
                                <span className="text-slate-200">C-Suite Trusted Adivsors</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-gold-500 w-5 h-5 flex-shrink-0" />
                                <span className="text-slate-200">Sustainable Growth Focus</span>
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
                            {STATS.map((stat, i) => (
                                <div key={i}>
                                    <div className="text-2xl md:text-3xl font-serif font-bold text-slate-50 mb-1">{stat.value}</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wide">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
