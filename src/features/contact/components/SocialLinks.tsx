import { Code, Globe, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/contactData';
import { PROFILE_DATA } from '../../about/data/profileData';

export function SocialLinks() {
  return (
    <div className="space-y-6 text-left">
      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-5">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Thông tin liên hệ trực tiếp
        </h3>

        <div className="space-y-4">
          {CONTACT_INFO.map((info, idx) => (
            <div key={info.label} className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                {idx === 0 && <Mail className="w-4 h-4" />}
                {idx === 1 && <Phone className="w-4 h-4" />}
                {idx === 2 && <MapPin className="w-4 h-4" />}
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {info.label}
                </p>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {info.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Kết nối qua mạng xã hội
        </h3>
        <div className="flex flex-wrap gap-3">
          {PROFILE_DATA.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-indigo-500 transition-colors"
            >
              {social.platform === 'github' && <Code className="w-4 h-4" />}
              {social.platform === 'linkedin' && (
                <Globe className="w-4 h-4" />
              )}
              {social.platform === 'email' && <Mail className="w-4 h-4" />}
              <span>{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
