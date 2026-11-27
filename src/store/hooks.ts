import {type TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDispatch} from './index';

// Sử dụng các hook được typed để sử dụng trong các component
//const tên_biến : KIỂU_DỮ_LIỆU = GIÁ_TRỊ_THẬT;
//const tên_biến = GIÁ_TRỊ_THẬT;
export const useAppDispatch: () => AppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;