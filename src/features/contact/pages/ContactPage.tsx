import { SectionHeading } from '../../../shared/components/ui/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import { SocialLinks } from '../components/SocialLinks';

export function ContactPage() {
  return (
    <div>
      <SectionHeading
        badge="Get In Touch"
        title="Liên hệ với mình"
        subtitle="Bạn đang tìm kiếm Software Engineer cho dự án hoặc đội ngũ của mình? Hãy để lại lời nhắn bên dưới nhé!"
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