import { Code, Globe, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PROFILE_DATA } from '../../../features/about/data/profileData';

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    {t('footer.builtWith', {
                        year: new Date().getFullYear(),
                        name: PROFILE_DATA.fullName,
                    })}
                </p>

                <div className="flex items-center gap-3">
                    {PROFILE_DATA.socials.map((item) => (
                        <a
                            key={item.platform}
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            aria-label={item.label}
                        >
                            {item.platform === 'github' && <Code className="w-4 h-4" />}
                            {item.platform === 'linkedin' && <Globe className="w-4 h-4" />}
                            {item.platform === 'email' && <Mail className="w-4 h-4" />}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}