# Tài Liệu Kiến Trúc Dự Án Portfolio: ReactJS + TypeScript + Redux Toolkit (Static Data)

Dự án **Developer Portfolio** này áp dụng kiến trúc **Feature-based** (TypeScript + phân chia thư mục từng tính năng rõ ràng, dùng tầng `data/` tĩnh chuẩn TypeScript không phụ thuộc Backend) kết hợp với **Redux Toolkit** quản lý Global Client State (Dark/Light Mode, Ngôn ngữ).

---

## 1. Sơ Đồ Cây Thư Mục Toàn Dự Án (`portfolio/`)

```text
portfolio/
├── ARCHITECTURE.md                  # Tài liệu giải thích kiến trúc này
├── index.html                       # File HTML gốc
├── package.json                     # Khai báo thư viện (React, Redux Toolkit, Router, Tailwind)
├── tsconfig.json                    # Cấu hình TypeScript & alias (@/*, @store/*, @shared/*, @features/*)
├── vite.config.ts                   # Cấu hình Vite bundler
└── src/
    ├── main.tsx                     # [1] Điểm khởi chạy: Mount React & bọc <Provider store={store}>
    ├── App.tsx                      # [2] Component gốc: Bọc <RouterProvider /> & các Widget toàn cục
    │
    ├── store/                       # [3] TRẠM TRUNG TÂM REDUX TOOLKIT (Client Global State)
    │   ├── index.ts                 # Ghép các slices vào configureStore; xuất kiểu RootState, AppDispatch
    │   ├── hooks.ts                 # Định nghĩa useAppDispatch() và useAppSelector() chuẩn TypeScript
    │   └── slices/                  # Kho lưu biến toàn cục trên trình duyệt
    │       └── themeSlice.ts        # Lưu chế độ Dark/Light mode & ngôn ngữ hiển thị (VI/EN) toàn trang
    │
    ├── routes/                      # [4] HỆ THỐNG ĐỊNH TUYẾN (ROUTING)
    │   └── index.tsx                # Bản đồ nối URL (/, /projects, /experience, /blog, /contact) với các Page
    │
    ├── shared/                      # [5] ĐỒ DÙNG CHUNG TOÀN DỰ ÁN (Không gắn cứng với 1 mục riêng lẻ)
    │   ├── components/
    │   │   ├── layout/
    │   │   │   ├── PortfolioLayout.tsx  # Khung chung: Header + <Outlet /> + Footer
    │   │   │   ├── Header.tsx           # Thanh điều hướng (Menu + Nút đổi Dark Mode)
    │   │   │   └── Footer.tsx           # Chân trang bản quyền & link nhanh
    │   │   └── ui/                      # Các mảnh giao diện nguyên tử tái sử dụng ở mọi trang
    │   │       ├── Button.tsx           # Nút bấm chuẩn
    │   │       ├── Input.tsx            # Ô nhập liệu có kèm hiển thị lỗi
    │   │       ├── Modal.tsx            # Cửa sổ Popup dùng chung
    │   │       ├── Badge.tsx            # Thẻ gắn nhãn công nghệ (ví dụ: "React", "TypeScript", "Redux")
    │   │       └── SectionHeading.tsx   # Tiêu đề chuẩn của từng phần trên Portfolio
    │   ├── hooks/
    │   │   ├── useDebounce.ts           # Trì hoãn giá trị khi gõ vào ô tìm kiếm Project / Blog
    │   │   └── useScrollSpy.ts          # Theo dõi vị trí cuộn trang để làm sáng menu đang xem
    │   ├── types/
    │   │   └── common.ts                # Kiểu Generic dùng chung toàn dự án
    │   └── utils/
    │       ├── formatDate.ts            # Định dạng ngày tháng cho bài Blog & Timeline kinh nghiệm
    │       └── cn.ts                    # Hàm gộp class Tailwind CSS
    │
    └── features/                    # [6] 5 TÍNH NĂNG CỐT LÕI CỦA TRANG PORTFOLIO
        │
        ├── about/                   # Feature 1: Giới thiệu bản thân & Tải CV
        │   ├── types/
        │   │   └── index.ts         # DTO: ProfileInfo, SocialItem
        │   ├── data/
        │   │   └── profileData.ts   # Dữ liệu cá nhân, bio, link CV, thông tin giới thiệu
        │   ├── components/
        │   │   ├── HeroSection.tsx          # Banner mở đầu (Tên, Chức danh, Ảnh đại diện, CTA)
        │   │   ├── AboutSection.tsx         # Đoạn giới thiệu bản thân & định hướng nghề nghiệp
        │   │   └── ResumeDownloadButton.tsx # Nút xem / tải file PDF CV
        │   └── pages/
        │       └── HomePage.tsx             # Trang chủ Portfolio (/)
        │
        ├── projects/                # Feature 2: Trưng bày các Dự án đã làm (Filter & Detail)
        │   ├── types/
        │   │   └── index.ts         # DTO: Project, ProjectFilterParams
        │   ├── data/
        │   │   └── projectsData.ts  # Danh sách các dự án nổi bật của bạn
        │   ├── hooks/
        │   │   └── useProjectFilters.ts     # Hook Service: lọc dự án theo tag công nghệ (React, Node...) & từ khóa
        │   ├── utils/
        │   │   └── projectHelpers.ts        # Hàm thuần túy: trích xuất danh sách tech stack, lọc mảng dự án
        │   ├── components/
        │   │   ├── ProjectCard.tsx          # Thẻ hiển thị 1 dự án (Ảnh demo, Tech stack badges, Link GitHub & Live Demo)
        │   │   └── ProjectFilterBar.tsx     # Thanh chọn lọc theo công nghệ & ô tìm kiếm
        │   └── pages/
        │       ├── ProjectsPage.tsx         # Trang danh sách dự án (/projects)
        │       └── ProjectDetailPage.tsx    # Trang chi tiết 1 dự án: bài toán, kiến trúc, hình ảnh (/projects/:id)
        │
        ├── experience/              # Feature 3: Kỹ năng (Tech Stack) & Lộ trình Kinh nghiệm / Học vấn
        │   ├── types/
        │   │   └── index.ts         # DTO: SkillCategory, SkillItem, ExperienceItem, CertificateItem
        │   ├── data/
        │   │   └── experienceData.ts # Dữ liệu danh sách kỹ năng, kinh nghiệm làm việc/học tập & chứng chỉ
        │   ├── components/
        │   │   ├── SkillGrid.tsx            # Lưới biểu tượng kỹ năng chia theo nhóm (Frontend, Backend, Tools)
        │   │   ├── ExperienceTimeline.tsx   # Trục thời gian (Timeline) quá trình học tập & làm việc
        │   │   └── CertificateCard.tsx      # Thẻ chứng chỉ / giải thưởng
        │   └── pages/
        │       └── ExperiencePage.tsx       # Trang Kỹ năng & Kinh nghiệm (/experience)
        │
        ├── blog/                    # Feature 4: Góc chia sẻ bài viết kỹ thuật (Technical Blog)
        │   ├── types/
        │   │   └── index.ts         # DTO: BlogPost, BlogFilterParams
        │   ├── data/
        │   │   └── blogData.ts      # Danh sách các bài viết chia sẻ kiến thức của bạn
        │   ├── hooks/
        │   │   └── useBlogSearch.ts         # Hook Service: tìm kiếm bài viết theo từ khóa & chủ đề
        │   ├── utils/
        │   │   └── readingTime.ts           # Hàm thuần túy: đếm số từ để tính "5 phút đọc"
        │   ├── components/
        │   │   └── PostCard.tsx             # Thẻ tóm tắt bài viết
        │   └── pages/
        │       ├── BlogListPage.tsx         # Trang danh sách bài viết (/blog)
        │       └── BlogPostDetailPage.tsx   # Trang đọc chi tiết bài viết (/blog/:slug)
        │
        └── contact/                 # Feature 5: Liên hệ tuyển dụng / Gửi tin nhắn
            ├── types/
            │   └── index.ts         # DTO: ContactMessageDto, ContactInfo
            ├── data/
            │   └── contactData.ts   # Thông tin email, SĐT, địa chỉ và danh sách mạng xã hội
            ├── hooks/
            │   └── useContactForm.ts        # Hook Service: quản lý state form liên hệ & gửi mail (EmailJS/Formspree)
            ├── utils/
            │   └── validateContact.ts       # Hàm thuần túy: kiểm tra regex email, độ dài lời nhắn
            ├── components/
            │   ├── ContactForm.tsx          # Form nhập Tên, Email nhà tuyển dụng, Nội dung tin nhắn
            │   └── SocialLinks.tsx          # Danh sách nút liên kết GitHub, LinkedIn, Email, Điện thoại
            └── pages/
                └── ContactPage.tsx          # Trang Liên hệ (/contact)
```

---

## 2. Vai Trò Cụ Thể Của Từng Thư Mục Con Bên Trong Mỗi Feature

Trong mỗi thư mục `src/features/<tên-feature>/`, các file được đặt theo quy tắc phân tầng rõ ràng:

| Thư mục con | Chứa gì? | Quy tắc bắt buộc |
| :--- | :--- | :--- |
| **`types/`** | Các `interface` và `type` của TypeScript (`Project`, `BlogPost`, `ProfileInfo`...). | Chỉ định nghĩa kiểu dữ liệu, không chứa logic chạy. |
| **`data/`** | Dữ liệu tĩnh được gõ kiểu chặt chẽ từ `types/` (`PROJECTS`, `EXPERIENCES`, `BLOG_POSTS`...). | Đóng vai trò nguồn dữ liệu chuẩn, sau này nếu có Backend chỉ cần thay tầng này bằng API. |
| **`hooks/`** | Các Custom Hooks (`useProjectFilters.ts`, `useContactForm.ts`) quản lý `useState`, `useMemo`, `useSearchParams`. | Trả về `{ state, actions }` để file giao diện `.tsx` gọi. |
| **`utils/`** | Các hàm tính toán thuần túy (`readingTime.ts`, `validateContact.ts`). | **Không** dùng React Hook. Gọi tự do ở mọi nơi. |
| **`components/`** | Các mảnh giao diện nhỏ của riêng tính năng đó (`ProjectCard.tsx`, `SkillGrid.tsx`). | Nhận dữ liệu qua `props`, tập trung hiển thị UI. |
| **`pages/`** | Màn hình hoàn chỉnh gắn với 1 đường dẫn URL trong `src/routes/index.tsx`. | Kết nối dữ liệu từ `data/` hoặc `hooks/` rồi lắp ghép các `components/` lại với nhau. |

---

## 3. Lộ Trình 6 Bước Để Tự Tay Viết Code

1. **Bước 1 — Cấu hình dự án:**
   - Cài đặt thư viện cần thiết (`react-router-dom`, `@reduxjs/toolkit`, `react-redux`, `tailwindcss`, `lucide-react`) và cấu hình alias `@/*` trong `tsconfig.json` & `vite.config.ts`.
2. **Bước 2 — Dựng khung Redux Store (`src/store/`):**
   - Viết `src/store/slices/themeSlice.ts` (quản lý Dark/Light mode & ngôn ngữ).
   - Viết `src/store/index.ts` → `src/store/hooks.ts` (`useAppDispatch`, `useAppSelector`).
3. **Bước 3 — Dựng khung Dùng chung (`src/shared/`):**
   - Viết `types/common.ts`, `utils/cn.ts`, `utils/formatDate.ts`, `hooks/useDebounce.ts`, `hooks/useScrollSpy.ts`.
   - Viết bộ UI cơ bản: `Button.tsx`, `Input.tsx`, `Badge.tsx`, `Modal.tsx`, `SectionHeading.tsx`.
   - Viết khung trang: `Header.tsx`, `Footer.tsx`, `PortfolioLayout.tsx`.
4. **Bước 4 — Code Feature quan trọng nhất (`src/features/projects/`):**
   - Đi theo thứ tự: `types/index.ts` → `data/projectsData.ts` → `utils/projectHelpers.ts` → `hooks/useProjectFilters.ts` → `components/ProjectCard.tsx` & `ProjectFilterBar.tsx` → `pages/ProjectsPage.tsx` & `ProjectDetailPage.tsx`.
5. **Bước 5 — Code các Feature còn lại (`about`, `experience`, `blog`, `contact`):**
   - Áp dụng đúng công thức `types/` → `data/` → `utils/hooks/` → `components/` → `pages/`.
6. **Bước 6 — Nối tất cả vào Router (`src/routes/`):**
   - Viết `src/routes/index.tsx` → `src/App.tsx` → `src/main.tsx`.
