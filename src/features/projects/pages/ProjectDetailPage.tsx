import { Link, useParams } from 'react-router-dom';
import {
    ArrowLeft,
    Calendar,
    CheckCircle2,
    Code2,
    ExternalLink,
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import { Badge } from '../../../shared/components/ui/Badge';
import { Button } from '../../../shared/components/ui/Button';
import { formatDate } from '../../../shared/utils/formatDate';

export function ProjectDetailPage() {
    const { id } = useParams<{ id: string }>();
    const project = PROJECTS_DATA.find((item) => item.id === id);

    if (!project) {
        return (
            <div className="text-center py-20 space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Không tìm thấy dự án
                </h2>
                <Link to="/projects">
                    <Button variant="outline">Quay lại danh sách dự án</Button>
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
                <span>Quay lại tất cả dự án</span>
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
                        <span>Hoàn thành: {formatDate(project.completedAt)}</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <a href={project.githubUrl} target="_blank" rel="noreferrer">
                            <Button variant="outline" size="sm">
                                <Code2 className="w-4 h-4" />
                                <span>Source Code</span>
                            </Button>
                        </a>
                        {project.liveDemoUrl && (
                            <a href={project.liveDemoUrl} target="_blank" rel="noreferrer">
                                <Button variant="primary" size="sm">
                                    <ExternalLink className="w-4 h-4" />
                                    <span>Xem Live Demo</span>
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
                        1. Bài toán cần giải quyết
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.problemStatement}
                    </p>
                </div>

                <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        2. Giải pháp & Kiến trúc
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.solutionArchitecture}
                    </p>
                </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Điểm nổi bật kỹ thuật
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
