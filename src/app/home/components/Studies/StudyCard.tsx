interface Study {
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    description?: string;
}

interface StudyCardProps {
    study: Study;
}

export function StudyCard({ study }: StudyCardProps) {
    return (
        <div className="group card card-hover-lift">
            {/* Glow effect on hover */}
            <div className="card-glow"></div>

            <div className="relative z-10">
                {/* Institution */}
                <h3 className="heading-accent mb-2">
                    {study.institution}
                </h3>

                {/* Degree */}
                <h4 className="text-lg font-semibold text-text mb-1">
                    {study.degree}
                </h4>

                {/* Field */}
                <p className="text-text/80 mb-3">
                    {study.field}
                </p>

                {/* Dates */}
                <p className="text-muted mb-3">
                    {study.startDate} - {study.endDate}
                </p>

                {/* Description */}
                {study.description && (
                    <p className="text-subtle">
                        {study.description}
                    </p>
                )}
            </div>
        </div>
    );
}
