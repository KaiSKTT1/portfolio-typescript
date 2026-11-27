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
    label: string;
    value: string;
    href?: string;
}