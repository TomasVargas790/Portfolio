import { Router, Route } from "wouter"
import { HomePage } from "./app/home/page"
import { ContactPage } from "./app/contact/page"
import RootLayout from "./app/layout"

export default function AppRouter() {
    return (
        <RootLayout>
            <Router>
                <Route path="/" component={HomePage} />
                <Route path="/contact" component={ContactPage} />
            </Router>
        </RootLayout>
    )
}