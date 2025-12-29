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
        company: "BDTGlobal",
        totalStartDate: "Feb 2023",
        totalEndDate: "Presente",
        positions: [
            {
                position: "Salesforce Developer Ssr",
                startDate: "Oct 2024",
                endDate: "Presente",
                description: "Desarrollo de sistema de denuncia de siniestros para múltiples ramos. Desarrollo de Web Services en Apex. Capacitación técnica y mentoría de pasantes y trainees. Onboarding e inducción técnica de nuevos miembros del equipo. Soporte y mantenimiento de aplicaciones productivas.",
                technologies: ["APEX", "LWC", "Aura", "OmniStudio", "Salesforce Platform", "REST APIs"]
            },
            {
                position: "Salesforce Developer Jr",
                startDate: "Jun 2023",
                endDate: "Sep 2024",
                description: "Desarrollo de plataforma pública de cotización de seguros de auto, reutilizando código legacy de consultoría previa. Desarrollo de sistema de cotización especializado para agentes de seguros con múltiples roles y flujos de trabajo. Participación en módulo de excepciones con flujos de aprobación para condiciones especiales de seguros. Implementación de reglas de negocio, persistencia de datos y logging del sistema.",
                technologies: ["APEX", "LWC", "Aura", "OmniStudio", "REST APIs", "SOQL"]
            },
            {
                position: "Salesforce Developer Trainee",
                startDate: "Feb 2023",
                endDate: "May 2023",
                description: "Proyecto de capacitación interna: desarrollo de sistema interno de cotización de seguros de auto. Desarrollo de APIs REST personalizadas con Apex. Integraciones con servicios de terceros (cotización, normalización). Configuración de seguridad de Salesforce usando perfiles y permission sets.",
                technologies: ["APEX", "Salesforce Platform", "REST APIs", "Triggers", "SOQL"]
            },
        ]
    },
    {
        company: "BDTGlobal",
        totalStartDate: "Sep 2022",
        totalEndDate: "Dic 2022",
        positions: [
            {
                position: "Backend Developer (Pasantía)",
                startDate: "Sep 2022",
                endDate: "Dic 2022",
                description: "Desarrollo de portal de pruebas para candidatos de RRHH. Responsable del diseño de base de datos y desarrollo backend.",
                technologies: ["PHP", "MySQL", "React"]
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
