// components/ContactSection.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Send, User, MessageCircle } from "lucide-react";

export default function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-10% 0px -10% 0px" });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                throw new Error(result.error || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message. Please try again or email me directly at shahidafrid825@gmail.com');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: MapPin,
            label: "Address",
            value: "India",
            description: "Based in India"
        },
        {
            icon: Mail,
            label: "Email",
            value: "shahidafrid825@gmail.com",
            description: "Send me an email anytime"
        }
    ];

    return (
        <section id="contact" className="min-h-screen py-16 md:py-20 px-4 sm:px-6 bg-[color:var(--bg-900)] relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    {[...Array(80)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-[color:var(--color-primary)] rounded-full"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                scale: [0.3, 1, 0.3],
                                opacity: [0.4, 0.8, 0.4],
                            }}
                            transition={{
                                duration: 2 + Math.random() * 1, // Reduced from 3-5 to 2-3
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: Math.random() * 0.5, // Reduced from 2 to 0.5
                            }}
                        />
                    ))}
                </div>

                {/* Message/Send Icons Animation */}
                {[...Array(18)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute ${i % 3 === 0 ? 'text-[color:var(--color-primary)]' :
                            i % 3 === 1 ? 'text-[color:var(--color-secondary)]' :
                                'text-[color:var(--color-accent)]'
                            } opacity-15`}
                        style={{
                            top: `${15 + (i * 12) % 75}%`,
                            left: `${8 + (i * 18) % 82}%`,
                        }}
                        animate={{
                            y: [0, -25, 0],
                            x: [0, 15, 0],
                            rotate: [0, 180, 360],
                            scale: [0.8, 1.1, 0.8],
                        }}
                        transition={{
                            duration: 6 + (i * 1), // Reduced duration
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3, // Reduced delay
                        }}
                    >
                        {i % 3 === 0 ? <MessageCircle className="w-5 h-5" /> :
                            i % 3 === 1 ? <Mail className="w-5 h-5" /> :
                                <Send className="w-5 h-5" />}
                    </motion.div>
                ))}

                {/* Floating Circles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute rounded-full ${i % 3 === 0
                            ? 'bg-[color:var(--color-primary)]'
                            : i % 3 === 1
                                ? 'bg-[color:var(--color-secondary)]'
                                : 'bg-[color:var(--color-accent)]'
                            }`}
                        style={{
                            width: `${15 + (i * 8)}px`,
                            height: `${15 + (i * 8)}px`,
                            top: `${20 + (i * 15) % 65}%`,
                            left: `${15 + (i * 20) % 80}%`,
                            opacity: 0.04, // Slightly increased opacity
                        }}
                        animate={{
                            y: [0, -20, 0],
                            x: [0, 15, 0],
                            scale: [1, 1.15, 1],
                        }}
                        transition={{
                            duration: 8 + i * 1.5, // Reduced duration
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5, // Reduced delay
                        }}
                    />
                ))}

                {/* Gradient Orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4  w-64 h-64 bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] rounded-full opacity-7 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[color:var(--color-secondary)] to-[color:var(--color-accent)] rounded-full opacity-7 blur-3xl"
                    animate={{
                        scale: [1.1, 1, 1.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-[color:var(--text)]">Get in </span>
                        <span className="text-[color:var(--color-primary)]">Touch</span>
                    </h2>
                    <p className="text-[color:var(--muted)] text-base md:text-lg max-w-2xl mx-auto px-4">
                        Ready to bring your ideas to life? Let's discuss your project and explore how we can work together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Left Side - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="card-glass p-6 md:p-8 rounded-2xl glow-container">
                            <h3 className="text-2xl font-bold text-[color:var(--text)] mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] rounded-lg flex items-center justify-center">
                                    <MessageCircle className="w-5 h-5 text-white" />
                                </div>
                                Contact Info
                            </h3>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                        className="flex items-start gap-4 p-4 rounded-xl bg-[color:var(--bg-800)]/50 hover:bg-[color:var(--bg-700)] transition-all duration-300 group cursor-pointer"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <info.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[color:var(--text)] mb-1">{info.label}</h4>
                                            <p className="text-[color:var(--color-primary)] font-medium text-lg mb-1">{info.value}</p>
                                            <p className="text-[color:var(--muted)] text-sm">{info.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Quick Email Button */}
                            <motion.a
                                href="mailto:shahidafrid825@gmail.com"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="w-full mt-6 btn-neon inline-flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Mail className="w-5 h-5" />
                                Send Quick Email
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Side - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="card-glass p-6 md:p-8 rounded-2xl glow-container"
                    >
                        <h3 className="text-2xl font-bold text-[color:var(--text)] mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] rounded-lg flex items-center justify-center">
                                <Send className="w-5 h-5 text-white" />
                            </div>
                            Send Message
                        </h3>

                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-8"
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Send className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-[color:var(--text)] mb-2">Message Sent!</h4>
                                <p className="text-[color:var(--muted)]">Thank you for your message. I'll get back to you soon.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.6, delay: 0.5 }}
                                    >
                                        <label className="block text-sm font-medium text-[color:var(--muted)] mb-2">
                                            Your Name
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[color:var(--muted)]" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Enter Your Name"
                                                className="w-full pl-10 pr-4 py-3 bg-[color:var(--bg-800)] border border-[color:var(--border)] rounded-lg text-[color:var(--text)] placeholder-[color:var(--muted)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:border-transparent transition-all duration-300"
                                                required
                                            />
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.6, delay: 0.6 }}
                                    >
                                        <label className="block text-sm font-medium text-[color:var(--muted)] mb-2">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[color:var(--muted)]" />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Enter Your Email ID"
                                                className="w-full pl-10 pr-4 py-3 bg-[color:var(--bg-800)] border border-[color:var(--border)] rounded-lg text-[color:var(--text)] placeholder-[color:var(--muted)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:border-transparent transition-all duration-300"
                                                required
                                            />
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.6, delay: 0.7 }}
                                    >
                                        <label className="block text-sm font-medium text-[color:var(--muted)] mb-2">
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[color:var(--muted)]" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Enter Your Phone Number"
                                                className="w-full pl-10 pr-4 py-3 bg-[color:var(--bg-800)] border border-[color:var(--border)] rounded-lg text-[color:var(--text)] placeholder-[color:var(--muted)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:border-transparent transition-all duration-300"
                                            />
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.6, delay: 0.8 }}
                                    >
                                        <label className="block text-sm font-medium text-[color:var(--muted)] mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Subject"
                                            className="w-full px-4 py-3 bg-[color:var(--bg-800)] border border-[color:var(--border)] rounded-lg text-[color:var(--text)] placeholder-[color:var(--muted)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:border-transparent transition-all duration-300"
                                            required
                                        />
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: 0.9 }}
                                >
                                    <label className="block text-sm font-medium text-[color:var(--muted)] mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project..."
                                        rows={5}
                                        className="w-full px-4 py-3 bg-[color:var(--bg-800)] border border-[color:var(--border)] rounded-lg text-[color:var(--text)] placeholder-[color:var(--muted)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:border-transparent transition-all duration-300 resize-none"
                                        required
                                    />
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: 1.0 }}
                                    className="w-full btn-neon py-4 text-lg font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            >
                                                <Send className="w-5 h-5" />
                                            </motion.div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send it Now
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}