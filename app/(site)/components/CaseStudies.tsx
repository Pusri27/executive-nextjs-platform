"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { CASE_STUDIES } from "@/app/lib/data";

export default function CaseStudies() {
    return (
        <section id="case-studies" className="py-20 md:py-32 bg-slate-50">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h4 className="text-navy-900 font-bold uppercase tracking-widest text-xs mb-4">Proven Results</h4>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900">
                            Case Studies
                        </h2>
                    </div>
                    <p className="max-w-md text-slate-600 leading-relaxed">
                        We measure our success by the tangible value we create for our clients. Here are a few examples of our impact.
                    </p>
                </div>

                <div className="space-y-12">
                    {CASE_STUDIES.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col lg:flex-row bg-white border border-slate-200 shadow-md rounded-sm overflow-hidden group hover:shadow-2xl hover:border-gold-300/30 transition-all duration-500"
                        >
                            {/* Visual Side (Placeholder for now) */}
                            <div className="lg:w-2/5 bg-navy-800 relative min-h-[300px] lg:min-h-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-700 opacity-80" />
                                {/* Abstract pattern */}
                                <div className="absolute inset-0 opacity-20"
                                    style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 11px)" }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="text-4xl font-serif font-bold text-white/10 uppercase tracking-widest rotate-[-15deg] group-hover:scale-110 transition-transform duration-700">
                                        Impact
                                    </h3>
                                </div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">Client</div>
                                    <div className="text-white font-serif text-xl">{study.client}</div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-serif font-bold text-navy-900 mb-6 group-hover:text-gold-600 transition-colors">
                                        {study.title}
                                    </h3>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">The Challenge</h4>
                                            <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                                        </div>
                                        <div className="pl-4 border-l-2 border-gold-500">
                                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Our Approach</h4>
                                            <p className="text-slate-600 leading-relaxed italic">{study.approach}</p>
                                        </div>
                                        <div className="bg-navy-50 p-6 rounded-sm border border-navy-100">
                                            <div className="flex items-center gap-2 mb-2">
                                                <TrendingUp className="w-5 h-5 text-green-600" />
                                                <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wide">Key Result</h4>
                                            </div>
                                            <p className="text-navy-900 font-bold text-lg">{study.result}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 flex justify-end">
                                    <button className="flex items-center gap-2 text-navy-900 font-semibold text-sm hover:text-gold-600 transition-colors group/btn">
                                        Read Full Story <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
