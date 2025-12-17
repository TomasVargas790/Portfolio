import { Section } from '../Section';
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
        name: "OmniStudio Developer",
        issuer: "Salesforce",
        date: "2023",
        credentialId: "3485099",
        skills: ["OmniStudio", "Integration Procedures", "DataRaptors", "FlexCards"]
    },
    {
        name: "Backend con Node.js",
        issuer: "Platzi",
        date: "2025",
        credentialId: "3921c4e5-f51d-4476-8993-2ac2bc6c9b80",
        credentialUrl: "https://platzi.com/p/VargasTomas/learning-path/7048-web-node/diploma/detalle/",
        skills: ["Node.js", "Express", "JavaScript", "ES6+",]
    },
    {
        name: "Platform Developer I",
        issuer: "Salesforce",
        date: "2025",
        credentialId: "5864775",
        skills: ["Apex", "SOQL", "Lightning Web Components", "Salesforce"]
    },
    {
        name: "JavaScript Developer I",
        issuer: "Salesforce",
        date: "2025",
        credentialId: "6913712",
        skills: ["JavaScript", "ES6+", "Web Components", "Lightning"]
    },
    {
        name: "Salesforce Certified Platform Foundations",
        issuer: "Salesforce",
        date: "2025",
        credentialId: "6990641",
        skills: ["Admin", "Platform", "Product"]
    },
];

export function Certifications() {
    return (
        <Section
            id="certifications"
            title="Certificaciones"
            description="Certificaciones profesionales que validan mis habilidades técnicas"
        >
            {/* Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((certification, index) => (
                    <CertificationCard key={index} certification={certification} />
                ))}
            </div>
        </Section>
    );
}
