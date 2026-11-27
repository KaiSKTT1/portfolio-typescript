export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
} // Gộp các className lại với nhau, loại bỏ các giá trị falsy (undefined, null, false) và trả về một chuỗi className hợp lệ.