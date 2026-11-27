import { PROJECTS_DATA } from '../data/projectsData';
import { useProjectFilters } from '../hooks/useProjectFilters';
import { SectionHeading } from '../../../shared/components/ui/SectionHeading';
import { Button } from '../../../shared/components/ui/Button';
import { ProjectFilterBar } from '../components/ProjectFilterBar';
import { ProjectCard } from '../components/ProjectCard';

export function ProjectsPage() {
    const {
        searchQuery,
        setSearchQuery,
        selectedTech,
        setSelectedTech,
        techStacks,
        filteredProjects,
        resetFilters,
    } = useProjectFilters(PROJECTS_DATA);

    return (
        <div>
            <SectionHeading
                badge="Portfolio Showcase"
                title="Dự án tiêu biểu"
                subtitle="Các sản phẩm mình đã thiết kế kiến trúc và trực tiếp xây dựng từ con số 0."
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
                        Không tìm thấy dự án nào khớp với bộ lọc hiện tại.
                    </p>
                    <Button variant="outline" size="sm" onClick={resetFilters}>
                        Xoá bộ lọc
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
