import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { ProfileInfo } from '../types';
import { Button } from '../../../shared/components/ui/Button';
import { ResumeDownloadButton } from './ResumeDownloadButton';

interface HeroSectionProps {
    profile: ProfileInfo;
}

export function HeroSection({ profile }: HeroSectionProps) {
    const { t } = useTranslation();
    const stats = [
        {
            label: t('home.stats.directionLabel'),
            value: t('home.stats.directionValue'),
        },
        {
            label: t('home.stats.coreStackLabel'),
            value: t('home.stats.coreStackValue'),
        },
    ];

    return (
        <section className="py-6 sm:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-6 text-left">
                    <div className="space-y-3">
                        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                            <Sparkles className="w-4 h-4" />
                            {t('home.role')}
                        </p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                            {t('home.greeting')}{' '}
                            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                {profile.fullName}
                            </span>
                        </h1>
                    </div>

                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                        {t('home.tagline')}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <MapPin className="w-4 h-4 text-indigo-500" />
                        <span>{t('home.location')}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <Link to="/projects">
                            <Button variant="primary" size="lg">
                                <span>{t('home.viewProjects')}</span>
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <ResumeDownloadButton resumeUrl={profile.resumeUrl} />
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur-2xl" />
                        <div className="relative w-56 sm:w-64 aspect-[3/4] rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-2xl bg-slate-900">
                            <img
                                src={profile.avatarUrl}
                                alt={profile.fullName}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
