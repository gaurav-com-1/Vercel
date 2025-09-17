'use client'; // This is the interactive part, so it stays a Client Component.

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const initialFormData = {
    name: '',
    phone: '',
    email: '',
    message: '',
};

type FormStatus = 'idle' | 'submitting' | 'success';

// We rename the component to be more descriptive
export default function ContactFormWrapper() {
    const [formData, setFormData] = useState(initialFormData);
    const [status, setStatus] = useState<FormStatus>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
        setFormData(initialFormData);
        setTimeout(() => setStatus('idle'), 5000);
    };

    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    };

    return (
        <div className="bg-primary py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="uppercase tracking-wider">Contact Us</h1>
                    <p className="mt-4 max-w-2xl mx-auto">
                        If you have any questions, please feel free to get in touch with us via phone, email, or the form below.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3 bg-secondary p-8 rounded-lg border border-border">
                        <h2 className="uppercase">Get In Touch</h2>
                        <div className="mt-6 min-h-[480px]">
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                        <motion.div
                                        key="success"
                                        variants={formVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="flex flex-col items-center justify-center h-full text-center"
                                    >
                                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                                            <FaCheckCircle className="text-4xl text-green-500" />
                                        </div>
                                        <h3 className="mb-2">Message Sent!</h3>
                                        <p>Form submitted, we will reach out to you soon.</p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        variants={formVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        onSubmit={handleSubmit}
                                    >
                                        {/* Form fields... */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium mb-2">NAME</label>
                                                <input value={formData.name} onChange={handleInputChange} type="text" id="name" placeholder="Enter your name*" required className="w-full bg-primary border border-border rounded-lg py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent" />
                                            </div>
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium mb-2">PHONE</label>
                                                <input value={formData.phone} onChange={handleInputChange} type="text" id="phone" placeholder="Enter your phone*" required className="w-full bg-primary border border-border rounded-lg py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent" />
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="email" className="block text-sm font-medium mb-2">EMAIL</label>
                                            <input value={formData.email} onChange={handleInputChange} type="email" id="email" placeholder="Enter your email*" required className="w-full bg-primary border border-border rounded-lg py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent" />
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="message" className="block text-sm font-medium mb-2">MESSAGE</label>
                                            <textarea value={formData.message} onChange={handleInputChange} id="message" rows={6} placeholder="Type your message..." required className="w-full bg-primary border border-border rounded-lg py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
                                        </div>
                                        <div>
                                            <button type="submit" disabled={status === 'submitting'} className="w-full bg-accent text-primary font-bold py-3 px-6 rounded-lg text-lg hover:brightness-110 transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed">
                                                {status === 'submitting' ? (<><FaSpinner className="animate-spin mr-3" />Sending...</>) : ('Send Message')}
                                            </button>
                                        </div>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        <div className="bg-secondary p-8 rounded-lg border border-border">
                            <h2 className="uppercase">Contact Info</h2>
                            <div className="space-y-6 mt-6">
                                <div className="flex items-start gap-4"><div className="bg-primary p-3 rounded-full mt-1"><FaPhone className="text-accent" size={20} /></div><div><h3 className="font-semibold">PHONE</h3><p>(123) 456-7890</p></div></div>
                                <div className="flex items-start gap-4"><div className="bg-primary p-3 rounded-full mt-1"><FaEnvelope className="text-accent" size={20} /></div><div><h3 className="font-semibold">EMAIL</h3><p>contact@invictus.gym</p></div></div>
                                <div className="flex items-start gap-4"><div className="bg-primary p-3 rounded-full mt-1"><FaMapMarkerAlt className="text-accent" size={20} /></div><div><h3 className="font-semibold">ADDRESS</h3><p>M9J4+J3, Kathmandu 44600, Nepal</p></div></div>
                            </div>
                        </div>
                        <div className="bg-secondary p-8 rounded-lg border border-border">
                            <h2 className="uppercase">Business Hours</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-6">
                                <div><h3 className="font-semibold">MON - FRI</h3><p>6 AM - 10 PM</p></div>
                                <div><h3 className="font-semibold">SATURDAY</h3><p>8 AM - 8 PM</p></div>
                                <div><h3 className="font-semibold">SUNDAY</h3><p>8 AM - 6 PM</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <h2 className="text-center mb-8">Find Us <span className="text-accent">Here</span></h2>
                    <div className="overflow-hidden rounded-lg border-2 border-border h-96">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d220.82272235822683!2d85.35503280183518!3d27.68133933217699!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xaa9fd75f7cbdf436!2sM9J4%2BJ3%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1758100937849!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}