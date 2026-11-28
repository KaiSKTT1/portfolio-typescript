export interface ContactMessageDto {
    senderName: string;
    senderEmail: string;
    subject: string;
    message: string;
}

export interface ContactErrors {
    senderName?: string;
    senderEmail?: string;
    subject?: string;
    message?: string;
}

export interface ContactInfoItem {
    id: 'email' | 'phone' | 'location';
    value?: string;
    href?: string;
}