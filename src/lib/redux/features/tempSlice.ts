import { createSlice } from "@reduxjs/toolkit";

type TempState = {
    message: string;
}

const initialState: TempState = {
    message: "temp"
}

const tempSlice = createSlice({
    name: "tempSlice",
    initialState,
    reducers: {
    setFiller: (state) => {
      state.message = "filler";
    },
    setTemp: (state) => {
      state.message = "temp";
    },
    }
})

export const { setFiller, setTemp } = tempSlice.actions;
export default tempSlice.reducer;