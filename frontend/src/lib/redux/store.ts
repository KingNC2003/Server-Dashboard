import { configureStore } from "@reduxjs/toolkit";
import tempReducer from "./features/tempSlice";

export const store = configureStore({
    reducer: {
        temp: tempReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store