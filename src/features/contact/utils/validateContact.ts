import type { ContactErrors, ContactMessageDto } from '../types';

export function validateContactForm(values: ContactMessageDto): ContactErrors {
    const errors: ContactErrors = {};

    if (!values.senderName.trim()) {
        errors.senderName = 'Vui lòng nhập họ tên của bạn.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.senderEmail.trim()) {
        errors.senderEmail = 'Vui lòng nhập địa chỉ email.';
    } else if (!emailRegex.test(values.senderEmail.trim())) {
        errors.senderEmail = 'Địa chỉ email không hợp lệ.';
    }

    if (!values.subject.trim()) {
        errors.subject = 'Vui lòng nhập tiêu đề liên hệ.';
    }

    if (!values.message.trim() || values.message.trim().length < 10) {
        errors.message = 'Nội dung tin nhắn cần ít nhất 10 ký tự.';
    }

    return errors;
}