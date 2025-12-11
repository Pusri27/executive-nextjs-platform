"use client";

import { motion } from "framer-motion";
import { Factory, Stethoscope, Zap, Cpu, ShoppingBag, Banknote, Plane, Building2 } from "lucide-react";
import { INDUSTRIES } from "@/app/lib/data";

// Mapping icons from string to Lucide component
const ICON_MAP: Record<string, any> = {
    Bank: Banknote,
    Stethoscope: Stethoscope,
    Zap: Zap,
    Cpu: Cpu,
    ShoppingBag: ShoppingBag,
    Factory: Factory,
    // Fallbacks/Extras
    Plane: Plane,
    Building: Building2,
};

export default function Industries() {
    return (
        <section id="industries" className="py-20 bg-navy-900 border-t border-white/5">
            <div className="container mx-auto px-6 lg:px-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h4 className="text-gold-400 font-bold uppercase tracking-widest text-xs mb-4">Sectors</h4>
                    <h2 className="text-4xl font-serif font-bold text-slate-50">Industries We Serve</h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {INDUSTRIES.map((industry, index) => {
                        const IconComponent = ICON_MAP[industry.icon] || Building2;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group p-6 rounded-sm bg-white/5 border border-white/5 hover:bg-white/10 hover:border-gold-500/30 transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-default"
                            >
                                <div className="text-slate-400 group-hover:text-gold-400 transition-colors duration-300">
                                    <IconComponent size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-slate-300 font-medium text-sm text-center group-hover:text-slate-50 transition-colors">
                                    {industry.name}
                                </h3>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
