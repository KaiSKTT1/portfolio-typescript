export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    problemStatement: string;
    solutionArchitecture: string;
    thumbnailUrl: string;
    techStack: string[];
    githubUrl: string;
    liveDemoUrl?: string;
    featured: boolean;
    completedAt: string;
    highlights: string[];
}

export interface ProjectFilterParams {
    searchQuery: string;
    selectedTech: string;
}