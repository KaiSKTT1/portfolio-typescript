import { FileDown } from 'lucide-react';
import { Button } from '../../../shared/components/ui/Button';

interface ResumeDownloadButtonProps {
    resumeUrl: string;
}

export function ResumeDownloadButton({ resumeUrl }: ResumeDownloadButtonProps) {
    return (
        <a href={resumeUrl} download target="_blank" rel="noreferrer">
            <Button variant="outline" size="lg">
                <FileDown className="w-4 h-4" />
                <span>Tải CV (PDF)</span>
            </Button>
        </a>
    );
}