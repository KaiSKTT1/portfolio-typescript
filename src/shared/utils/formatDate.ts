export function formatDate(dateString: string, locale: 'vi-VN' | 'en-US' = 'vi-VN'): string {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }).format(date);
}