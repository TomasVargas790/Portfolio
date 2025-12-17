import type { ReactNode } from 'react';

interface SectionProps {
    id: string;
    title: string;
    description: string;
    children: ReactNode;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl';
    headerSpacing?: 'normal' | 'large';
}

export function Section({
    id,
    title,
    description,
    children,
    maxWidth = '6xl',
    headerSpacing = 'normal'
}: SectionProps) {
    const maxWidthClasses = {
        'sm': 'max-w-sm',
        'md': 'max-w-md',
        'lg': 'max-w-lg',
        'xl': 'max-w-xl',
        '2xl': 'max-w-2xl',
        '4xl': 'max-w-4xl',
        '6xl': 'max-w-6xl',
    };

    const headerSpacingClasses = {
        'normal': 'mb-12',
        'large': 'mb-16',
    };

    return (
        <section className="py-20 px-6 snap-start" id={id}>
            <div className={`${maxWidthClasses[maxWidth]} mx-auto`}>
                {/* Section Header */}
                <div className={`text-center ${headerSpacingClasses[headerSpacing]}`}>
                    <h2 className="heading-primary mb-4">
                        {title}
                    </h2>
                    <div className="gradient-divider"></div>
                    <p className="mt-4 text-description max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                {/* Content */}
                {children}
            </div>
        </section>
    );
}
