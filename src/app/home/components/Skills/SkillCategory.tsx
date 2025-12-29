interface SkillCategoryData {
    title: string;
    icon: string;
    skills: string[];
}

interface SkillCategoryProps {
    category: SkillCategoryData;
    theme: string;
}

export function SkillCategory({ category, theme }: SkillCategoryProps) {
    const isDark = theme === 'dark';

    return (
        <div className="card group h-full">
            <div className="card-glow"></div>

            {/* Category Header */}
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-text/10">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="heading-secondary text-left">{category.title}</h3>
            </div>

            {/* Skills List */}
            <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                    <span
                        key={index}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 ${isDark
                            ? 'bg-primary-950/30 text-primary-400 border border-primary-500/30 hover:bg-primary-500/10 hover:border-primary-400/50'
                            : 'bg-primary-500/10 text-text border border-primary-600/30 hover:bg-primary-500/20 hover:border-primary-600/50'
                            }`}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
