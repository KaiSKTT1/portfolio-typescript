import type { ContactErrors, ContactMessageDto } from '../types';

export function validateContactForm(values: ContactMessageDto): ContactErrors {
    const errors: ContactErrors = {};

    if (!values.senderName.trim()) {
        errors.senderName = 'contact.validation.senderNameRequired';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.senderEmail.trim()) {
        errors.senderEmail = 'contact.validation.senderEmailRequired';
    } else if (!emailRegex.test(values.senderEmail.trim())) {
        errors.senderEmail = 'contact.validation.senderEmailInvalid';
    }

    if (!values.subject.trim()) {
        errors.subject = 'contact.validation.subjectRequired';
    }

    if (!values.message.trim() || values.message.trim().length < 10) {
        errors.message = 'contact.validation.messageMinLength';
    }

    return errors;
}