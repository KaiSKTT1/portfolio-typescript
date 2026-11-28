import { CheckCircle2, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useContactForm } from '../hooks/useContactForm';
import { Input } from '../../../shared/components/ui/Input';
import { Button } from '../../../shared/components/ui/Button';

export function ContactForm() {
  const { t } = useTranslation();
  const {
    values,
    errors,
    isSubmitted,
    setIsSubmitted,
    handleChange,
    handleSubmit,
  } = useContactForm();

  if (isSubmitted) {
    return (
      <div className="p-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 text-center space-y-4">
        <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {t('contact.form.successTitle')}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {t('contact.form.successMessage')}
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsSubmitted(false)}
        >
          {t('contact.form.sendAnother')}
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm space-y-5 text-left"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="senderName"
          label={t('contact.form.nameLabel')}
          placeholder={t('contact.form.namePlaceholder')}
          value={values.senderName}
          onChange={(e) => handleChange('senderName', e.target.value)}
          error={errors.senderName ? t(errors.senderName) : undefined}
        />
        <Input
          id="senderEmail"
          type="email"
          label={t('contact.form.emailLabel')}
          placeholder={t('contact.form.emailPlaceholder')}
          value={values.senderEmail}
          onChange={(e) => handleChange('senderEmail', e.target.value)}
          error={errors.senderEmail ? t(errors.senderEmail) : undefined}
        />
      </div>

      <Input
        id="subject"
        label={t('contact.form.subjectLabel')}
        placeholder={t('contact.form.subjectPlaceholder')}
        value={values.subject}
        onChange={(e) => handleChange('subject', e.target.value)}
        error={errors.subject ? t(errors.subject) : undefined}
      />

      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          {t('contact.form.messageLabel')}
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder={t('contact.form.messagePlaceholder')}
          value={values.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className={`w-full rounded-xl border bg-white dark:bg-slate-900/80 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
            errors.message
              ? 'border-rose-500 focus:ring-rose-500'
              : 'border-slate-300 dark:border-slate-700'
          }`}
        />
        {errors.message && (
          <p className="text-xs text-rose-500">{t(errors.message)}</p>
        )}
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full">
        <Send className="w-4 h-4" />
        <span>{t('contact.form.submit')}</span>
      </Button>
    </form>
  );
}
