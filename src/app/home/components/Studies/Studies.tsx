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
        institution: "UBA - Facultad de Ingeniería",
        degree: "Ingeniería en Informática",
        field: "",
        startDate: "2024",
        endDate: "Presente",
        description: "Ciclo Básico Común de Ingeniería en Informática en la Universidad de Buenos Aires."
    },
    {
        institution: "ET N°32 DE 14 - Gral. San Martín",
        degree: "Técnico en Computación",
        field: "",
        startDate: "2017",
        endDate: "2022",
        description: "Formación técnica en programación, redes, bases de datos y ciberseguridad. Tecnologías: JavaScript, Python, Node.js, HTML5, CSS, MySQL, Java, PHP, Git."
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
