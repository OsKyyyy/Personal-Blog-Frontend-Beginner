import {createSlice} from "@reduxjs/toolkit"
import initialState from "./initialState";

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;

            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("user", action.payload.user);
        },
        logout: (state) => {
            state.user = null;
            state.token = null;

            localStorage.removeItem("token");
        }
    }
})

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;