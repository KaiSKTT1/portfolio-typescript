import { type FormEvent, useState } from 'react';
import type { ContactErrors, ContactMessageDto } from '../types';
import { validateContactForm } from '../utils/validateContact';

const INITIAL_VALUES: ContactMessageDto = {
    senderName: '',
    senderEmail: '',
    subject: '',
    message: '',
};

export function useContactForm() {
    const [values, setValues] = useState<ContactMessageDto>(INITIAL_VALUES);
    const [errors, setErrors] = useState<ContactErrors>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (field: keyof ContactMessageDto, value: string) => {
        setValues((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const validationErrors = validateContactForm(values);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setIsSubmitted(true);
        setValues(INITIAL_VALUES);
    };

    return {
        values,
        errors,
        isSubmitted,
        setIsSubmitted,
        handleChange,
        handleSubmit,
    };
}