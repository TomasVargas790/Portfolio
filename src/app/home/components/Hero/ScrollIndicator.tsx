'use client';

import { useEffect, useState } from 'react';

export function ScrollIndicator() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            const nearBottom = scrollTop + windowHeight >= documentHeight - 300;

            setIsVisible(!nearBottom);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        // Get all sections on the page
        const sections = document.querySelectorAll('section[id]');

        // Find current section position
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        let currentIndex = -1;

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const sectionBottom = sectionTop + rect.height;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentIndex = index;
            }
        });

        // Scroll to next section
        const nextIndex = currentIndex + 1;
        if (nextIndex < sections.length) {
            sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`fixed z-50 bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer transition-all duration-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
            aria-label="Scroll to next section"
        >
            <svg
                className="w-8 h-8 text-text/40 group-hover:text-primary-500 group-hover:scale-110 transition-all duration-300 drop-shadow-lg"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </button>
    );
}
