interface SectionHeadingProps {
    badge?: string;
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export function SectionHeading({
    badge,
    title,
    subtitle,
    centered = false,
}: SectionHeadingProps) {
    return (
        <div className={centered ? 'text-center max-w-2xl mx-auto mb-12' : 'mb-10'}>
            {badge && (
                <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    {badge}
                </span>
            )}
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
}