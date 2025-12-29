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
        description: "Simulador interactivo de arena en Canvas. Las partículas tienen física propia: caen y se apilan formando montículos naturales, igual que la arena real.",
        image: "/sand.webp", // Agregá screenshot después
        technologies: ["HTML5 Canvas", "Physics Engine", "Simulation"],
        demoUrl: "https://sand.vargastomas.com",
        //featured: true,
    },
    {
        title: "Space Background",
        description: "Fondo espacial minimalista y eficiente. JS genera las partículas y CSS se encarga del movimiento, logrando un efecto de profundidad infinito consumiendo muy pocos recursos.",
        image: "/space.webp", // Agregá screenshot después
        technologies: ["CSS Animations", "Procedural Generation", "Vanilla JS"],
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
