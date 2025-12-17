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
