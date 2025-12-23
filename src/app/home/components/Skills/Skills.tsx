import { Section } from '../Section';
import { SkillCategory } from './SkillCategory';

interface SkillCategoryData {
    title: string;
    icon: string;
    skills: string[];
}

const skillCategories: SkillCategoryData[] = [
    {
        title: "Frontend",
        icon: "🎨",
        skills: [
            "React Ecosystem",
            "Next.js",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Bootstrap",
            "Materialize",
        ]
    },
    {
        title: "Backend",
        icon: "⚙️",
        skills: [
            "JavaScript",
            "TypeScript",
            "Node.js",
            "Express",
            "NestJS",
            "PHP",
            "CodeIgniter 3",
        ]
    },
    {
        title: "Salesforce",
        icon: "☁️",
        skills: [
            "Salesforce Platform",
            "APEX",
            "Lightning Web Components (LWC)",
            "Aura",
            "OmniStudio",
            "SOQL",
        ]
    },
    {
        title: "Databases",
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
        title: "Infraestructura",
        icon: "🚀",
        skills: [
            "Docker",
            "Traefik",
            "Nginx",
        ]
    },
    {
        title: "Otros",
        icon: "🛠️",
        skills: [
            "REST APIs",
            "Design Patterns",
            "Third-party Integrations",
            "Git",
        ]
    },
];

export function Skills() {
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
                    <SkillCategory key={index} category={category} />
                ))}
            </div>
        </Section>
    );
}
