import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import MainApp from "./main/App";
import AdminApp from "./admin/App";
import mainStore from "./redux/reducers/main/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                {/* Main için rotalar */}
                <Route path="/*" element={
                    <Provider store={mainStore}>
                        <MainApp />
                    </Provider>
                } />

                {/* Admin için rotalar */}
                {/*<Route path="/admin/*" element={<AdminApp />} />*/}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);