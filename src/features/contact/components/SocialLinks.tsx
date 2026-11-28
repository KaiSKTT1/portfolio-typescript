import { Code, Globe, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CONTACT_INFO } from '../data/contactData';
import { PROFILE_DATA } from '../../about/data/profileData';

export function SocialLinks() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6 text-left">
      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-5">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {t('contact.directHeading')}
        </h3>

        <div className="space-y-4">
          {CONTACT_INFO.map((info) => {
            const value = info.value ?? t('contact.info.locationValue');

            return (
            <div key={info.id} className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                {info.id === 'email' && <Mail className="w-4 h-4" />}
                {info.id === 'phone' && <Phone className="w-4 h-4" />}
                {info.id === 'location' && <MapPin className="w-4 h-4" />}
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {t(`contact.info.${info.id}`)}
                </p>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {value}
                  </p>
                )}
              </div>
            </div>
            );
          })}
        </div>
      </div>

      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {t('contact.socialHeading')}
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
