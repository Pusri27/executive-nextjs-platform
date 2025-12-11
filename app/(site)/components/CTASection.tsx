"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="py-24 bg-gold-500 relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-white rounded-full mix-blend-overlay blur-[100px]" />
                <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-navy-900 rounded-full mix-blend-overlay blur-[80px]" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6 max-w-3xl mx-auto">
                    Ready to Architect Your Future?
                </h2>
                <p className="text-navy-800 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                    The landscape is changing. Those who adapt lead. Let's define the strategy that keeps you ahead.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="#contact"
                        className="group flex items-center gap-2 px-10 py-4 bg-navy-900 text-slate-50 text-lg font-bold tracking-wide rounded-sm hover:bg-navy-800 transition-all duration-300 shadow-xl"
                    >
                        Start the Conversation
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
