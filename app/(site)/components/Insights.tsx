"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { INSIGHTS } from "@/app/lib/data";

export default function Insights() {
    return (
        <section id="insights" className="py-20 md:py-32 bg-slate-50">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div>
                        <h4 className="text-navy-900 font-bold uppercase tracking-widest text-xs mb-4">Thought Leadership</h4>
                        <h2 className="text-4xl font-serif font-bold text-navy-900">Latest Insights</h2>
                    </div>
                    <Link href="#" className="text-navy-900 font-semibold border-b border-navy-900 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors">
                        View All Articles
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {INSIGHTS.map((insight, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col h-full bg-white border border-slate-200 hover:border-gold-400/50 shadow-sm hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden"
                        >
                            {/* Image placeholder */}
                            <div className="h-48 bg-slate-200 relative overflow-hidden">
                                <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-navy-900/0 transition-colors duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-navy-900 text-xs font-bold px-2 py-1 uppercase tracking-wider">
                                    {insight.category}
                                </span>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="text-xs text-slate-500 mb-3">{insight.date}</div>
                                <h3 className="text-xl font-serif font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                                    {insight.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                    {insight.summary}
                                </p>

                                <div className="flex items-center gap-2 text-navy-600 text-sm font-semibold group-hover:text-gold-600 transition-colors">
                                    Read Article <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
