import type { InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export function Input({ label, error, className, id, ...props }: InputProps) {
    return (
        <div className="w-full space-y-1.5 text-left">
            {label && (
                <label
                    htmlFor={id}
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                    {label}
                </label>
            )}
            <input
                id={id}
                className={cn(
                    'w-full rounded-xl border bg-white dark:bg-slate-900/80 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all',
                    error
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-300 dark:border-slate-700',
                    className
                )}
                {...props}
            />
            {error && <p className="text-xs text-rose-500">{error}</p>}
        </div>
    );
}