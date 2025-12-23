import { Hero } from "./components/Hero";
import { Studies } from "./components/Studies/Studies";
import { Certifications } from "./components/Certifications/Certifications";
import { Experience } from "./components/Experience/Experience";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";

export function HomePage() {

    return (
        <>

            <Hero />

            <Experience />

            <Skills />

            <Studies />

            <Certifications />

            <Projects />

            <Contact />
        </>
    )

}