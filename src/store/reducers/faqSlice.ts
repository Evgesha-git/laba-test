import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TFaq } from "../../types/faqTypes";

type TInit = {
    loading: boolean,
    faqData: null | TFaq[],
    error: null | string
}

const initState: TInit = {
    loading: false,
    faqData: null,
    error: null
}

export const faqSlice = createSlice({
    name: 'faq',
    initialState: initState,
    reducers: {
        setData(state, action: PayloadAction<TFaq[]>){
            state.loading = false;
            state.error = null;
            state.faqData = action.payload;
        },
        setLoading(state) {
            state.loading = true;
        },
        setError(state, action: PayloadAction<string>){
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export default faqSlice.reducer;