interface SkillCategoryData {
    title: string;
    icon: string;
    skills: string[];
}

interface SkillCategoryProps {
    category: SkillCategoryData;
}

export function SkillCategory({ category }: SkillCategoryProps) {
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
                        className="px-3 py-1.5 rounded-md text-sm font-medium bg-text/5 text-text/80 border border-text/10 transition-all duration-200 hover:bg-text/10 hover:border-text/20 hover:text-text hover:scale-[1.02]"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
