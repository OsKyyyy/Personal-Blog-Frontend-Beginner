import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/reducers/authSlice";
import {toast} from "react-toastify";

const Logout = () =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(logout());
        localStorage.removeItem("token");
        toast.success("Çıkış Başarılı");
        navigate("/login");
    }, []);
}

export default Logout;