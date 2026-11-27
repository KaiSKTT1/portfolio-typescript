import { Layers, ShieldCheck, Zap } from 'lucide-react';
import type { ProfileInfo } from '../types';
import { SectionHeading } from '../../../shared/components/ui/SectionHeading';

interface AboutSectionProps {
    profile: ProfileInfo;
}

const HIGHLIGHTS = [
    {
        icon: Layers,
        title: 'Kiến trúc Feature-based',
        description:
            'Tổ chức code theo từng miền tính năng độc lập (types, data, hooks, utils, components, pages) dễ mở rộng.',
    },
    {
        icon: Zap,
        title: 'Hiệu năng & Trải nghiệm',
        description:
            'Tối ưu hóa render với Custom Hooks, Debounce tìm kiếm và giao diện Dark/Light mode mượt mà.',
    },
    {
        icon: ShieldCheck,
        title: '100% TypeScript Strict',
        description:
            'Mọi cấu trúc dữ liệu và Props đều được định nghĩa kiểu chặt chẽ, hạn chế tối đa lỗi runtime.',
    },
];

export function AboutSection({ profile }: AboutSectionProps) {
    return (
        <section className="py-12 border-t border-slate-200 dark:border-slate-800/80 text-left">
            <SectionHeading
                badge="About Me"
                title="Giới thiệu & Định hướng phát triển"
                subtitle="Câu chuyện của mình và cách mình xây dựng các sản phẩm Frontend chất lượng."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                    {profile.bio.map((paragraph, index) => (
                        <p key={index} className="text-base">
                            {paragraph}
                        </p>
                    ))}
                </div>

                <div className="lg:col-span-5 space-y-4">
                    {HIGHLIGHTS.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title}
                                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/50 flex items-start gap-4"
                            >
                                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                        {item.description}
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
