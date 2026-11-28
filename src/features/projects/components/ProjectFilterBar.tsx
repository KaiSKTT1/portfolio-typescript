import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Input } from '../../../shared/components/ui/Input';

interface ProjectFilterBarProps {
    searchQuery: string;
    onSearchChange: (val: string) => void;
    selectedTech: string;
    onSelectTech: (tech: string) => void;
    techStacks: string[];
}

export function ProjectFilterBar({
    searchQuery,
    onSearchChange,
    selectedTech,
    onSelectTech,
    techStacks,
}: ProjectFilterBarProps) {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-2">
                {techStacks.map((tech) => {
                    const isActive = selectedTech === tech;
                    return (
                        <button
                            key={tech}
                            onClick={() => onSelectTech(tech)}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${isActive
                                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                                }`}
                        >
                            {tech === 'All' ? t('projects.all') : tech}
                        </button>
                    );
                })}
            </div>

            <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <Input
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder={t('projects.searchPlaceholder')}
                    className="pl-10"
                />
            </div>
        </div>
    );
}
