import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode; //ReactNode là kiểu đa dạng
}

export function Button({
    variant = 'primary',
    size = 'md',
    children,//Mặc định reactjs là các thẻ bên trong components
    className,
    ...props //Components Button thực tế
}: ButtonProps) {
    const baseStyles =
        'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary:
            'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/20',
        secondary:
            'bg-slate-800 text-slate-100 hover:bg-slate-700 dark:bg-slate-800 dark:text-slate-100',
        outline:
            'border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60',
        ghost:
            'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-6 py-3 text-base',
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
}
