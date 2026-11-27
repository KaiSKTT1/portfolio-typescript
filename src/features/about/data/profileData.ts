import type { ProfileInfo } from '../types';

export const PROFILE_DATA: ProfileInfo = {
  fullName: 'Nguyễn Hữu Phúc',
  role: 'Software Engineer (ReactJS / TypeScript & Spring Boot)',
  tagline:
    'Phát triển ứng dụng Web toàn diện từ giao diện Frontend hiện đại, mượt mà với ReactJS, TypeScript, Redux đến hệ thống Backend RESTful API vững chắc với Java Spring Boot.',
  bio: [
    'Xin chào! Mình là Nguyễn Hữu Phúc — một Software Engineer yêu thích việc xây dựng các sản phẩm web hoàn chỉnh từ tầng giao diện người dùng cho đến kiến trúc hệ thống phía sau.',
    'Ở mảng Frontend, mình tập trung phát triển UI/UX trực quan, quản lý state chặt chẽ và dễ mở rộng với ReactJS, TypeScript, Redux Toolkit và Tailwind CSS theo kiến trúc Feature-based.',
    'Ở mảng Backend, mình làm việc với Java và Spring Boot để thiết kế RESTful API, xử lý nghiệp vụ, bảo mật và kết nối cơ sở dữ liệu, giúp mình luôn có góc nhìn tổng thể khi phối hợp phát triển sản phẩm.',
  ],
  location: 'TP. Hồ Chí Minh, Việt Nam',
  email: 'phucnguyen17072005@gmail.com',
  avatarUrl: '../../assets/images/avatar.jpg',
  resumeUrl: '',
  availableForWork: true,
  stats: [
    { label: 'Hướng phát triển', value: 'Fullstack' },
    { label: 'Core Tech Stack', value: 'React & Spring' },
  ],
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