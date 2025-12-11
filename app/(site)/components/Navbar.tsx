"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/app/lib/data";
import clsx from "clsx";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
                isScrolled
                    ? "py-4 bg-navy-900/60 backdrop-blur-xl border-b border-white/5 shadow-2xl"
                    : "py-6 bg-transparent"
            )}
        >
            <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-sm flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500 shadow-lg shadow-gold-500/20">
                        <span className="text-navy-900 font-serif font-bold text-xl -rotate-0 group-hover:-rotate-45 transition-transform duration-500">L</span>
                    </div>
                    <span className="text-2xl font-serif font-bold text-slate-50 tracking-wide group-hover:text-gold-300 transition-colors">
                        Lumina
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8 bg-white/5 px-8 py-3 rounded-full border border-white/5 backdrop-blur-md">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={clsx(
                                "text-xs font-semibold tracking-widest uppercase transition-all duration-300",
                                "text-slate-400 hover:text-white relative group"
                            )}
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:block">
                    <Link
                        href="#contact"
                        className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-bold tracking-wide rounded-sm overflow-hidden hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 hover:shadow-[0_0_20px_rgba(197,160,89,0.4)]"
                    >
                        Schedule a Call
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-slate-50 p-2 hover:bg-white/10 rounded-full transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden fixed inset-0 top-[80px] bg-navy-900/95 backdrop-blur-xl z-40 overflow-y-auto border-t border-white/10"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8 pb-32">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-3xl font-serif text-slate-50 hover:text-gold-400 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                className="mt-8 px-8 py-3 bg-gold-500 text-navy-900 text-lg font-bold rounded-sm hover:bg-gold-400 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Schedule a Call
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
