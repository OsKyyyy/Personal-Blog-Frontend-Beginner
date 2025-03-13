import {Navigate, Route, Routes} from "react-router-dom";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import BlogList from "./pages/BlogList";
import BlogAdd from "./pages/BlogAdd";
import useCustomFunctions from "../assets/admin/js/admin";
import Waves from "node-waves";
import 'node-waves/dist/waves.min.css';
import BlogEdit from "./pages/BlogEdit";
import About from "./pages/About";
import ResumeAdd from "./pages/ResumeAdd";
import ResumeList from "./pages/ResumeList";
import ResumeEdit from "./pages/ResumeEdit";
import Contact from "./pages/Contact";
import Comment from "./pages/Comment";

const AdminApp = () => {

    useEffect(() => {
        const loadAdminAssets = async () => {
            await import ('../assets/admin/css/bootstrap.min.css');
            await import ('../assets/admin/css/AdminApp.css');
            await import ('../assets/admin/css/icons.min.css');
        };
        loadAdminAssets();
    }, []);

    const { handleMenuClick } = useCustomFunctions();

    useEffect(() => {
        handleMenuClick();
    }, [handleMenuClick]);

    useEffect(() => {
        Waves.init();
        Waves.attach(".waves-effect");
    }, []);

    const token = useSelector(state => state.auth.token);

    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div id="layout-wrapper">
            <Header/>
            <aside className="sidebar">
                <Sidebar />
            </aside>
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/comment" element={<Comment/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/resume/add" element={<ResumeAdd/>}/>
                <Route path="/resume/edit/:id" element={<ResumeEdit/>}/>
                <Route path="/resume/edit" element={<Navigate to="/admin/resume/list" />}/>
                <Route path="/resume/list" element={<ResumeList/>}/>
                <Route path="/blog/add" element={<BlogAdd/>}/>
                <Route path="/blog/edit/:id" element={<BlogEdit/>}/>
                <Route path="/blog/edit" element={<Navigate to="/admin/blog/list" />}/>
                <Route path="/blog/list" element={<BlogList/>}/>
            </Routes>
        </div>
    )
}

export default AdminApp;