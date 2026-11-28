import type { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'elearning-platform',
    thumbnailUrl: '/projects/elearning-springboot.svg',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL'],
    githubUrl: 'https://github.com/KaiSKTT1/Elearning-Platform',
    featured: true,
    completedAt: '2026-04-15',
  },
  {
    id: 'j2ee-ecommerce-backend',
    thumbnailUrl: '/projects/j2ee-backend.svg',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'Flyway', 'VNPay', 'Cloudinary'],
    githubUrl: 'https://github.com/Brotato-O/J2EE-backend',
    featured: true,
    completedAt: '2026-11-27',
  },
  {
    id: 'lthd-springboot-fullstack',
    thumbnailUrl: '/projects/lthd-fullstack.svg',
    techStack: ['Spring Boot', 'React', 'Redis', 'JWT', 'Tailwind CSS', 'MySQL'],
    githubUrl: 'https://github.com/Brotato-O/LTHD---SpringBoot',
    featured: true,
    completedAt: '2026-11-13',
  },
  {
    id: 'bus-tracking-system',
    thumbnailUrl: '/projects/bus-tracking.svg',
    techStack: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'Leaflet', 'MySQL'],
    githubUrl: 'https://github.com/KaiSKTT1/BusTracking',
    featured: false,
    completedAt: '2025-11-26',
  },
  {
    id: 'pdf-rag-chatbot',
    thumbnailUrl: '/projects/pdf-rag.svg',
    techStack: ['Python', 'RAG', 'Ollama', 'LLM', 'Streamlit', 'OCR'],
    githubUrl: 'https://github.com/KaiSKTT1/pdf-RAG',
    featured: true,
    completedAt: '2026-05-11',
  },
];
