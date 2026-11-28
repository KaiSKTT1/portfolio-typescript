export interface SocialItem {
    platform: 'github' | 'linkedin' | 'email';
    label: string;
    url: string;
}

export interface ProfileInfo {
    fullName: string;
    email: string;
    avatarUrl: string;
    resumeUrl: string;
    availableForWork: boolean;
    socials: SocialItem[];
}