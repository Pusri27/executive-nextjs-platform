"use client";

import { motion } from "framer-motion";
import { VALUE_HIGHLIGHTS } from "@/app/lib/data";

export default function ValueHighlights() {
    return (
        <section className="relative z-20 -mt-24 pb-24 px-6 lg:px-12 pointer-events-none">
            <div className="container mx-auto pointer-events-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {VALUE_HIGHLIGHTS.map((item, index) => {
                        const Icon = item.icon;
                        // Bento span logic for first item (optional, keeping uniform for now but styling upscale)
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
                                className="bg-navy-800/40 backdrop-blur-xl border border-white/10 p-8 rounded-sm shadow-2xl hover:bg-navy-800/60 transition-all duration-500 group hover:-translate-y-2"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-gold-500/20 to-transparent rounded-sm border border-gold-500/20 flex items-center justify-center mb-6 group-hover:border-gold-500/50 transition-colors shadow-[0_0_15px_rgba(197,160,89,0.1)]">
                                    <Icon className="w-6 h-6 text-gold-400 group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h3 className="text-xl font-serif font-semibold text-slate-50 mb-3 group-hover:text-gold-200 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
