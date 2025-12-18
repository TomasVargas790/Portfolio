import { Footer } from "./components/Footer";
import { ThemeToggle } from "./components/ThemeToggle";

// Layout principal que envuelve todas las páginas
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen overflow-y-scroll snap-y snap-normal bg-gradient-to-b from-background via-background/95 to-primary-900/5 text-text">
            <ThemeToggle />
            {/* Header/Navbar global */}
            {/* <Header /> */}

            {/* Contenido de la página */}
            <main className="container mx-auto">
                {children}
            </main>

            {/* Footer global */}
            <Footer />
        </div>
    );
}
