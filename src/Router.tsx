import { Router, Route } from "wouter"
import { lazy, Suspense } from "react"
import { HomePage } from "./app/home/page"
import RootLayout from "./layout"

// Lazy load para páginas secundarias
const ContactPage = lazy(() => import("./app/contact/page").then(m => ({ default: m.ContactPage })))
const NotFoundPage = lazy(() => import("./app/not-found/page").then(m => ({ default: m.NotFoundPage })))

export default function AppRouter() {
    return (
        <RootLayout>
            <Router>
                <Route path="/" component={HomePage} />
                <Route path="/contact">
                    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Cargando...</div>}>
                        <ContactPage />
                    </Suspense>
                </Route>
                <Route path="/:rest*">
                    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Cargando...</div>}>
                        <NotFoundPage />
                    </Suspense>
                </Route>
            </Router>
        </RootLayout>
    )
}