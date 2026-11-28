import type { ProfileInfo } from '../types';
import avatarImg from '../../../assets/avatar.jpg';

export const PROFILE_DATA: ProfileInfo = {
    fullName: 'Nguyễn Hữu Phúc',
    email: 'phucnguyen17072005@gmail.com',
    avatarUrl: avatarImg,
    resumeUrl: '',
    availableForWork: true,
    socials: [
        {
            platform: 'github',
            label: 'GitHub',
            url: 'https://github.com/KaiSKTT1',
        },
        {
            platform: 'linkedin',
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/h%E1%BB%AFu-ph%C3%BAc-21828b316/',
        },
        {
            platform: 'email',
            label: 'Email',
            url: 'mailto:phucnguyen17072005@gmail.com',
        },
    ],
};