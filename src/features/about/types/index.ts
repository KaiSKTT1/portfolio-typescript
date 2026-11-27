export interface SocialItem {
    platform: 'github' | 'linkedin' | 'email';
    label: string;
    url: string;
}

export interface StatHighlight {
    label: string;
    value: string;
}

export interface ProfileInfo {
    fullName: string;
    role: string;
    tagline: string;
    bio: string[];
    location: string;
    email: string;
    avatarUrl: string;
    resumeUrl: string;
    availableForWork: boolean;
    stats: StatHighlight[];
    socials: SocialItem[];
}