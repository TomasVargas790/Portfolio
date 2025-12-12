interface Certification {
    name: string;
    issuer: string;
    date: string;
    credentialId?: string;
    credentialUrl?: string;
    skills?: string[];
}

interface CertificationCardProps {
    certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
    return (
        <div className="group card card-hover-lift-sm">
            {/* Glow effect on hover */}
            <div className="card-glow"></div>

            <div className="relative z-10">
                {/* Certification Name */}
                <h3 className="heading-secondary mb-2">
                    {certification.name}
                </h3>

                {/* Issuer */}
                <p className="text-primary-600 font-semibold mb-2">
                    {certification.issuer}
                </p>

                {/* Date */}
                <p className="text-muted mb-4">
                    {certification.date}
                </p>

                {/* Credential Info */}
                {certification.credentialId && (
                    <p className="text-xs text-text/60 mb-2">
                        ID: {certification.credentialId}
                    </p>
                )}

                {/* Skills/Technologies */}
                {certification.skills && certification.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {certification.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="badge"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                )}

                {/* View Certificate Link */}
                {certification.credentialUrl && (
                    <a
                        href={certification.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-primary"
                    >
                        <span>Ver Certificado</span>
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </a>
                )}
            </div>
        </div>
    );
}
