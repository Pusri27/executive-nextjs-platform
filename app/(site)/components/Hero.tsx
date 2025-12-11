"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { HERO_CONTENT, STATS } from "@/app/lib/data";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Text Reveal Logic
    const revealVar = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2 + i * 0.1,
                duration: 1,
                ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
            },
        }),
    };

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden bg-navy-900 flex items-center justify-center">
            {/* Cinematic Background */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                {/* Deep Atmospheric Base */}
                <div className="absolute inset-0 bg-[#0a192f]" />

                {/* Animated Aurora Gradients */}
                <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] bg-[#1E3A8A] rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-pulse-slow" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#c5a059] rounded-full mix-blend-screen filter blur-[150px] opacity-20" />
                <div className="absolute top-[20%] right-[20%] w-[40%] h-[40%] bg-[#4c1d95] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-float" />

                {/* Dynamic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-transparent to-navy-900/90 z-10" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
                <motion.div className="max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="inline-block"
                    >
                        <span className="inline-block py-1 px-4 rounded-full bg-white/5 border border-white/10 text-gold-300 text-xs font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(197,160,89,0.1)]">
                            Evolving Business Intelligence
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-slate-50 leading-[1.05] mb-8 tracking-tight perspective-text">
                        {"Architecting the".split(" ").map((word, i) => (
                            <motion.span
                                key={word}
                                custom={i}
                                variants={revealVar}
                                initial="hidden"
                                animate="visible"
                                className="inline-block mr-3 md:mr-5"
                            >
                                {word}
                            </motion.span>
                        ))}
                        <br />
                        <motion.span
                            custom={2}
                            variants={revealVar}
                            initial="hidden"
                            animate="visible"
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 bg-[length:200%_auto] animate-shine"
                        >
                            Future of Enterprise
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="text-lg md:text-2xl text-slate-300/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
                    >
                        {HERO_CONTENT.subheadline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link
                            href="#contact"
                            className="group relative px-8 py-4 bg-gold-500 text-navy-900 text-base font-bold tracking-wide rounded-sm overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                            <span className="relative flex items-center gap-2">
                                {HERO_CONTENT.ctaPrimary}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <Link
                            href="#services"
                            className="group flex items-center gap-2 px-8 py-4 bg-transparent border border-white/10 text-slate-50 text-base font-medium tracking-wide rounded-sm hover:bg-white/5 transition-all duration-300"
                        >
                            {HERO_CONTENT.ctaSecondary}
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1.5 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3"
                >
                    <span className="text-[10px] tracking-[0.3em] uppercase text-slate-500">Explore</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-slate-500/0 via-slate-500 to-slate-500/0 opacity-50" />
                </motion.div>
            </div>
        </section>
    );
}
