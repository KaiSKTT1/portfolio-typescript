export interface Project {
    id: string;
    thumbnailUrl: string;
    techStack: string[];
    githubUrl: string;
    liveDemoUrl?: string;
    featured: boolean;
    completedAt: string;
}

export interface LocalizedProject extends Project {
    title: string;
    shortDescription: string;
    problemStatement: string;
    solutionArchitecture: string;
    highlights: string[];
}

export interface ProjectFilterParams {
    searchQuery: string;
    selectedTech: string;
}