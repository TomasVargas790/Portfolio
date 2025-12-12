import { Section } from '../Section';
import { StudyCard } from './StudyCard';

interface Study {
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    description?: string;
}

const studies: Study[] = [
    {
        institution: "Universidad de Buenos Aires",
        degree: "Ingeniería en Sistemas de Información",
        field: "Ingeniería Informática",
        startDate: "2023",
        endDate: "2028",
        description: "Formación integral en ingeniería de software, arquitectura de sistemas y desarrollo de aplicaciones."
    },
    {
        institution: "Escuela Técnica 32 D.E. 14 General José de San Martín",
        degree: "Técnico en Computación",
        field: "Tecnología Informática",
        startDate: "2016",
        endDate: "2022",
        description: "Formación técnica en programación, redes, bases de datos y ciberseguridad. Tecnologías: JavaScript, Python, Node.js, HTML5, CSS, MySQL, Java, PHP, Git."
    },
    {
        institution: "Trailhead by Salesforce",
        degree: "Certificaciones Salesforce",
        field: "Desarrollo Salesforce",
        startDate: "2022",
        endDate: "Presente",
        description: "Certificaciones: Platform Developer I, JavaScript Developer, Platform Foundations, Omnistudio Developer."
    },
];

export function Studies() {
    return (
        <Section
            id="studies"
            title="Educación"
            description="Mi formación académica y certificaciones profesionales"
        >
            {/* Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {studies.map((study, index) => (
                    <StudyCard key={index} study={study} />
                ))}
            </div>
        </Section>
    );
}
