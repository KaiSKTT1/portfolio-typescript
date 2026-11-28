import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { PROJECTS_DATA } from '../data/projectsData';
import { useProjectFilters } from '../hooks/useProjectFilters';
import { localizeProject } from '../utils/projectHelpers';
import { SectionHeading } from '../../../shared/components/ui/SectionHeading';
import { Button } from '../../../shared/components/ui/Button';
import { ProjectFilterBar } from '../components/ProjectFilterBar';
import { ProjectCard } from '../components/ProjectCard';

export function ProjectsPage() {
    const { t } = useTranslation();
    const localizedProjects = useMemo(
        () => PROJECTS_DATA.map((project) => localizeProject(project, (key) => t(key))),
        [t]
    );
    const {
        searchQuery,
        setSearchQuery,
        selectedTech,
        setSelectedTech,
        techStacks,
        filteredProjects,
        resetFilters,
    } = useProjectFilters(localizedProjects);

    return (
        <div>
            <SectionHeading
                badge={t('projects.heading.badge')}
                title={t('projects.heading.title')}
                subtitle={t('projects.heading.subtitle')}
            />

            <ProjectFilterBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedTech={selectedTech}
                onSelectTech={setSelectedTech}
                techStacks={techStacks}
            />

            {filteredProjects.length === 0 ? (
                <div className="text-center py-16 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 space-y-4">
                    <p className="text-slate-500 dark:text-slate-400">
                        {t('projects.noResults')}
                    </p>
                    <Button variant="outline" size="sm" onClick={resetFilters}>
                        {t('projects.clearFilters')}
                    </Button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            )}
        </div>
    );
}
