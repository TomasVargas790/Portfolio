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
        name: "Salesforce Omnistudio Developer",
        issuer: "Salesforce (Trailhead)",
        date: "2023",
        credentialId: "3485099",
        skills: ["OmniStudio", "Integration Procedures", "DataRaptors", "FlexCards"]
    },
    {
        name: "Salesforce JavaScript Developer I",
        issuer: "Salesforce (Trailhead)",
        date: "2025",
        credentialId: "6913712",
        skills: ["JavaScript", "ES6+", "Web Components", "Lightning"]
    },
    {
        name: "Salesforce Platform Developer I",
        issuer: "Salesforce (Trailhead)",
        date: "2025",
        credentialId: "5864775",
        skills: ["Apex", "SOQL", "Lightning Web Components", "Salesforce"]
    },
    {
        name: "Salesforce Platform Foundations",
        issuer: "Salesforce (Trailhead)",
        date: "2025",
        credentialId: "6990641",
        skills: ["Admin", "Platform", "Product"]
    },
    {
        name: "Agentforce Workshop Hands-on",
        issuer: "Salesforce",
        date: "2025",
        skills: ["Agentforce", "AI", "Salesforce"]
    },
    {
        name: "Backend con Node",
        issuer: "Platzi",
        date: "2025",
        credentialId: "3921c4e5-f51d-4476-8993-2ac2bc6c9b80",
        credentialUrl: "https://platzi.com/p/VargasTomas/learning-path/7048-web-node/diploma/detalle/",
        skills: ["Node.js", "Express", "JavaScript", "ES6+"]
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
