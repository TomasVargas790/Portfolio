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
        <div className="group relative bg-background-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 rounded-lg transition-all duration-300"></div>

            <div className="relative z-10">
                {/* Institution */}
                <h3 className="text-xl font-bold text-primary-600 mb-2">
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
                <p className="text-sm text-muted-foreground mb-3">
                    {study.startDate} - {study.endDate}
                </p>

                {/* Description */}
                {study.description && (
                    <p className="text-sm text-text/60 leading-relaxed">
                        {study.description}
                    </p>
                )}
            </div>
        </div>
    );
}
