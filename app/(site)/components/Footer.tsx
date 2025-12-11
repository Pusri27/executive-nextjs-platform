"use client";

import Link from "next/link";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { NAV_LINKS } from "@/app/lib/data";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy-900 border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-sm flex items-center justify-center">
                                <span className="text-navy-900 font-serif font-bold text-lg">L</span>
                            </div>
                            <span className="text-2xl font-serif font-bold text-slate-50 tracking-wide">
                                Lumina
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Empowering global enterprises with visionary strategy and transformative growth.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-gold-400 hover:bg-white/10 transition-colors">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-gold-400 hover:bg-white/10 transition-colors">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-slate-50 font-serif font-semibold mb-6">Company</h4>
                        <ul className="space-y-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-slate-400 hover:text-gold-400 text-sm transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-slate-50 font-serif font-semibold mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-slate-400 hover:text-gold-400 text-sm transition-colors">Corporate Strategy</Link></li>
                            <li><Link href="#" className="text-slate-400 hover:text-gold-400 text-sm transition-colors">Digital Transformation</Link></li>
                            <li><Link href="#" className="text-slate-400 hover:text-gold-400 text-sm transition-colors">Risk Management</Link></li>
                            <li><Link href="#" className="text-slate-400 hover:text-gold-400 text-sm transition-colors">Sustainability</Link></li>
                            <li><Link href="#" className="text-slate-400 hover:text-gold-400 text-sm transition-colors">M&A Advisory</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-slate-50 font-serif font-semibold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li>
                                <span className="block text-slate-500 text-xs uppercase tracking-wider mb-1">Headquarters</span>
                                10 Hudson Yards, Suite 3200<br />New York, NY 10001
                            </li>
                            <li>
                                <span className="block text-slate-500 text-xs uppercase tracking-wider mb-1">Email</span>
                                <a href="mailto:contact@lumina.com" className="hover:text-gold-400 transition-colors">contact@lumina.com</a>
                            </li>
                            <li>
                                <span className="block text-slate-500 text-xs uppercase tracking-wider mb-1">Phone</span>
                                <a href="tel:+12125550123" className="hover:text-gold-400 transition-colors">+1 (212) 555-0123</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-xs">
                        &copy; {currentYear} Lumina Consulting Group. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Terms of Service</Link>
                        <Link href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
