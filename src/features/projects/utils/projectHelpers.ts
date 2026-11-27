import type { Project, ProjectFilterParams } from '../types';


export function extractUniqueTechStacks(projects: Project[]): string[] {
    const set = new Set<string>();
    projects.forEach((project) => {
        project.techStack.forEach((tech) => set.add(tech));
    });
    return ['All', ...Array.from(set)];
}


export function filterProjects(
    projects: Project[],
    { searchQuery, selectedTech }: ProjectFilterParams
): Project[] {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return projects.filter((project) => {
        const matchesTech =
            selectedTech === 'All' || project.techStack.includes(selectedTech);

        const matchesSearch =
            !normalizedQuery ||
            project.title.toLowerCase().includes(normalizedQuery) ||
            project.shortDescription.toLowerCase().includes(normalizedQuery) ||
            project.techStack.some((t) => t.toLowerCase().includes(normalizedQuery));

        return matchesTech && matchesSearch;
    });
}