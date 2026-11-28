import { Layers, ShieldCheck, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../../../shared/components/ui/SectionHeading';

const HIGHLIGHTS = [
    {
        icon: Layers,
        titleKey: 'about.highlights.architecture.title',
        descriptionKey: 'about.highlights.architecture.description',
    },
    {
        icon: Zap,
        titleKey: 'about.highlights.performance.title',
        descriptionKey: 'about.highlights.performance.description',
    },
    {
        icon: ShieldCheck,
        titleKey: 'about.highlights.typescript.title',
        descriptionKey: 'about.highlights.typescript.description',
    },
];

export function AboutSection() {
    const { t } = useTranslation();

    return (
        <section className="py-12 border-t border-slate-200 dark:border-slate-800/80 text-left">
            <SectionHeading
                badge={t('about.badge')}
                title={t('about.title')}
                subtitle={t('about.subtitle')}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                    {[0, 1, 2].map((index) => (
                        <p key={index} className="text-base">
                            {t(`about.bio.${index}`)}
                        </p>
                    ))}
                </div>

                <div className="lg:col-span-5 space-y-4">
                    {HIGHLIGHTS.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.titleKey}
                                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/50 flex items-start gap-4"
                            >
                                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                                        {t(item.titleKey)}
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                        {t(item.descriptionKey)}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
