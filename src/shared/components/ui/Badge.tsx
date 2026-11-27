import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
    children: ReactNode;
    variant?: 'default' | 'accent' | 'success';
    className?: string;
    onClick?: () => void;
}

export function Badge({
    children,
    variant = 'default',
    className,
    onClick,
}: BadgeProps) {
    const variants = {
        default:
            'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700',
        accent:
            'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
        success:
            'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    };

    return (
        <span
            onClick={onClick}
            className={cn(
                'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-colors',
                onClick && 'cursor-pointer hover:border-indigo-500',
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
}