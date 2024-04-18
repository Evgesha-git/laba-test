import { configureStore, combineReducers } from "@reduxjs/toolkit";
import rewiewsReducer from './reducers/rewiewsSlice';
import faqReducer from "./reducers/faqSlice";

const rootReducer = combineReducers({
    rewiews: rewiewsReducer,
    faq: faqReducer,
    
});

export const setUpStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore['dispatch'];