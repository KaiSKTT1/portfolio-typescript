import { NavLink } from 'react-router-dom';
import { Code2, Moon, Sun, Globe } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { toggleLanguage, toggleTheme } from '../../../store/slices/themeSlice';

const NAV_ITEMS = [
    { to: '/', labelVi: 'Giới thiệu', labelEn: 'About' },
    { to: '/projects', labelVi: 'Dự án', labelEn: 'Projects' },
    { to: '/contact', labelVi: 'Liên hệ', labelEn: 'Contact' },
];

export function Header() {
    const dispatch = useAppDispatch();
    const { mode, language } = useAppSelector((state) => state.theme);

    return (
        <header className="sticky top-0 z-40 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                <NavLink
                    to="/"
                    className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 dark:text-white"
                >
                    <span className="p-2 rounded-xl bg-indigo-600 text-white">
                        <Code2 className="w-5 h-5" />
                    </span>
                    <span>DevPortfolio</span>
                </NavLink>

                <nav className="hidden md:flex items-center gap-1">
                    {NAV_ITEMS.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.to === '/'}
                            className={({ isActive }) =>
                                `px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${isActive
                                    ? 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                                }`
                            }
                        >
                            {language === 'vi' ? item.labelVi : item.labelEn}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => dispatch(toggleLanguage())}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                        title="Switch Language"
                    >
                        <Globe className="w-3.5 h-3.5" />
                        {language.toUpperCase()}
                    </button>

                    <button
                        onClick={() => dispatch(toggleTheme())}
                        className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                        title="Toggle Dark/Light Mode"
                    >
                        {mode === 'dark' ? (
                            <Sun className="w-4 h-4 text-amber-400" />
                        ) : (
                            <Moon className="w-4 h-4 text-slate-700" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden overflow-x-auto border-t border-slate-200/60 dark:border-slate-800/60 px-4 py-2 gap-1">
                {NAV_ITEMS.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.to === '/'}
                        className={({ isActive }) =>
                            `px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${isActive
                                ? 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                                : 'text-slate-600 dark:text-slate-400'
                            }`
                        }
                    >
                        {language === 'vi' ? item.labelVi : item.labelEn}
                    </NavLink>
                ))}
            </div>
        </header>
    );
}


