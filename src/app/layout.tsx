import { Footer } from "../components/Footer";

// Layout principal que envuelve todas las páginas
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-primary-900 text-text">
            {/* Header/Navbar global */}
            {/* <Header /> */}

            {/* Contenido de la página */}
            <main className="container mx-auto px-4 py-8">
                {children}
            </main>

            {/* Footer global */}
            <Footer />
        </div>
    );
}
