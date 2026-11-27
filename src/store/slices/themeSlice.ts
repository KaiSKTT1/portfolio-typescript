import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ThemeMode, Language } from '../../shared/types/common';

//Trạng thái giao diện người dùng
interface ThemeState {
    mode: ThemeMode;
    language: Language;
}

//kiểm tra xem người dùng đã từng chọn giao diện nào chưa.
const getInitialTheme = (): ThemeMode => {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('portfolio_theme') as ThemeMode | null;
        if (saved === 'dark' || saved === 'light') return saved;
    }
    return 'light';
};

const initialState: ThemeState = {
    mode: getInitialTheme(),
    language: 'vi',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
            if (typeof window !== 'undefined') {
                localStorage.setItem('portfolio_theme', state.mode);
            }
        },
        setTheme(state, action: PayloadAction<ThemeMode>) {
            state.mode = action.payload;
            if (typeof window !== 'undefined') {
                localStorage.setItem('portfolio_theme', state.mode);
            }
        },
        toggleLanguage(state) {
            state.language = state.language === 'en' ? 'vi' : 'en';
        },
    }
});

export const { toggleTheme, setTheme, toggleLanguage } = themeSlice.actions;
export default themeSlice.reducer;