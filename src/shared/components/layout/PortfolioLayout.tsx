import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../store/hooks';
import { Header } from './Header';
import { Footer } from './Footer';


export function PortfolioLayout() {
    const mode = useAppSelector((state) => state.theme.mode);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const root = document.documentElement;
        if (mode === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [mode]);

    //Cập nhật ngôn ngữ trang web
    useEffect(() => {
        document.documentElement.lang = i18n.resolvedLanguage ?? 'vi';
        document.title = t('meta.title');

        const description = document.querySelector<HTMLMetaElement>(
            'meta[name="description"]'
        );
        if (description) {
            description.content = t('meta.description');
        }
    }, [i18n.resolvedLanguage, t]);

    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
            <Header />
            <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-14">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}