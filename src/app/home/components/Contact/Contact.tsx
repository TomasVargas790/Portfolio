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
            description="¿Hablamos de tu próximo proyecto?"
            maxWidth="4xl"
        >
            <div className="flex flex-col items-center gap-8">
                {/* Email Section */}
                <div className="w-full max-w-2xl">
                    <div className="card group text-center">
                        <div className="card-glow"></div>

                        <h3 className="heading-secondary mb-6">Escribime directamente</h3>

                        {/* Email Display */}
                        <div className="flex items-center justify-center gap-3 mb-6 p-4 bg-muted rounded-lg">
                            <FiMail className="w-5 h-5 text-primary-500" />
                            <span className="text-lg font-mono text-text">{email}</span>
                            <button
                                onClick={handleCopyEmail}
                                className="p-2 rounded-md hover:bg-background-card transition-colors"
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
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-medium hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary-500/50"
                        >
                            <FiMail className="w-5 h-5" />
                            Enviar Email
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
