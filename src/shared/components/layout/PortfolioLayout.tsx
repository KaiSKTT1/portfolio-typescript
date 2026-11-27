import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { toggleLanguage, toggleTheme } from '../../../store/slices/themeSlice';

export function PortfolioLayout() {
  const dispatch = useAppDispatch();
  const { mode, language } = useAppSelector((state) => state.theme);

  // Tự động gắn/gỡ class "dark" vào thẻ <html> mỗi khi mode thay đổi
  useEffect(() => {
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [mode]);

  return (
    <div className="min-h-screen p-10 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <h1 className="text-3xl font-bold mb-4">
        {language === 'vi' ? 'Xin chào từ PortfolioLayout!' : 'Hello from PortfolioLayout!'}
      </h1>

      <p className="mb-6">
        Theme hiện tại: <b>{mode}</b> | Ngôn ngữ: <b>{language.toUpperCase()}</b>
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => dispatch(toggleTheme())}
          className="px-4 py-2 rounded-xl bg-indigo-600 text-white cursor-pointer"
        >
          Đổi Sáng / Tối (Toggle Theme)
        </button>

        <button
          onClick={() => dispatch(toggleLanguage())}
          className="px-4 py-2 rounded-xl border border-slate-400 cursor-pointer"
        >
          Đổi Ngôn ngữ (VI / EN)
        </button>
      </div>
    </div>
  );
}