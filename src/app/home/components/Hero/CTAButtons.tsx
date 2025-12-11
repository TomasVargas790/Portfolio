interface CTAButton {
    href: string;
    label: string;
    variant?: 'primary' | 'outline';
}

interface CTAButtonsProps {
    buttons: CTAButton[];
}

export function CTAButtons({ buttons }: CTAButtonsProps) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
            {buttons.map((button) => (
                <a
                    key={button.href}
                    href={button.href}
                    className={
                        button.variant === 'outline'
                            ? "px-8 py-4 border-2 border-primary-700 hover:bg-primary-500/10 rounded-lg font-semibold text-text transition-all duration-300"
                            : "px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    }
                >
                    {button.label}
                </a>
            ))}
        </div>
    );
}
