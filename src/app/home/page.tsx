import { Hero } from "./components/Hero";
import { Studies } from "./components/Studies/Studies";
import { Certifications } from "./components/Certifications/Certifications";
import { Experience } from "./components/Experience/Experience";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Projects/Projects";

export function HomePage() {

    return (
        <>

            <Hero />

            <Experience />

            <Studies />

            <Certifications />

            <Projects />

            <Contact />
        </>
    )

}