import { Link } from 'react-router-dom';
import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react';
import type { Project } from '../types';
import { Badge } from '../../../shared/components/ui/Badge';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 overflow-hidden shadow-sm hover:shadow-xl hover:border-indigo-500/40 transition-all duration-300 flex flex-col text-left">
            <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {project.featured && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-600 text-white shadow">
                        Nổi bật
                    </span>
                )}
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                            <Badge key={tech} variant="accent">
                                {tech}
                            </Badge>
                        ))}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        <Link to={`/projects/${project.id}`}>{project.title}</Link>
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                        {project.shortDescription}
                    </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        >
                            <Code2 className="w-4 h-4" />
                            <span>Source</span>
                        </a>

                        {project.liveDemoUrl && (
                            <a
                                href={project.liveDemoUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                            >
                                <ExternalLink className="w-4 h-4" />
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>

                    <Link
                        to={`/projects/${project.id}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                        <span>Chi tiết</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </article>
    );
}
