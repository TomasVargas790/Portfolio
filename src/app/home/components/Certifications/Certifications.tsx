import { CertificationCard } from './CertificationCard';

interface Certification {
    name: string;
    issuer: string;
    date: string;
    credentialId?: string;
    credentialUrl?: string;
    skills?: string[];
}

const certifications: Certification[] = [
    {
        name: "Platform Developer I",
        issuer: "Salesforce",
        date: "2023",
        credentialId: "23456789",
        credentialUrl: "https://trailhead.salesforce.com/",
        skills: ["Apex", "SOQL", "Lightning Web Components", "Salesforce"]
    },
    {
        name: "JavaScript Developer I",
        issuer: "Salesforce",
        date: "2023",
        credentialUrl: "https://trailhead.salesforce.com/",
        skills: ["JavaScript", "ES6+", "Web Components", "Lightning"]
    },
    {
        name: "Platform App Builder",
        issuer: "Salesforce",
        date: "2023",
        credentialUrl: "https://trailhead.salesforce.com/",
        skills: ["Salesforce Config", "Process Builder", "Flows", "Security"]
    },
    {
        name: "OmniStudio Developer",
        issuer: "Salesforce",
        date: "2023",
        credentialUrl: "https://trailhead.salesforce.com/",
        skills: ["OmniStudio", "Integration Procedures", "DataRaptors", "FlexCards"]
    },
];

export function Certifications() {
    return (
        <section className="py-20 px-6" id="certifications">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
                        Certificaciones
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto"></div>
                    <p className="mt-4 text-lg text-text/60 max-w-2xl mx-auto">
                        Certificaciones profesionales que validan mis habilidades técnicas
                    </p>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((certification, index) => (
                        <CertificationCard key={index} certification={certification} />
                    ))}
                </div>
            </div>
        </section>
    );
}
