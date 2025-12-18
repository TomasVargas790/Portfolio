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

// Proyectos placeholder - reemplazá con tus proyectos reales
const projects: Project[] = [
    {
        title: "Proyecto E-Commerce",
        description: "Plataforma de comercio electrónico completa con carrito de compras, pagos y panel de administración.",
        image: "/projects/ecommerce.jpg", // Agregá tus imágenes en /public/projects/
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com/TomasVargas790/project",
        featured: true,
    },
    {
        title: "App de Gestión",
        description: "Sistema de gestión empresarial con dashboard, reportes y automatización de procesos.",
        image: "/projects/management.jpg",
        technologies: ["Next.js", "TypeScript", "Prisma", "TailwindCSS"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com/TomasVargas790/project",
    },
    {
        title: "API RESTful",
        description: "API robusta con autenticación JWT, documentación Swagger y tests automatizados.",
        image: "/projects/api.jpg",
        technologies: ["Node.js", "Express", "MongoDB", "Docker"],
        githubUrl: "https://github.com/TomasVargas790/project",
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
