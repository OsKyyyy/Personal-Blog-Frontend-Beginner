import {Navigate, Route, Routes} from "react-router-dom";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import BlogList from "./pages/BlogList";
import BlogAdd from "./pages/BlogAdd";
import useCustomFunctions from "../assets/admin/js/admin";
import Waves from "node-waves";
import 'node-waves/dist/waves.min.css';

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
                <Route path="/blog/add" element={<BlogAdd/>}/>
                <Route path="/blog/list" element={<BlogList/>}/>
            </Routes>
        </div>
    )
}

export default AdminApp;