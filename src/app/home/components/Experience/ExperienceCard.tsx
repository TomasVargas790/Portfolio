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

interface ExperienceCardProps {
    company: CompanyExperience;
    isLast?: boolean;
}

export function ExperienceCard({ company, isLast }: ExperienceCardProps) {
    return (
        <div className="relative flex gap-6">
            {/* Timeline */}
            <div className="flex flex-col items-center">
                {/* Circle/Dot */}
                <div className="w-4 h-4 rounded-full bg-primary-500 ring-4 ring-background border-2 border-primary-500 z-10 group-hover:scale-125 transition-transform duration-300"></div>
                {/* Vertical Line */}
                {!isLast && (
                    <div className="w-0.5 h-full bg-primary-500/30 mt-2"></div>
                )}
            </div>

            {/* Content Card */}
            <div className="flex-1 pb-12">
                <div className="group bg-background-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 rounded-lg transition-all duration-300 pointer-events-none"></div>

                    <div className="relative z-10">
                        {/* Company Header */}
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-text mb-1">
                                {company.company}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {company.totalStartDate} - {company.totalEndDate}
                            </p>
                        </div>

                        {/* Positions */}
                        <div className="space-y-6">
                            {company.positions.map((position, index) => (
                                <div key={index} className={`${index > 0 ? 'pt-6 border-t border-border/50' : ''}`}>
                                    {/* Position Title */}
                                    <h4 className="text-lg font-semibold text-primary-600 mb-2">
                                        {position.position}
                                    </h4>

                                    {/* Position Dates */}
                                    <p className="text-sm text-muted-foreground mb-3">
                                        {position.startDate} - {position.endDate}
                                    </p>

                                    {/* Description */}
                                    <p className="text-text/80 mb-4 leading-relaxed text-sm">
                                        {position.description}
                                    </p>

                                    {/* Technologies */}
                                    {position.technologies && position.technologies.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {position.technologies.map((tech, techIndex) => (
                                                <Badge key={techIndex} tech={tech} />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Badge({ tech }: { tech: string }) {
    return <span
        className="px-3 py-1 text-sm bg-primary-500/10 text-primary-700 rounded-full border border-primary-500/20"
    >
        {tech}
    </span>
}