import { Link } from "wouter"
import { Home, ArrowLeft } from "lucide-react"

export function NotFoundPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-2xl mx-auto">
                {/* 404 Image */}
                <div className="flex justify-center mb-6">
                    <img
                        className="w-48 md:w-64 h-auto object-contain"
                        src="/not_found.webp"
                        alt="Not found"
                    />
                </div>

                {/* Glowing 404 Number */}
                <div className="relative mb-8">
                    <h1 className="text-[150px] md:text-[200px] font-bold leading-none">
                        <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 bg-clip-text text-transparent animate-pulse">
                            404
                        </span>
                    </h1>
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 blur-3xl -z-10" />
                </div>

                {/* Message */}
                <div className="space-y-4 mb-12">
                    <h2 className="heading-primary">
                        Página no encontrada
                    </h2>
                    <p className="text-description max-w-md mx-auto">
                        Lo siento, la página que buscas no existe o ha sido movida a otra ubicación.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/">
                        <button className="group relative px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                            <Home className="w-5 h-5" />
                            <span>Volver al inicio</span>
                            <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
