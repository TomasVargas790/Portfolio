import { Section } from '../Section';
import { SkillCategory } from './SkillCategory';
import { useTheme } from '../../../../hooks/useTheme';

interface SkillCategoryData {
    title: string;
    icon: string;
    skills: string[];
}

const skillCategories: SkillCategoryData[] = [
    {
        title: "Lenguajes de Programación",
        icon: "💻",
        skills: [
            "JavaScript",
            "TypeScript",
            "PHP",
            "APEX",
            "HTML5",
            "CSS3",
        ]
    },
    {
        title: "Frontend",
        icon: "🎨",
        skills: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Bootstrap",
            "Materialize",
        ]
    },
    {
        title: "Backend",
        icon: "⚙️",
        skills: [
            "Node.js",
            "Express",
            "NestJS",
            "CodeIgniter 3",
        ]
    },
    {
        title: "Salesforce",
        icon: "☁️",
        skills: [
            "Salesforce Platform",
            "Lightning Web Components (LWC)",
            "Aura",
            "OmniStudio",
            "SOQL",
        ]
    },
    {
        title: "Bases de Datos",
        icon: "🗄️",
        skills: [
            "MySQL",
            "MariaDB",
            "PostgreSQL",
            "MongoDB",
            "Redis",
        ]
    },
    {
        title: "DevOps & Infraestructura",
        icon: "🚀",
        skills: [
            "Docker",
            "Traefik",
            "Nginx",
            "Git",
        ]
    },
    {
        title: "Herramientas & Integraciones",
        icon: "🛠️",
        skills: [
            "REST APIs",
            "Patrones de diseño",
        ]
    },
];

export function Skills() {
    const { theme } = useTheme();

    return (
        <Section
            id="skills"
            title="Stack Tecnológico"
            description="Tecnologías y herramientas con las que trabajo"
            maxWidth="6xl"
        >
            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <SkillCategory key={index} category={category} theme={theme} />
                ))}
            </div>
        </Section>
    );
}
