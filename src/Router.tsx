import { Router, Route } from "wouter"
import { HomePage } from "./app/home/page"
import { ContactPage } from "./app/contact/page"

export default function AppRouter() {
    return (
        <Router>
            <Route path="/" component={HomePage} />
            <Route path="/contact" component={ContactPage} />
        </Router>
    )
}