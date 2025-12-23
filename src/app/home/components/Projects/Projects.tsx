import { Section } from '../Section';
import { ProjectCard } from './ProjectCard';

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    demoUrl?: string;
    githubUrl?: string;
    featured?: boolean;
}

const projects: Project[] = [
    {
        title: "Sand Animation",
        description: "Simulación interactiva de física de arena con renderizado en Canvas. Dibujá con el mouse y observá cómo las partículas caen y se acumulan de forma realista.",
        image: "/sand.webp", // Agregá screenshot después
        technologies: ["HTML5 Canvas", "Vanilla JS", "Physics Engine"],
        demoUrl: "https://sand.vargastomas.com",
        //featured: true,
    },
    {
        title: "Space Background",
        description: "Fondo espacial animado con nebulosas, estrellas y efectos visuales. Animaciones CSS puras combinadas con Canvas API para crear un ambiente cósmico inmersivo.",
        image: "/space.webp", // Agregá screenshot después
        technologies: ["CSS Animations", "Canvas API", "WebGL"],
        demoUrl: "https://space-background.vargastomas.com",
        //featured: true,
    },
];

export function Projects() {
    return (
        <Section
            id="projects"
            title="Proyectos"
            description="Algunos de los proyectos que he desarrollado"
        >
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </Section>
    );
}
