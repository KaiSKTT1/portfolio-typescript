import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../../../shared/components/ui/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import { SocialLinks } from '../components/SocialLinks';

export function ContactPage() {
  const { t } = useTranslation();

  return (
    <div>
      <SectionHeading
        badge={t('contact.heading.badge')}
        title={t('contact.heading.title')}
        subtitle={t('contact.heading.subtitle')}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5">
          <SocialLinks />
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}