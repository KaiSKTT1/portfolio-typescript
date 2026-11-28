import type { LocalizedProject, Project, ProjectFilterParams } from '../types';

export function localizeProject(
    project: Project,
    //Tham số translate là một hàm nhận string và trả ra string
    translate: (key: string) => string
): LocalizedProject {
    const key = `projects.items.${project.id}`;

    return {
        ...project,
        title: translate(`${key}.title`),
        shortDescription: translate(`${key}.shortDescription`),
        problemStatement: translate(`${key}.problemStatement`),
        solutionArchitecture: translate(`${key}.solutionArchitecture`),
        highlights: [0, 1, 2].map((index) =>
            translate(`${key}.highlights.${index}`)
        ),
    };
}

export function extractUniqueTechStacks(projects: Project[]): string[] {
    const set = new Set<string>();
    projects.forEach((project) => {
        project.techStack.forEach((tech) => set.add(tech));
    });
    return ['All', ...Array.from(set)];
}


export function filterProjects(
    projects: LocalizedProject[],
    { searchQuery, selectedTech }: ProjectFilterParams
): LocalizedProject[] {
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