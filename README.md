# DevPortfolio

Website portfolio cá nhân được xây dựng bằng React và TypeScript. Ứng dụng giới thiệu thông tin cá nhân, các dự án đã thực hiện và cung cấp biểu mẫu liên hệ.

## Tính năng

- Trang giới thiệu với hồ sơ cá nhân.
- Danh sách dự án, hỗ trợ tìm kiếm và lọc theo công nghệ.
- Trang chi tiết cho từng dự án, gồm mô tả vấn đề, giải pháp, công nghệ sử dụng và liên kết liên quan.
- Biểu mẫu liên hệ có kiểm tra họ tên, email, tiêu đề và nội dung tin nhắn.
- Giao diện sáng/tối; lựa chọn giao diện được lưu trong `localStorage`.
- Bố cục responsive cho màn hình di động và máy tính.

> Biểu mẫu liên hệ hiện kiểm tra dữ liệu ở phía trình duyệt và hiển thị trạng thái thành công; chưa kết nối API gửi email hoặc backend.

## Công nghệ

- React 19 và TypeScript
- Vite
- Tailwind CSS 4
- React Router
- Redux Toolkit
- Lucide React
- i18next và react-i18next

## Bắt đầu

Cần cài đặt Node.js và npm trước khi chạy dự án.

```bash
npm install
npm run dev
```

Sau đó mở địa chỉ local mà Vite hiển thị trong terminal.

## Scripts

| Lệnh | Mô tả |
| --- | --- |
| `npm run dev` | Chạy ứng dụng ở chế độ phát triển |
| `npm run build` | Kiểm tra TypeScript và tạo bản build production |
| `npm run lint` | Kiểm tra mã nguồn bằng ESLint |
| `npm run preview` | Xem thử bản build production |

## Đa ngôn ngữ

Ứng dụng hỗ trợ tiếng Việt và tiếng Anh. Cấu hình i18next nằm trong `src/i18n.ts`; nội dung bản dịch được lưu tại `src/locales/vi.json` và `src/locales/en.json`.

Trong component React, dùng `useTranslation` để lấy hàm `t`:

```tsx
import { useTranslation } from 'react-i18next';

function Example() {
  const { t } = useTranslation();
  return <h1>{t('projects.heading.title')}</h1>;
}
```

Nút EN/VI đổi ngôn ngữ bằng i18next. Ngôn ngữ đã chọn được lưu trong `localStorage` với key `portfolio_language` và được khôi phục khi tải lại trang.

## Các trang

| Đường dẫn | Nội dung |
| --- | --- |
| `/` | Giới thiệu |
| `/projects` | Danh sách và bộ lọc dự án |
| `/projects/:id` | Chi tiết dự án |
| `/contact` | Thông tin liên hệ và biểu mẫu |

## Cấu trúc chính

```text
src/
├── features/
│   ├── about/       # Trang giới thiệu và dữ liệu hồ sơ
│   ├── projects/    # Danh sách, bộ lọc và chi tiết dự án
│   └── contact/     # Thông tin liên hệ và biểu mẫu
├── routes/          # Khai báo các route
├── locales/         # Nội dung tiếng Việt và tiếng Anh
├── i18n.ts          # Cấu hình i18next
├── shared/          # Thành phần, hook và tiện ích dùng chung
└── store/           # Redux store và trạng thái giao diện
```

## Cập nhật nội dung portfolio

- Thông tin hồ sơ: `src/features/about/data/profileData.ts`
- Dữ liệu dự án: `src/features/projects/data/projectsData.ts`
- Thông tin liên hệ: `src/features/contact/data/contactData.ts`
