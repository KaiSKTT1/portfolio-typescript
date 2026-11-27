import type { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'elearning-platform',
    title: 'E-Learning Platform — Spring Boot RESTful API',
    shortDescription:
      'Hệ thống Backend RESTful API hiện đại cho nền tảng học trực tuyến, tích hợp xác thực JWT, phân quyền RBAC và lưu trữ file đám mây.',
    problemStatement:
      'Xây dựng một hệ thống Backend E-Learning có khả năng mở rộng cao, quản lý chặt chẽ quyền truy cập giữa Học viên, Giảng viên và Quản trị viên, đồng thời xử lý lưu trữ tài nguyên bài giảng và hình ảnh an toàn.',
    solutionArchitecture:
      'Thiết kế kiến trúc phân tầng chuẩn với Java 21 và Spring Boot 3.5, sử dụng Spring Security + JWT (Access/Refresh Token) cho bảo mật, Spring Data JPA + MySQL 8.0 quản lý dữ liệu và tích hợp Cloud Storage để upload học liệu.',
    thumbnailUrl: '/projects/elearning-springboot.svg',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL'],
    githubUrl: 'https://github.com/KaiSKTT1/Elearning-Platform',
    featured: true,
    completedAt: '2026-04-15',
    highlights: [
      'Xác thực và phân quyền bảo mật với JWT (Access Token & Refresh Token) cùng Role-Based Access Control (RBAC).',
      'Quản lý trọn vẹn quy trình khóa học, bài giảng, đăng ký học và hồ sơ người dùng kèm upload avatar.',
      'Chuẩn hóa cấu trúc RESTful API, xử lý ngoại lệ tập trung (Global Exception Handling) và kiểm tra dữ liệu đầu vào.',
    ],
  },
  {
    id: 'j2ee-ecommerce-backend',
    title: 'J2EE E-Commerce Backend (GHN & VNPay Integration)',
    shortDescription:
      'Hệ thống Backend thương mại điện tử tích hợp cổng thanh toán VNPay Sandbox, vận chuyển Giao Hàng Nhanh (GHN) và quản lý migration với Flyway.',
    problemStatement:
      'Các hệ thống bán hàng thực tế đòi hỏi quy trình thanh toán trực tuyến chính xác, đối soát giao dịch tự động (IPN reconciliation) và đồng bộ trạng thái vận đơn thời gian thực với đơn vị giao hàng.',
    solutionArchitecture:
      'Xây dựng trên nền tảng Java 21, Spring Boot, Spring Security và MySQL. Sử dụng Flyway để quản lý phiên bản schema DB, MapStruct ánh xạ DTO hiệu năng cao, Cloudinary lưu trữ ảnh sản phẩm và tích hợp Webhook/API của VNPay & GHN.',
    thumbnailUrl: '/projects/j2ee-backend.svg',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'Flyway', 'VNPay', 'Cloudinary'],
    githubUrl: 'https://github.com/Brotato-O/J2EE-backend',
    featured: true,
    completedAt: '2026-11-27',
    highlights: [
      'Tích hợp thanh toán VNPay Sandbox hỗ trợ tạo URL thanh toán và xử lý Webhook IPN đối soát trạng thái đơn hàng.',
      'Kết nối API Giao Hàng Nhanh (GHN) để tự động tạo, hủy và theo dõi hành trình vận đơn.',
      'Quản lý database migration bài bản với Flyway, kết hợp MapStruct, Lombok và tài liệu hóa API qua SpringDoc OpenAPI (Swagger).',
    ],
  },
  {
    id: 'lthd-springboot-fullstack',
    title: 'Fullstack Sales System (Spring Boot & React 19)',
    shortDescription:
      'Hệ thống quản lý bán hàng Fullstack kết hợp Backend Spring Boot bảo mật JWT, bộ nhớ đệm Redis và giao diện Frontend React 19 + Tailwind CSS v4.',
    problemStatement:
      'Tối ưu hóa tốc độ truy xuất dữ liệu sản phẩm/đơn hàng khi lượng truy cập tăng, đồng thời mang lại trải nghiệm mua sắm và quản trị mượt mà trên trình duyệt.',
    solutionArchitecture:
      'Kiến trúc tách biệt Client-Server: Backend sử dụng Java 21, Spring Boot, Nimbus JOSE + JWT, MapStruct và tích hợp Redis Cache để tăng tốc độ phản hồi API; Frontend xây dựng bằng React 19, Vite, React Router v7 và Tailwind CSS v4.',
    thumbnailUrl: '/projects/lthd-fullstack.svg',
    techStack: ['Spring Boot', 'React', 'Redis', 'JWT', 'Tailwind CSS', 'MySQL'],
    githubUrl: 'https://github.com/Brotato-O/LTHD---SpringBoot',
    featured: true,
    completedAt: '2026-11-13',
    highlights: [
      'Ứng dụng Spring Data Redis làm tầng bộ nhớ đệm (Caching) giúp giảm tải truy vấn trực tiếp xuống MySQL.',
      'Bảo mật API bằng Spring Security kết hợp thư viện Nimbus JOSE + JWT và kiểm thử tích hợp với MockMvc & H2 Database.',
      'Giao diện người dùng hiện đại phát triển trên React 19, Tailwind CSS v4 và Axios kết nối đồng bộ với REST API.',
    ],
  },
  {
    id: 'bus-tracking-system',
    title: 'BusTracking — Hệ Thống Theo Dõi Xe Buýt Thời Gian Thực',
    shortDescription:
      'Ứng dụng web Fullstack hỗ trợ tra cứu lộ trình, theo dõi vị trí xe buýt trực quan trên bản đồ số tương tác với React Leaflet và Redux Toolkit.',
    problemStatement:
      'Hành khách và nhà quản lý gặp khó khăn trong việc nắm bắt lộ trình tuyến xe, trạm dừng và theo dõi vị trí di chuyển trực quan trên bản đồ.',
    solutionArchitecture:
      'Phát triển mô hình Fullstack JavaScript: Frontend sử dụng React 19, Redux Toolkit quản lý trạng thái, React Leaflet & Leaflet Routing Machine hiển thị bản đồ lộ trình và Framer Motion tạo chuyển động; Backend dùng Node.js, Express và MySQL.',
    thumbnailUrl: '/projects/bus-tracking.svg',
    techStack: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'Leaflet', 'MySQL'],
    githubUrl: 'https://github.com/KaiSKTT1/BusTracking',
    featured: false,
    completedAt: '2025-11-26',
    highlights: [
      'Tích hợp bản đồ số tương tác bằng React Leaflet và Leaflet Routing Machine để vẽ tuyến đường và các trạm dừng.',
      'Quản lý state toàn cục mượt mà với Redux Toolkit, kết hợp hiệu ứng chuyển cảnh Framer Motion và Tailwind CSS.',
      'Xây dựng RESTful API với Node.js, Express và MySQL2 phục vụ dữ liệu tuyến xe, lịch trình và điểm dừng.',
    ],
  },
  {
    id: 'pdf-rag-chatbot',
    title: 'PDF/DOCX RAG Chatbot — Hỏi Đáp Tài Liệu Thông Minh',
    shortDescription:
      'Hệ thống AI Chatbot hỏi đáp trực tiếp trên tài liệu PDF/DOCX theo kiến trúc RAG chạy Local LLM qua Ollama, hỗ trợ OCR và trích dẫn nguồn trang.',
    problemStatement:
      'Việc tra cứu thông tin trong các tài liệu PDF/DOCX dài tốn nhiều thời gian, trong khi các mô hình LLM thông thường dễ gặp hiện tượng ảo giác (hallucination) và không trích dẫn được chính xác trang nguồn.',
    solutionArchitecture:
      'Triển khai pipeline Retrieval-Augmented Generation (RAG) bằng Python: Document Loader (hỗ trợ OCR tự động cho PDF scan) -> Text Splitter -> Embedding Model -> VectorStore -> Retriever kết hợp Local LLM qua Ollama và giao diện Streamlit.',
    thumbnailUrl: '/projects/pdf-rag.svg',
    techStack: ['Python', 'RAG', 'Ollama', 'LLM', 'Streamlit', 'OCR'],
    githubUrl: 'https://github.com/KaiSKTT1/pdf-RAG',
    featured: true,
    completedAt: '2026-05-11',
    highlights: [
      'Xây dựng luồng RAG hoàn chỉnh: Upload PDF/DOCX, phân mảnh văn bản (Chunking), tạo VectorStore và truy xuất ngữ cảnh chính xác.',
      'Tích hợp chế độ OCR linh hoạt (off/auto/force) cho tài liệu PDF dạng ảnh quét và trả về câu trả lời kèm Citations (nguồn, số trang).',
      'Vận hành hoàn toàn với Local LLM thông qua Ollama đảm bảo quyền riêng tư dữ liệu, hỗ trợ cả giao diện web Streamlit và CLI debug.',
    ],
  },
];
