import { useEffect, useState } from 'react';

//Sử dụng Generic type T để có thể nhận bất kỳ kiểu dữ liệu nào
export function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        //Hủy timer vừa tạo để bắt đầu timer mới
        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
}