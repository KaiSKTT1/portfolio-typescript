import { FileDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../shared/components/ui/Button';

interface ResumeDownloadButtonProps {
    resumeUrl: string;
}

export function ResumeDownloadButton({ resumeUrl }: ResumeDownloadButtonProps) {
    const { t } = useTranslation();

    return (
        <a href={resumeUrl} download target="_blank" rel="noreferrer">
            <Button variant="outline" size="lg">
                <FileDown className="w-4 h-4" />
                <span>{t('resume.download')}</span>
            </Button>
        </a>
    );
}