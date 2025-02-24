import {createSlice} from "@reduxjs/toolkit"
import initialState from "./initialState";

const globalSlice = createSlice({
    name: "global",
    initialState: initialState,
    reducers: {}
})

export default globalSlice.reducer;