import { AnimatedBackground } from './Hero/AnimatedBackground';
import { ProfileImage } from './Hero/ProfileImage';
import { CTAButtons } from './Hero/CTAButtons';
import { ScrollIndicator } from './Hero/ScrollIndicator';

export function Hero() {
    const ctaButtons = [
        { href: '#projects', label: 'Ver Proyectos', variant: 'primary' as const },
        { href: '#contact', label: 'Contacto', variant: 'outline' as const }
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
            <AnimatedBackground />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                    <ProfileImage src="/Tomi.jpg" alt="Tomás Vargas" />

                    {/* Text Content */}
                    <div className="flex flex-col gap-6 text-center md:text-left">
                        <div className="space-y-2">
                            <p className="text-primary-700 font-medium text-lg tracking-wide uppercase">
                                Hola, soy
                            </p>
                            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-text via-primary-600 to-accent-700 bg-clip-text text-transparent whitespace-nowrap pb-2 leading-tight">
                                Tomás Vargas
                            </h1>
                            <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto md:mx-0"></div>
                        </div>

                        <p className="text-2xl md:text-3xl text-text/80 font-light">
                            Full Stack Developer
                        </p>

                        <p className="text-lg text-text/60 max-w-xl leading-relaxed">
                            mis pelotas morenas
                        </p>

                        <CTAButtons buttons={ctaButtons} />
                    </div>
                </div>
            </div>

            <ScrollIndicator />
        </section>
    );
}