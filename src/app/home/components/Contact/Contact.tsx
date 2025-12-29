'use client';

import { useState } from 'react';
import { Section } from '../Section';
import { SocialLinks } from '../Hero/SocialLinks';
import { FiMail, FiCopy, FiCheck } from 'react-icons/fi';

export function Contact() {
    const [copied, setCopied] = useState(false);
    const email = 'vargastomas2003@gmail.com';

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Error al copiar:', err);
        }
    };

    return (
        <Section
            id="contact"
            title="Contacto"
            description=""
            maxWidth="4xl"
        >
            <div className="flex flex-col items-center gap-8">
                {/* Email Section */}
                <div className="w-full max-w-2xl">
                    <div className="card group text-center">
                        <div className="card-glow"></div>

                        <h3 className="heading-secondary mb-6">Escribime directamente</h3>

                        {/* Email Display */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 p-4 bg-muted rounded-lg">
                            <div className="flex items-center gap-2">
                                <FiMail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                                <span className="text-sm sm:text-lg font-mono text-text">{email}</span>
                            </div>
                            <button
                                onClick={handleCopyEmail}
                                className="p-2 rounded-md hover:bg-background-card transition-colors flex-shrink-0"
                                aria-label="Copiar email"
                            >
                                {copied ? (
                                    <FiCheck className="w-4 h-4 text-primary-500" />
                                ) : (
                                    <FiCopy className="w-4 h-4 text-text/60 hover:text-primary-500" />
                                )}
                            </button>
                        </div>

                        {/* Mailto Button */}
                        <a
                            href={`mailto:${email}`}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-text bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-primary-500/50 hover:scale-[1.02] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                        >
                            <FiMail className="w-5 h-5 text-primary-400 group-hover:text-primary-300 transition-colors" />
                            <span>Enviar Email</span>
                        </a>
                    </div>
                </div>

                {/* Social Links */}
                <div className="w-full max-w-2xl text-center">
                    <p className="text-description mb-4">O escribime por LinkedIn</p>
                    <div className="flex justify-center">
                        <SocialLinks include={['LinkedIn']} />
                    </div>
                </div>
            </div>
        </Section>
    );
}
