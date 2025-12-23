import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    demoUrl?: string;
    githubUrl?: string;
    featured?: boolean;
}

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className={`card group ${project.featured ? 'border-2 border-primary-500/50' : ''}`}>
            <div className="card-glow"></div>

            {/* Project Image */}
            <div className="relative overflow-hidden rounded-lg mb-4 aspect-video bg-muted">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {project.featured && (
                    <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold rounded-full">
                        Destacado
                    </div>
                )}
            </div>

            {/* Project Info */}
            <div className="space-y-3">
                <h3 className="heading-secondary">{project.title}</h3>
                <p className="text-subtle">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="badge badge-sm">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-primary"
                        >
                            <FiGithub className="w-4 h-4" />
                            <span>Código</span>
                        </a>
                    )}
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-primary"
                        >
                            <FiExternalLink className="w-4 h-4" />
                            <span>Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
