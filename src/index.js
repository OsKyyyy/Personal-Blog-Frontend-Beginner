import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import 'bootstrap/dist/js/bootstrap.js';
import MainApp from "./main/MainApp";
import AdminApp from "./admin/AdminApp";
import Login from "./auth/Login";
import Store from "./redux/reducers/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logout from "./auth/Logout";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
            <Route path="/*" element={
                <Provider store={Store}>
                    <MainApp />
                </Provider>
            }/>
            <Route path="/admin/*" element={
                <Provider store={Store}>
                    <AdminApp />
                </Provider>
            }/>
            <Route path="/login" element={
                <Provider store={Store}>
                    <Login />
                </Provider>
            }/>
            <Route path="/logout" element={
                <Provider store={Store}>
                    <Logout />
                </Provider>
            }/>
        </Routes>
    </BrowserRouter>
);