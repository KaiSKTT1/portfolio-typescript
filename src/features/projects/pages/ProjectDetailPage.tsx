import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    ArrowLeft,
    Calendar,
    CheckCircle2,
    Code2,
    ExternalLink,
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import { localizeProject } from '../utils/projectHelpers';
import { Badge } from '../../../shared/components/ui/Badge';
import { Button } from '../../../shared/components/ui/Button';
import { formatDate } from '../../../shared/utils/formatDate';

export function ProjectDetailPage() {
    const { id } = useParams<{ id: string }>();
    const { t, i18n } = useTranslation();
    const projectData = PROJECTS_DATA.find((item) => item.id === id);
    const project = projectData
        ? localizeProject(projectData, (key) => t(key))
        : undefined;
    const dateLocale = i18n.resolvedLanguage === 'en' ? 'en-US' : 'vi-VN';

    if (!project) {
        return (
            <div className="text-center py-20 space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {t('projects.notFound')}
                </h2>
                <Link to="/projects">
                    <Button variant="outline">{t('projects.backToList')}</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8 text-left">
            <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
            >
                <ArrowLeft className="w-4 h-4" />
                <span>{t('projects.backToProjects')}</span>
            </Link>

            <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                    {project.techStack.map((tech) => (
                        <Badge key={tech} variant="accent">
                            {tech}
                        </Badge>
                    ))}
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                    {project.title}
                </h1>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <Calendar className="w-4 h-4" />
                        <span>
                            {t('projects.completed', {
                                date: formatDate(project.completedAt, dateLocale),
                            })}
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <a href={project.githubUrl} target="_blank" rel="noreferrer">
                            <Button variant="outline" size="sm">
                                <Code2 className="w-4 h-4" />
                                <span>{t('projects.source')}</span>
                            </Button>
                        </a>
                        {project.liveDemoUrl && (
                            <a href={project.liveDemoUrl} target="_blank" rel="noreferrer">
                                <Button variant="primary" size="sm">
                                    <ExternalLink className="w-4 h-4" />
                                    <span>{t('projects.liveDemo')}</span>
                                </Button>
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg max-h-96">
                <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {t('projects.problemTitle')}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.problemStatement}
                    </p>
                </div>

                <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {t('projects.solutionTitle')}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.solutionArchitecture}
                    </p>
                </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {t('projects.highlightsTitle')}
                </h3>
                <ul className="space-y-2.5">
                    {project.highlights.map((item) => (
                        <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                        >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
