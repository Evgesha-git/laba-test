import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TRewiews } from "../../types/rewiewsType";

type TInit = {
    loading: boolean,
    error: null | string,
    data: null | TRewiews[],
}

const initState: TInit = {
    loading: false,
    error: null,
    data: null,
}

export const rewiewsSlice = createSlice({
    name: 'rewiews',
    initialState: initState,
    reducers: {
        setData(state, action: PayloadAction<TRewiews[]>){
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        setLoading(state){
            state.loading = true;
        },
        setError(state, action: PayloadAction<string>){
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export default rewiewsSlice.reducer