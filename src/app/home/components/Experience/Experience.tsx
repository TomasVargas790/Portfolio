import { Section } from '../Section';
import { ExperienceCard } from './ExperienceCard';

interface Position {
    position: string;
    startDate: string;
    endDate: string;
    description?: string;
    technologies?: string[];
}

interface CompanyExperience {
    company: string;
    positions: Position[];
    totalStartDate: string;
    totalEndDate: string;
}

const experience: CompanyExperience[] = [
    {
        company: "bdtglobal",
        totalStartDate: "Sept 2022",
        totalEndDate: "Presente",
        positions: [
            {
                position: "Salesforce Developer Ssr",
                startDate: "Oct 2024",
                endDate: "Presente",
                //description: "Desarrollo de soluciones Salesforce avanzadas implementando Apex, Lightning Web Components, y arquitecturas escalables. Liderazgo técnico en proyectos complejos y mentoría de desarrolladores junior.",
                technologies: ["Salesforce", "Apex", "Lightning Web Components", "SOQL", "JavaScript", "Integration"]
            },
            {
                position: "Salesforce Developer Jr",
                startDate: "Jun 2023",
                endDate: "Sept 2024",
                //description: "Desarrollo de componentes personalizados con Lightning Web Components, implementación de lógica de negocio con Apex, y configuración de flujos automatizados. Integración de sistemas externos vía APIs REST.",
                technologies: ["Salesforce", "Apex", "LWC", "Salesforce Flows", "REST APIs", "SOQL"]
            },
            {
                position: "Salesforce Developer Trainee",
                startDate: "Feb 2023",
                endDate: "May 2023",
                //description: "Aprendizaje y desarrollo en la plataforma Salesforce. Implementación de triggers, clases Apex, y personalización de objetos estándar. Certificación como Salesforce Platform Developer I.",
                technologies: ["Salesforce", "Apex", "Triggers", "SOQL", "Salesforce Admin"]
            },
            {
                position: "Desarrollador Backend",
                startDate: "Sept 2022",
                endDate: "Nov 2022",
                // description: "Desarrollo de APIs RESTful con Node.js y Express. Diseño e implementación de bases de datos relacionales con SQL. Integración de servicios backend con aplicaciones frontend.",
                // technologies: ["Node.js", "SQL", "Express.js", "REST APIs", "PostgreSQL", "Git"]
            },
        ]
    },
];

export function Experience() {
    return (
        <Section
            id="experience"
            title="Experiencia"
            description="Mi trayectoria profesional en desarrollo de software"
            maxWidth="4xl"
            headerSpacing="large"
        >
            {/* Experience Timeline */}
            <div className="relative">
                {experience.map((company, index) => (
                    <ExperienceCard
                        key={index}
                        company={company}
                        isLast={index === experience.length - 1}
                    />
                ))}
            </div>
        </Section>
    );
}
