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
        <section className="py-20 px-6" id="studies">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
                        Educación
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto"></div>
                    <p className="mt-4 text-lg text-text/60 max-w-2xl mx-auto">
                        Mi formación académica y certificaciones profesionales
                    </p>
                </div>

                {/* Studies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {studies.map((study, index) => (
                        <StudyCard key={index} study={study} />
                    ))}
                </div>
            </div>
        </section>
    );
}
