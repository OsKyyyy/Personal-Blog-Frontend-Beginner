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
        },
        logout: (state) => {
            state.user = null;
            state.token = null;

            localStorage.removeItem("token");
        }
        // loginSuccess: (state, action) => {
        //     state.token = action.payload.token;
        //     state.isAuthenticated = true;
        //     state.user = action.payload.user;
        //     localStorage.setItem("token", action.payload.token);
        // },
        // logout: (state) => {
        //     state.token = null;
        //     state.isAuthenticated = false;
        //     state.user = null;
        //     localStorage.removeItem("token");
        // }
    }
})

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;