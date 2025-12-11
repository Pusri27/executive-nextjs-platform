"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/app/lib/data";

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 md:py-32 bg-navy-900 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-gold-600/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <h4 className="text-gold-400 font-bold uppercase tracking-widest text-xs mb-4">Client Voices</h4>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-50">Trusted by Global Leaders</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-navy-800/50 backdrop-blur-sm border border-white/5 p-8 rounded-sm relative group hover:bg-navy-800 transition-colors duration-300"
                        >
                            <Quote className="absolute top-8 right-8 text-gold-500/20 w-12 h-12 group-hover:text-gold-500/30 transition-colors" />

                            <div className="mb-8 relative z-10">
                                <p className="text-slate-300 text-lg leading-relaxed italic font-serif">
                                    "{testimonial.quote}"
                                </p>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-slate-50 font-bold">{testimonial.author}</span>
                                <span className="text-gold-400 text-sm">{testimonial.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
