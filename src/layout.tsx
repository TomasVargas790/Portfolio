import { Footer } from "./components/Footer";
import { ThemeToggle } from "./components/ThemeToggle";
import { SpaceBackground } from "./components/SpaceBackground";

// Layout principal que envuelve todas las páginas
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen overflow-y-scroll bg-gradient-to-b from-background via-background/95 to-primary-900/5 text-text">
            <SpaceBackground />
            <ThemeToggle />
            {/* Header/Navbar global */}
            {/* <Header /> */}

            {/* Contenido de la página */}
            <div className="relative z-10">
                <main className="container mx-auto">
                    {children}
                </main>

                {/* Footer global */}
                <Footer />
            </div>
        </div>
    );
}
