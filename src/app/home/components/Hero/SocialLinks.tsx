'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiSalesforce, SiLeetcode } from 'react-icons/si';

export function SocialLinks() {
    const links = [
        {
            name: 'GitHub',
            url: 'https://github.com/TomasVargas790',
            icon: FaGithub,
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/tom%C3%A1s-vargas-064406247/',
            icon: FaLinkedin,
        },
        {
            name: 'Trailhead',
            url: 'https://www.salesforce.com/trailblazer/tvargas14',
            icon: SiSalesforce,
        },
        {
            name: 'LeetCode',
            url: 'https://leetcode.com/u/ElTomatote/',
            icon: SiLeetcode,
        },
    ];

    return (
        <div className="flex gap-4 justify-center md:justify-start">
            {links.map((link) => {
                const Icon = link.icon;
                return (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${link.name} profile`}
                        className="group relative p-3 rounded-full border border-border bg-background-card/50 hover:bg-background-card hover:border-primary-500/50 transition-all duration-300 hover:scale-110"
                    >
                        <Icon className="w-6 h-6 text-text/60 group-hover:text-primary-500 transition-colors duration-300" />

                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 rounded-full bg-primary-500/0 group-hover:bg-primary-500/10 blur-md transition-all duration-300 -z-10"></div>
                    </a>
                );
            })}
        </div>
    );
}
