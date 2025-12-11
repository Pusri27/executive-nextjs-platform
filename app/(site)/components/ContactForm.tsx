"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        company: "",
        role: "",
        interest: "Strategy",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-slate-50">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Info Column */}
                    <div className="lg:w-1/3">
                        <h4 className="text-navy-900 font-bold uppercase tracking-widest text-xs mb-4">Get in Touch</h4>
                        <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">Let's Discuss Your Vision</h2>
                        <p className="text-slate-600 mb-12 leading-relaxed">
                            Reach out to schedule a preliminary consultation with our senior partners. We look forward to understanding your unique challenges.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <MapPin className="text-navy-900 w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-navy-900 font-bold mb-1">Global Headquarters</h4>
                                    <p className="text-slate-600 text-sm">10 Hudson Yards, Suite 3200<br />New York, NY 10001, USA</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Mail className="text-navy-900 w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-navy-900 font-bold mb-1">Email Us</h4>
                                    <p className="text-slate-600 text-sm">contact@lumina.com<br />careers@lumina.com</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Phone className="text-navy-900 w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-navy-900 font-bold mb-1">Call Us</h4>
                                    <p className="text-slate-600 text-sm">+1 (212) 555-0123<br />Mon-Fri, 9am - 6pm EST</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="lg:w-2/3">
                        <form className="bg-white p-8 md:p-12 rounded-sm shadow-xl border border-slate-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-bold text-navy-900 uppercase tracking-wide mb-2">Full Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:outline-none focus:border-gold-500 transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold text-navy-900 uppercase tracking-wide mb-2">Work Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:outline-none focus:border-gold-500 transition-colors" placeholder="john@company.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="company" className="block text-xs font-bold text-navy-900 uppercase tracking-wide mb-2">Company</label>
                                    <input type="text" id="company" name="company" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:outline-none focus:border-gold-500 transition-colors" placeholder="Company Inc." />
                                </div>
                                <div>
                                    <label htmlFor="role" className="block text-xs font-bold text-navy-900 uppercase tracking-wide mb-2">Role / Title</label>
                                    <input type="text" id="role" name="role" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:outline-none focus:border-gold-500 transition-colors" placeholder="CEO, CTO, etc." />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="interest" className="block text-xs font-bold text-navy-900 uppercase tracking-wide mb-2">Area of Interest</label>
                                <select id="interest" name="interest" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:outline-none focus:border-gold-500 transition-colors cursor-pointer">
                                    <option>Corporate Strategy</option>
                                    <option>Digital Transformation</option>
                                    <option>Organizational Design</option>
                                    <option>Operational Excellence</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="mb-8">
                                <label htmlFor="message" className="block text-xs font-bold text-navy-900 uppercase tracking-wide mb-2">Message</label>
                                <textarea id="message" name="message" rows={4} className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:outline-none focus:border-gold-500 transition-colors" placeholder="How can we help you?" />
                            </div>

                            <button type="button" className="w-full bg-navy-900 text-slate-50 font-bold py-4 rounded-sm hover:bg-navy-800 transition-colors duration-300">
                                Send Message
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
